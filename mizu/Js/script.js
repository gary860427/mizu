// 圖片切換
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
