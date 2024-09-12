// 輪播圖片功能
const images = document.querySelectorAll('#first_pics img');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// 每3秒切換一次圖片
setInterval(changeImage, 3000);