$(function () { //Функция для сворачивания меню когда фокус переходит на другие элементы
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });
});

function showSize () {
    var size = window.innerWidth;
    console.log(size);
}

addEventListener("resize", showSize);