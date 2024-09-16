// 漢堡按鈕
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
});


// 第一區圖片切換
let currentIndex = 0;
const images = document.querySelectorAll('.rightPics img');
const totalImages = images.length;

function changeImage() {
    // 移除當前圖片的 active 標記
    images[currentIndex].classList.remove('active');

    // 計算下一張圖片的索引
    currentIndex = (currentIndex + 1) % totalImages;

    // 將下一張圖片設為 active
    images[currentIndex].classList.add('active');
}

// 每3秒切換一次圖片
setInterval(changeImage, 3000);

// Item區
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 3,  // 一次顯示3張圖片
        slidesToScroll: 1,  // 每次滑動一張圖片
        autoplay: true,  // 自動播放
        autoplaySpeed: 2000,  // 播放速度
        arrows: true,  // 顯示箭頭
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    // 監聽箭頭點擊事件
    $('.slick-prev, .slick-next').on('click', function () {
        // 在點擊後等待2秒再啟動自動播放
        setTimeout(function () {
            $carousel.slick('slickPlay');  // 重新啟動自動播放
        }, 2000);  // 2秒延遲
    });
});

// 按鈕滾動到上層
$('#first').click(function () {
    $('html, body').animate({ scrollTop:0},1000);  // 平滑滾動，1秒內到達目標，均速滾動
});
