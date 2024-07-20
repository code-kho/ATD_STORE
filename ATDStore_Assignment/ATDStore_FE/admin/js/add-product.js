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
        console.log(msg)
        var id = msg.data.id
        document.getElementById("login-name").innerHTML = `<div class="small">Logged in as:</div>
        ${msg.data.fullname}`;
        document.getElementById("user-name").innerHTML = msg.data.fullname;

    }).fail(function (xhr, textStatus, errorThrown) {
        window.location.href = "401.html";
    })


    $("#addproduct").click(function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var category = document.getElementById("category").value;
        var file = document.getElementById("fileInput").files[0];
        var quantity = document.getElementById("quantity").value;
        var description = document.getElementById("description").value;
        var color = document.getElementById("color").value;
        
        
        if(color == 'None Of Choice'){
            color = -1;
        }
        
        var capacity = document.getElementById("capacity").value;
        
        if(capacity == 'None Of Choice'){
            capacity = -1;
        }
        
        var price = document.getElementById("price").value;
        var salepercent = document.getElementById("sale-percent").value;
        var formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("color", color);
        formData.append("capacity", capacity);
        formData.append("price", price);
        formData.append("salepercent", salepercent);
        formData.append("file", file);



        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/product/admin/addproduct");
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementById("name").value = "";
                document.getElementById("category").value = "";
                document.getElementById("fileInput").value = "";
                document.getElementById("quantity").value = "";
                document.getElementById("description").value = "";
                document.getElementById("color").value = "";
                document.getElementById("capacity").value = "";
                document.getElementById("price").value = "";
                document.getElementById("sale-percent").value = "";
                document.getElementById('addSuccessMessage').classList.add('show');
                setTimeout(function () {
                    document.getElementById('addSuccessMessage').classList.remove('show');
                }, 3000);
            } else {

            }
        };
        xhr.send(formData);

    })
})