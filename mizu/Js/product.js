// 漢堡按鈕
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
});

// 篩選
document.addEventListener('DOMContentLoaded', function () {
    // 獲取所有的篩選按鈕
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 為每個按鈕添加點擊事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // 移除其他按鈕的 active 樣式
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 為當前按鈕添加 active 樣式
            this.classList.add('active');

            // 獲取當前按鈕的篩選類別
            const filterValue = this.getAttribute('data-filter');
            
            // 獲取所有商品元素
            const products = document.querySelectorAll('.product-item');

            // 根據篩選類別顯示或隱藏商品
            products.forEach(product => {
                if (filterValue === 'all' || product.classList.contains(filterValue)) {
                    product.style.display = 'block'; // 顯示符合條件的商品
                } else {
                    product.style.display = 'none'; // 隱藏不符合條件的商品
                }
            });
        });
    });
});
