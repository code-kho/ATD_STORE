var token = localStorage.getItem("token");

function checkout() {
        $.ajax({
            method: "POST",
            url: `http://localhost:8080/users/user/getUsersToken`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "token": token
            }
        }).done(function (msg) {

            if (msg.data) {
                window.location.href = "checkout.html";
            }

        }).fail(function (xhr, textStatus, errorThrown) {
                alert("You must login to checkout this order")
                window.location.href = "login.html";

        })
}




$(document).ready(function () {


    var linkproduct = 'http://localhost:8080/product';
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    var listProductId = [];



    for (var i = 0; i < cartItems.length; i++) {
        listProductId.push(cartItems[i].id);
    }

    var idList = JSON.stringify(listProductId);

    $.ajax({
      method: "POST",
      url: `http://localhost:8080/users/user/getUsersToken`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        "token": token
      }
    }).done(function (msg) {
      var itemList = JSON.parse(localStorage.getItem("cartItems"));
      var numberItemCart = 0;
      if (itemList != null) {
        for (let i = 0; i < itemList.length; i++) {
          numberItemCart += itemList[i].quantity;
        }
      }
      document.getElementById("numberProductCart").innerHTML = numberItemCart;
      if (msg.data.roleName == "ADMIN") {
        var html = `
        <h5 class="dropdown-item" >Hello: ${msg.data.fullname}</h5>
        <a href ="admin/admin-profile.html" class="dropdown-item" type="button">Admin Page</a>
        <a href = "logout.html" class="dropdown-item" type="button">Log out</a>`
        $("#checkLogin").append(html)
      } else {
        var html = `
        <h5 class="dropdown-item" >Hello: ${msg.data.fullname}</h5>
        <a href ="user-profile.html" class="dropdown-item" type="button">My account</a>
        <a href = "logout.html" class="dropdown-item" type="button">Log out</a>`
        $("#checkLogin").append(html)
      }
    }).fail(function (xhr, textStatus, errorThrown) {
      var html = `<a href = "login.html" class="dropdown-item" type="button">Sign in</a>
        <a href = "register.html" class="dropdown-item" type="button">Sign up</a>`
      $("#checkLogin").append(html)
    })


    $.ajax({
        method: "POST",
        url: `${linkproduct}/shopcart`,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: idList,
        contentType: 'application/json'
    }).done(function (msg) {
      
        var Subtotal = 0;
        var cartItem = ``;
        

        $.each(msg.data, function (index, value) {
            var discoutPrice = value.price - value.price * (value.salePercent / 100);
            cartItem += `<tr>
            <td class="align-middle">
              <img src="${linkproduct}/files/${value.image}" alt="" style="width: 50px" /> ${value.name}
            </td>
            <td class="align-middle">$${discoutPrice}</td>
            <td class="align-middle">
              <div
                class="input-group quantity mx-auto"
                style="width: 100px"
              >
                <div class="input-group-btn">
                
                </div>
                <span class="form-control form-control-sm bg-secondary border-0 text-center">${cartItems[index].quantity}</span>
                
                <div class="input-group-btn">
                </div>
              </div>
            </td>
            <td class="align-middle">$${cartItems[index].quantity * discoutPrice}</td>
            <td class="align-middle">
              <button class="btn btn-sm btn-danger delete-product">
                <i class="fa fa-times"></i>
              </button>
            </td>
          </tr>`

            Subtotal += cartItems[index].quantity * discoutPrice;
        })
        $("#cart-item").append(cartItem)

        var subtotalElement = document.getElementById("subtotal");
        subtotalElement.innerHTML = '$' + Subtotal;
        var subtotalElement = document.getElementById("total");
        subtotalElement.innerHTML = '$' + (Subtotal + 10);
        if (cartItem.length == 0) {
            var shippingCost = document.getElementById("shipping");
            subtotalElement.innerHTML = '$' + 0;
        }
    })

    $(document).on('click', '.delete-product', function () {
        var row = $(this).closest('tr');
        row.remove();

        var quantity = parseInt(row.find('.align-middle:nth-child(3) input').val());
        var name = row.find('.align-middle:nth-child(1)').text().trim();
        updateTotal()
        updateProductSystem(quantity, name)

    });

    function updateTotal() {
        var subtotal = 0;

        $('#cart-item tr').each(function () {
            var price = parseFloat($(this).find('.align-middle:nth-child(2)').text().replace('$', ''));
            var quantity = parseInt($(this).find('.align-middle:nth-child(3) input').val());
            var total = price * quantity;
            $(this).find('.align-middle:nth-child(4)').text('$' + total);

            subtotal += total;
        });

        $('#subtotal').text('$' + subtotal);
        $('#total').text('$' + (subtotal + 10));
    }

    function updateProductSystem(quantity, name) {

        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        var index = 0;

        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].name == name && cartItems[i].quantity == quantity) {
                index = i;
                break;
            }
        }
        cartItems.splice(index, 1);
        JSON.stringify(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
})