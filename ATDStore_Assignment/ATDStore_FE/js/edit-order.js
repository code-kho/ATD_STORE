var token = localStorage.getItem("token");

$(document).ready(function () {
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
        var id = msg.data.id


        $.ajax({
            method: "POST",
            url: `http://localhost:8080/order/getorder`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "userId": id
            }
        }).done(function (msg) {
            var html = ``

            $.each(msg.data, function (index, value) {

                var status = value.status;

                if(status == ""){
                    status = `class="btn btn-sm btn-primary btn-round">Created`;
                } else if(status == "Yes"){
                    status = `class="btn btn-sm btn-success btn-round">Confirmed`;
                } else{
                    status = `class="btn btn-sm btn-danger btn-round">Cancelled`;
                }

                html += `<tr>
                <td> ${value.fullName}</td>
                <td>${value.id}</td>
                class="btn btn-sm btn-danger btn-round">cancel
                <td><button disabled="" type="button" ${status} </button></td>
                <td>${value.orderDate}</td>
                <td>$${value.totalPrice}</td>
                <td><a href="edit-orderid.html?id=${value.id}" class="btn btn-primary btn-sm">Edit</a></td>
             </tr>`
            })

            $("#order-of-users").append(html);
             
             
        })

    }).fail(function (xhr, textStatus, errorThrown) {
        window.location.href = "401.html";

    })
    
})