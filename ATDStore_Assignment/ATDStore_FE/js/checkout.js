var token = localStorage.getItem("token");
var userId = 0;


document.addEventListener("DOMContentLoaded", function () {
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

    userId = msg.data.id;
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
    alert("You must login to check out")
    window.location.href = "login.html";
  })



  var linkproduct = 'http://localhost:8080/product';
  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  var listProductId = [];

  if (!cartItems || cartItems.length == 0) {
    alert("You don't have any product in cart")
    window.location.href = "shop.html";
  }

  for (var i = 0; i < cartItems.length; i++) {
    listProductId.push(cartItems[i].id);
  }

  var idList = JSON.stringify(listProductId);

  $.ajax({
    method: "POST",
    url: `${linkproduct}/shopcart`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: idList,
    contentType: 'application/json'
  }).done(function (msg) {
    console.log(msg.data)

    var html = ``

    var totalPrice = 0;

    $.each(msg.data, function (index, value) {
      var discoutPrice = value.price - value.price * (value.salePercent / 100);
      html += `<div class="d-flex justify-content-between">
                <p>${value.name}<br></p>
                <p>${discoutPrice * cartItems[index].quantity}</p>
              </div>`
      totalPrice += discoutPrice * cartItems[index].quantity
    })

    var subTotal = `<h6>Subtotal</h6>
        <h6>$${totalPrice}</h6>`

    var total = `<h5>Total</h5>
        <h5>$${totalPrice + 10}</h5>`


    $("#subtotal").append(subTotal)
    $("#product").append(html)
    $("#total").append(total)

  })
})


document.getElementById("take-order").addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.querySelector('#take-order input[placeholder="John"]').value;
  var lastName = document.querySelector('#take-order input[placeholder="Doe"]').value;
  var email = document.querySelector('#take-order input[placeholder="example@email.com"]').value;
  var mobileNo = document.querySelector('#take-order input[placeholder="+123 456 789"]').value;
  var addressLine1 = document.querySelector('#take-order input[placeholder="123 Street"]').value;
  var itemList = JSON.parse(localStorage.getItem("cartItems"))
  console.log(itemList)

  var order = {
    id: userId,
    firstname: firstName,
    lastname: lastName,
    address: addressLine1,
    itemList
  }
  var orderFinal = JSON.stringify(order)

  linkOrder = `http://localhost:8080/order/makeorder`

  $.ajax({
    method: "POST",
    url: linkOrder,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: orderFinal,
    contentType: 'application/json'
  }).done(function (msg) {
    if (msg.data == true) {
      localStorage.removeItem("cartItems");
      window.location.href = "thanks.html";
    }

  })

})