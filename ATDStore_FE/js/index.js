$(document).ready(function () {
  var token = localStorage.getItem("token");
  var linkproduct = 'http://localhost:8080/product'

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
    method: "GET",
    url: `${linkproduct}/showindex`,
    headers: {
      'Authorization': `Bearer ${token}`
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
    
    if (msg.data) {
      var html = '';
      var special = '';
      console.log(msg)

      $.each(msg.data, function (index, value) {
        if (index == 0) {
          html += `<div
                    class="carousel-item position-relative active"
                    style="height: 430px"
                  >
                    <img
                      class="position-absolute w-100 h-100"
                      src="${linkproduct}/files/${value.image}"
                      style="object-fit: cover"
                    />
                    <div
                      class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="p-3" style="max-width: 700px">
                        <h1
                          class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                        >
                          ${value.name}
                        </h1>
                        <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                          ${value.name} From ${value.price}$
                        </p>
                        <a
                          class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="detail.html?id=${value.id}"
                          >Shop Now</a
                        >
                      </div>
                    </div>
                  </div>`
        } else if (index < 3) {
          html += `<div
                    class="carousel-item position-relative"
                    style="height: 430px"
                  >
                    <img
                      class="position-absolute w-100 h-100"
                      src="${linkproduct}/files/${value.image}"
                      style="object-fit: cover"
                    />
                    <div
                      class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="p-3" style="max-width: 700px">
                        <h1
                          class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                        >
                        ${value.name}
                        </h1>
                        <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                        ${value.name} From ${value.price}$
                        </p>
                        <a
                          class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="detail.html?id=${value.id}"
                          >Shop Now</a
                        >
                      </div>
                    </div>
                  </div>`
        } else {
          special += `<div class="product-offer mb-30" style="height: 200px">
                    <img class="img-fluid" src="${linkproduct}/files/${value.image}" alt="" />
                    <div class="offer-text">
                      <h6 class="text-white text-uppercase">Save ${value.salePercent}%</h6>
                      <h3 class="text-white mb-3">Special Offer</h3>
                      <a href="detail.html?id=${value.id}" class="btn btn-primary">Shop Now</a>
                    </div>
                  </div>`
        }
      })
      $("#index-product").append(html);
      $("#product-saleoffer").append(special);
    }
  });


  $.ajax({
    method: "GET",
    url: `${linkproduct}/showfeature`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).done(function (msg) {
    var feature = ''
    if (msg.data) {
      $.each(msg.data, function (index, value) {
        var discountprice = value.price - value.price * (value.salePercent / 100)
        feature += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="${linkproduct}/files/${value.image}" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="detail.html?id=${value.id}"
                    ><i class="fa fa-shopping-cart"></i
                  ></a>
                  
                </div>
              </div>
              <div class="text-center py-4">
                <a class="h6 text-decoration-none text-truncate" href="detail.html?id=${value.id}"
                style="white-space: normal">${value.name}</a
                >
                <div
                  class="d-flex align-items-center justify-content-center mt-2"
                >
                  <h5>${value.price}</h5>
                  <h6 class="text-muted ml-2"><del>$${discountprice}</del></h6>
                </div>
                <div
                  class="d-flex align-items-center justify-content-center mb-1"
                >
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>${value.ratingPoint}</small>
                  <small>(${value.ratingNumber})</small>
                </div>
              </div>
            </div>
          </div>`
      })
      $("#feature-product").append(feature)
    }
    console.log(msg)
  });

  $.ajax({
    method: "GET",
    url: `${linkproduct}/showlasted`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).done(function (msg) {
    var lasted = ''
    if (msg.data) {
      $.each(msg.data, function (index, value) {
        var discountprice = value.price - value.price * (value.salePercent / 100)
        lasted += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                  <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="${linkproduct}/files/${value.image}" alt="" />
                    <div class="product-action">
                      <a class="btn btn-outline-dark btn-square" href="detail.html?id=${value.id}"
                        ><i class="fa fa-shopping-cart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="detail.html?id=${value.id}"
                      >${value.name}</a
                    >
                    <div
                      class="d-flex align-items-center justify-content-center mt-2"
                    >
                      <h5>${value.price}</h5>
                      <h6 class="text-muted ml-2"><del>$${discountprice}</del></h6>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center mb-1"
                    >
                      <small class="fa fa-star text-primary mr-1"></small>
                      <small>${value.ratingPoint}</small>
                  <small>(${value.ratingNumber})</small>
                    </div>
                  </div>
                </div>
              </div>`
      })
      $("#lasted-product").append(lasted)
    }
    console.log(msg)
  })
})
