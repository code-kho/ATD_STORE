var token = localStorage.getItem("token");

$(document).ready(function () {
    $.ajax({
        method: "POST",
        url: `http://localhost:8080/users/admin/getUsersToken`,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            "token": token
        }
    }).done(function (msg) {
        let searchParam = new URLSearchParams(window.location.search);
        var orderid = searchParam.get('id');
        document.getElementById("user-name").innerHTML = msg.data.fullname;
        document.getElementById("login-name").innerHTML = `<div class="small">Logged in as:</div>
        ${msg.data.fullname}`;

        $.ajax({
            method: "POST",
            url: `http://localhost:8080/order/oderdetail`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "orderid": orderid
            }
        }).done(function (msg) {

            console.log(msg);
            var html = `<div class="media-body">
            <h6 class="mb-3"><h3>ORDER #${msg.data.id}</h3>
            </h6>
            <p class="text-black-50 mb-1"><i class="feather-map-pin"></i> ${msg.data.address}
            </p>
            <p class="text-black-50 mb-3"><i
                  class="feather-clock ml-2"></i> ${msg.data.orderDate}</p>
            <hr>
            <p class="mb-0 text-dark text-dark pt-2"><span
                  class="text-dark font-weight-bold"> Total Paid:</span> ${msg.data.totalPrice}$
                  <div class="float-right">
  
   <a href="#" id="approve-button" class="btn btn-sm btn-success"><i class="feather-check-circle"></i> Approve</a>
   <a href="#" id="cancel-button" class="btn btn-sm btn-danger"><i class="feather-trash"></i>Cancel</a>
</div>

            </p>
         </div>`;

            $("#order-detail").append(html);


            $("#cancel-button").click(function () {
                $.ajax({
                    method: "POST",
                    url: `http://localhost:8080/order/admin/updatestatus`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        "orderId" : orderid,
                        "status" : "No"
                    }
                }).done(function (msg) {
                    alert("Order Cancel Successfully!!!")
                })

            });

            
            $("#approve-button").click(function () {
                
                $.ajax({
                    method: "POST",
                    url: `http://localhost:8080/order/admin/updatestatus`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        "orderId" : orderid,
                        "status" : "Yes"
                    }
                }).done(function (msg) {
                   if(msg){
                    alert("Order have been confirmed")
                   }
                })
                
            });


            var itemHtml = ``


            $.each(msg.data.orderItemsList, function (index, value) {
                itemHtml += `<tr>
            <td>${value.productId}</td>
            <td>${value.productName}</td>
            <td>${value.quantity}</td>
            <td>${value.price}$</td>
         </tr>`
            })

            $("#item-list").append(itemHtml);

            var totalMoney = `<ul class="list-unstyled text-muted font-weight-bold">
         <li class="d-flex align-items-center justify-content-between">
            <h4>Subtotal</h4> <h5>$${msg.data.totalPrice - 10}</h5>
         </li>
         <li class="d-flex align-items-center justify-content-between">
            <h4>Delivery Fee</h4><h5>$10.00</h5>
         </li>
         <li class="d-flex align-items-center justify-content-between text-danger">
            <h4>Total</h4> <h5>$${msg.data.totalPrice}</h5>
         </li>
      </ul>`
            $("#total-money").append(totalMoney)
        })

    }).fail(function (xhr, textStatus, errorThrown) {
        window.location.href = "401.html";
    })
})