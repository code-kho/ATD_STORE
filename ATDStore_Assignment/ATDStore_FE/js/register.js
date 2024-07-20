$(document).ready(function () {

    if (localStorage.getItem("token")) {
        window.location.href = 'index.html'
    }

    document.getElementById("btn-signup").addEventListener("click", function (event) {
        event.preventDefault();
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var password = document.getElementById("password").value;
        var passwordConfirm = document.getElementById("confirmPassword").value;
        var address = document.getElementById("address").value;

        if (password != passwordConfirm) {

            document.getElementById("msg").innerHTML = "Password And Password Confirm Not Match!!!"
            document.getElementById("msg").style.display = "block";
        } else {
            var user = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": password,
                "address": address,
            };

            $.ajax({
                method: "POST",
                contentType: "application/json",
                url: "http://localhost:8080/login/signup",
                data: JSON.stringify(user)
            })
                .done(function (msg) {
                    if (msg.data == false) {
                        document.getElementById("msg").innerHTML = "This email already used!!!"
                        document.getElementById("msg").style.display = "block";
                    } else {
                        window.location.href = 'login.html'
                    }
                });
        }

    })
})