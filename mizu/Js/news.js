// 漢堡按鈕
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
});