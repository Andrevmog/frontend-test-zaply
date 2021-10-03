var response;
var category;
$(document).ready(function() {


    tabela();
    random();

    $(function() {
        $(".sidebar").load("navbar.html");
    });



    function tabela() {
        $(function() {

            $.ajax({
                    type: 'GET',
                    url: 'http://localhost:3000/',
                    dataType: "json",
                })
                .done(function(data) {
                    console.log(data)
                    card(data, category)
                });

        })
    }

    function random() {
        $(function() {

            $.ajax({
                    type: 'GET',
                    url: 'http://localhost:3000/random/4',
                    dataType: "json",
                })
                .done(function(data) {
                    recomendados(data)
                });

        })
    }



})


function recomendados(data) {
    for (var i in data) {
        $(".mainIndex").append(`<article class="card" >
                <div class="card__img">
                    <img  src="${data[i].image}" onerror="this.onerror=null;this.src='https://www.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png';">
                </div>
                <div class="card__name">
                    <p>${data[i].name}</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon">
                        <i class="fas fa-heart"></i>
                    </a>

                    <div>
                        <span class="card__preci card__preci--now" style="color: red;text-decoration: line-through;">${(data[i].price*2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <span class="card__preci card__preci--now">${data[i].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    <a href="" class="card__icon">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                </div>
            </article>`);
    }


}


function card(data, c) {
    for (var i in data) {
        if (data[i].categories === c) {
            $(".main").append(`<article class="card" >
                <div class="card__img">
                    <img  src="${data[i].image}" onerror="this.onerror=null;this.src='https://www.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png';">
                </div>
                <div class="card__name">
                    <p>${data[i].name}</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon">
                        <i class="fas fa-heart"></i>
                    </a>

                    <div>
                        <span class="card__preci card__preci--now">${data[i].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    <a href="" class="card__icon">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                </div>
            </article>`);
        }


    }



}



let sidebar = document.getElementById('navSidebar');

navbarOpener = function() {
    sidebar.classList.toggle("active");
}