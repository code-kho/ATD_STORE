var userId = 0;
var productId = 0;
var token = localStorage.getItem("token");

$(document).ready(function () {

  
  var linkproduct = 'http://localhost:8080/product'
  let searchParam = new URLSearchParams(window.location.search)
  var id = searchParam.get('id')
  productId = id;

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
    var html = `<a href = "login.html" class="dropdown-item" type="button">Sign in</a>
      <a href = "register.html" class="dropdown-item" type="button">Sign up</a>`
    $("#checkLogin").append(html)
  })

  $.ajax({
    method: "GET",
    url: `${linkproduct}/details?id=${id}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).done(function (msg) {
    console.log(msg)
    if (msg.data) {
      var value = msg.data;
      var discoutPrice = value.price - value.price * (value.salePercent / 100);
      var productDetail = `<div class="row px-xl-5">
            <div class="col-lg-5 mb-30">
              <div
                id="product-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner bg-light">
                  <div class="carousel-item active">
                    <img class="w-100 h-100" src="${linkproduct}/files/${value.image}" alt="Image" />
                  </div>
                </div>
                
              </div>
            </div>
          
            <div class="col-lg-7 h-auto mb-30">
              <div class="h-100 bg-light p-30">
                <h3>${value.name}</h3>
                <div class="d-flex mb-3">
                  <div class="text-primary mr-2">
                    <small class="fas fa-star"></small>
                  </div>
                  <small class="pt-1">${value.ratingPoint}</small>
                  <small class="pt-1">(${value.ratingNumber} reviews)</small>
                </div>
                <h3 class="font-weight-semi-bold mb-4">$${discoutPrice}</h3>
                <p class="mb-4">
                  ${value.description}
                </p>
                <div class="d-flex mb-3">
                  ${value.capacity != 0 ? `<strong class="text-dark mr-3">Storage: ${value.capacity}GB</strong>` : ``}
                  
                </div>
                <div class="d-flex mb-4">
                  ${value.colorName != null ? `<strong class="text-dark mr-3">Color: ${value.colorName}</strong>` : ``} 
                  </div>
                <div class="d-flex align-items-center mb-4 pt-2">
          <div class="input-group quantity mr-3" style="width: 130px">
            <div class="input-group-btn">
              <button class="btn btn-primary btn-minus" onclick="decreaseQuantity()">
                <i class="fa fa-minus"></i>
              </button>
            </div>
            <input id="quantityInput" type="text" class="form-control bg-secondary border-0 text-center" value="1">
              <div class="input-group-btn">
                <button class="btn btn-primary btn-plus" onclick="increaseQuantity()">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <button class="btn btn-primary px-3" onclick="addToCart(${id})">
              <i class="fa fa-shopping-cart mr-1"></i> Add To Cart
            </button>
 </div>
                
              </div>
            </div>
          </div>
          <div class="row px-xl-5">
          <div class="col">
            <div class="bg-light p-30">
              <div class="nav nav-tabs mb-4">
                <a
                  class="nav-item nav-link active text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                  >Reviews (${value.ratingNumber})</a
                >
              </div>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-pane-3">
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="mb-4">${value.ratingNumber} review for ${value.name}</h4>`


      $.each(value.ratingProductList, function (index, rating) {
        productDetail += `<div class="media mb-4">
                        <div class="media-body">
                          <h6>
                            ${rating.userName}
                          </h6>
                          <div class="text-primary mb-2">
                            <i class="fas fa-star">Rating point: </i>
                            <small>${rating.ratingPoint}</small>
                          </div>
                          <p>
                           ${rating.content}
                          </p>
                        </div>
                      </div>`
      })


      productDetail += `</div>
            <div class="col-md-6">
              <h4 class="mb-4">Leave a review</h4>
              <div id="msg" style="display: none;">Show message</div>
              <div class="d-flex my-3">
                <p class="mb-0 mr-2">Your Rating :</p>
                <input type="number" class="form-control" min="1" max="5" id="ratingPoint" />
              </div>
              <form>
                <div class="form-group">
                  <label for="message">Your Review *</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group mb-0">
                <button type="button" class="btn btn-primary px-3" onclick="makeReviews()">
                <i class="fa  mr-1"></i> Leave Your Review
              </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>`
      $("#detailProduct-head").append(productDetail)
    }

    var cartItems = JSON.parse(localStorage.getItem("cartItems"));

    var itemList = JSON.parse(localStorage.getItem("cartItems"));
    var numberItemCart = 0;
    for (let i = 0; i < itemList.length; i++) {
      numberItemCart += itemList[i].quantity;
    }
    document.getElementById("numberProductCart").innerHTML = numberItemCart;

  });

})

function decreaseQuantity() {
  var inputElement = document.getElementById("quantityInput");
  var value = parseInt(inputElement.value);

  if (value > 1) {
    value--;
    inputElement.value = value;
  }
}

function increaseQuantity() {
  var inputElement = document.getElementById("quantityInput");
  var value = parseInt(inputElement.value);

  value++;
  inputElement.value = value;
}


function makeReviews() {
  var ratingPoint = document.getElementById("ratingPoint").value;
  var message = document.getElementById("message").value;

  if(userId == 0){
    
    document.getElementById("msg").style.display = 'block';
    document.getElementById("msg").innerHTML = 'Please <a href = "login.html">Login</a> To Make Review ';

  } else{
    $.ajax({
      method: "POST",
      url: `http://localhost:8080/users/user/makeRating`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        "userId": userId,
        "ProductId" : productId,
        "ratingPoint" : ratingPoint,
        "content" : message,
      }
    }).done(function (msg) {
      window.location.reload();
    })
  }
}


function addToCart(productId) {
  var inputElement = document.getElementById("quantityInput");

  var value = parseInt(inputElement.value);

  var cartItems = localStorage.getItem("cartItems");

  var isTrue = false;

  var linkproduct = 'http://localhost:8080/product'

  $.ajax({

    method: "GET",
    url: `${linkproduct}/details?id=${productId}`

  }).done(function (msg) {
    console.log(msg.data)
    if (msg) {

      if (value > msg.data.quantityInstock) {

        alert('This product have only ' + msg.data.quantityInstock + ' in stock, please add more');

      } else {

        if (!cartItems) {
          cartItems = [];
        } else {
          cartItems = JSON.parse(cartItems);

          for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id == productId) {
              cartItems[i].quantity += value;
              isTrue = true;
              break
            }
          }
        }

        if (isTrue == false) {
          var newItem = {
            quantity: value,
            id: productId
          };

          cartItems.push(newItem);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        window.location.reload();
      }
    }
  })


}