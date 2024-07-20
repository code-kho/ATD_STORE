var token = localStorage.getItem("token");

var id = '';

var oldemail = '';

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
        id = msg.data.id
        document.getElementById("name").value = msg.data.fullname;
        document.getElementById("phoneNumber").value = msg.data.phoneNumber;
        document.getElementById("address").value = msg.data.address;
        document.getElementById("email").value = msg.data.username;
        document.getElementById("user-name").innerHTML = msg.data.fullname;
        oldemail = msg.data.username;

    }).fail(function (xhr, textStatus, errorThrown) {
        window.location.href = "401.html";

    })

    $("#submit-basicinfo").click(function (event){
        event.preventDefault();

        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        $.ajax({
            method: "POST",
            url: `http://localhost:8080/users/updateBasicInfo`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "name": name,
                "phoneNumber": phoneNumber,
                "id": id, 
                "address": address 
            }
        }).done(function (msg) {
            localStorage.setItem("token", msg.data)
            alert('Update Successfully!!!')
            location.reload();
    
        }).fail(function (xhr, textStatus, errorThrown) {
            window.location.href = "401.html";
    
        })
    })


    $("#submit-security").click(function (event){
        event.preventDefault();

        var oldPassword = document.getElementById("oldpass").value;
        var newPassword = document.getElementById("newpass").value;
        var oldUsername = oldemail;
        var newUsername = document.getElementById("email").value;
        $.ajax({
            method: "POST",
            url: `http://localhost:8080/users/updateSecurityInfo`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "oldPassword": oldPassword,
                "newPassword": newPassword,
                "oldUsername": oldUsername, 
                "newUsername": newUsername 
            }
        }).done(function (msg) {
            localStorage.setItem("token", msg.data)
            alert('Update Successfully!!!')
            location.reload();
    
        })
    })


})
