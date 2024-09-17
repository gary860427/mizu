// 漢堡按鈕
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
});

// 切換右側圖片
document.addEventListener('DOMContentLoaded', function () {
    // 獲取左側圖片元素
    const leftImage = document.querySelector('.news-left-pic');
    
    // 預設第一張圖
    leftImage.src = './img/news-pics/left-pics-1.PNG';

    // 右側的新聞項目
    const newsItems = document.querySelectorAll('.newsItem');
    
    // 監聽右側滾動事件
    document.querySelector('.newsContent').addEventListener('scroll', function () {
        newsItems.forEach(function (item, index) {
            // 檢測每個 newsItem 是否已經滾動過了右側 50% 的高度
            const itemRect = item.getBoundingClientRect();
            const newsContentRect = document.querySelector('.newsContent').getBoundingClientRect();

            // 如果新聞項目超過了右側可視區域的一半，則更換左側圖片
            if (itemRect.top < (newsContentRect.top + newsContentRect.height * 0.3)) {
                switch (item.id) {
                    case 'news-pic1':
                        leftImage.src = './img/news-pics/left-pics-1.PNG';
                        break;
                    case 'news-pic2':
                        leftImage.src = './img/news-pics/left-pics-2.jpg';
                        break;
                    case 'news-pic3':
                        leftImage.src = './img/news-pics/left-pics-3.JPG';
                        break;
                    case 'news-pic4':
                        leftImage.src = './img/news-pics/left-pics-4.JPG';
                        break;
                    case 'news-pic5':
                        leftImage.src = './img/news-pics/left-pics-5.JPG';
                        break;
                }
            }
        });
    });
});

