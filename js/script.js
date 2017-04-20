/*$(function () { //Функция для сворачивания меню когда фокус переходит на другие элементы
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });
});*/

jQuery.fn.LeftToggle = function (duration, easing, complete) {
    return this.animate({ width: "toggle"}, jQuery.speed(duration, easing, complete));
};

$(".navbar-toggle").click(function() { // функция для выпадающего меню слева
    $("#navMenu").LeftToggle(200);
});
