


$(document).ready(function () {
    var token = localStorage.getItem("token");
    var linkproduct = 'http://localhost:8080/product'
    let searchParam = new URLSearchParams(window.location.search)
    var categoryName = searchParam.get('categoryname')
    var page = searchParam.get('page') || 0
    var numberOfProduct = searchParam.get('pagesize') || 9
    var sortKeyword = searchParam.get('sortkeyword') || 'quantityInstock'
    var sortType = searchParam.get('sorttype') || 'DESC'
    var searchKeyword = searchParam.get("searchkeyword") 


    var linkApi = ``
    if (categoryName) {
        page = 0;
        numberOfProduct = 1000;
        sortKeyword = 'quantityInstock'
        sortType = 'DESC'
        searchKeyword = `All`
        var linkApi = `http://localhost:8080/product/shop?categoryname=${categoryName}&searchkeyword=${searchKeyword}&pagesize=${numberOfProduct}&page=${page}&sortkeyword=${sortKeyword}&sorttype=${sortType}`
    } else if(searchKeyword) {
        page = 0;
        numberOfProduct = 1000;
        sortKeyword = 'quantityInstock'
        sortType = 'DESC'
        categoryName = `All`
        var linkApi = `http://localhost:8080/product/shop?categoryname=${categoryName}&searchkeyword=${searchKeyword}&pagesize=${numberOfProduct}&page=${page}&sortkeyword=${sortKeyword}&sorttype=${sortType}`
    }
    else {
        searchKeyword = `All`
        categoryName = `All`
        var linkApi = `http://localhost:8080/product/shop?categoryname=${categoryName}&searchkeyword=${searchKeyword}&pagesize=${numberOfProduct}&page=${page}&sortkeyword=${sortKeyword}&sorttype=${sortType}`
    }

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
        method: "GET",
        url: linkApi,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).done(function (msg) {
        var html = `<div class="col-12 pb-1">
        <div class="d-flex align-items-center justify-content-between mb-4">
            
            <div class="ml-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}&sortkeyword=createDate&sorttype=DESC">Latest</a>
                        <a class="dropdown-item" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}&sortkeyword=price&sorttype=DESC">High to Low Price</a>
                        <a class="dropdown-item" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}&sortkeyword=price&sorttype=ASC">Low to High Price</a>
                        <a class="dropdown-item" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}&sortkeyword=name&sorttype=ASC">Name (A->Z)</a>
                        <a class="dropdown-item" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}&sortkeyword=name&sorttype=DESC">Name (Z->A)</a>
                    </div>
                </div>
                <div class="btn-group ml-2">
                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="shop.html?${sortKeyword != 'quantityInstock' ? `sortkeyword=${sortKeyword}` : ``}&sorttype=${sortType != 'ASC' ? 'DESC' : 'ASC'}&pagesize=${10}">10</a>
                        <a class="dropdown-item" href="shop.html?${sortKeyword != 'quantityInstock' ? `sortkeyword=${sortKeyword}` : ``}&sorttype=${sortType != 'ASC' ? 'DESC' : 'ASC'}&pagesize=${20}">20</a>
                        <a class="dropdown-item" href="shop.html?${sortKeyword != 'quantityInstock' ? `sortkeyword=${sortKeyword}` : ``}&sorttype=${sortType != 'ASC' ? 'DESC' : 'ASC'}&pagesize=${30}">30</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        $.each(msg.data.showingProduct, function (index, value) {
            var discountprice = value.price - value.price * (value.salePercent / 100)

            html += `<div class="col-lg-4 col-md-6 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="${linkproduct}/files/${value.image}" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" href="detail.html?id=${value.id}"><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="detail.html?id=${value.id}" style="white-space: normal">${value.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${discountprice}</h5><h6 class="text-muted ml-2"><del>$${value.price}</del></h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small>${value.ratingPoint} (${value.ratingNumber})</small>
                    </div>
                </div>
            </div>
        </div>
        `

        })
        var totalProduct = msg.data.totalProduct;

        var numberOfPage = Math.ceil(totalProduct / numberOfProduct);


        html += `<div class="col-12">
        <nav>
          <ul class="pagination justify-content-center" id = "number-page"> 
            
          </ul>
        </nav>
    </div>`
        if (categoryName != 'All') {
            $("#shop-product").append(html)
        } else {
            var pageNumber = ``

            for (var i = 0; i < numberOfPage; i++) {
                pageNumber += `<li class="page-item ${i == page ? 'active' : ''}"><a class="page-link" href="shop.html?${numberOfProduct != 9 ? `pagesize=${numberOfProduct}` : ``}${sortKeyword != 'quantityInstock' ? `&sortkeyword=${sortKeyword}` : ``}&sorttype=${sortType != 'ASC' ? 'DESC' : 'ASC'}${i + 1 == 1 ? '' : '&page=' + i}">${i + 1}</a></li>`;
            }

            `<li class="page-item"><a class="page-link" href="#">Next</a></li>`
            $("#shop-product").append(html)
            $("#number-page").append(pageNumber)

        }
    })
})

