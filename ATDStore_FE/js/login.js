$(document).ready(function () {

    if (localStorage.getItem("token")) {
        window.location.href = 'index.html'
    }

    $("#btn-signin").click(function () {
        var email = $("#email").val()
        var password = $("#password").val()
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/login/signin",
            data: {
                username: email,
                password: password
            }
        })
            .done(function (msg) {
                console.log(msg)
                if (msg.data) {
                    localStorage.setItem("token", msg.data)
                    window.location.href = 'index.html'
                } else {
                    document.getElementById("msg").innerHTML = "User Or Password Incorrect!!!"
                    document.getElementById("msg").style.display = "block";
                }
            });
    })
})