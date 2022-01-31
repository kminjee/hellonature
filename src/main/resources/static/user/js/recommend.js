
/* 팝업스토어 - 인기 브랜드 슬라이드 */
let bestBrandPrev = document.querySelector('.best_brand_btn_prev');
let bestBrandNext = document.querySelector('.best_brand_btn_next');
let bestBrandBox = document.querySelector('.best_brand_box');
let bestBrand = document.querySelectorAll('.best_brand');
let bestBrandCnt = bestBrand.length;
let bestBrandIdx = 0;
let bestBrandWidth = 525;
let bestBrandMargin = 0;
let last_bestBrand_li = document.querySelector('.best_brand:last-child');

last_bestBrand_li.style.marginRight = -bestBrandMargin + 'px';
bestBrandBox.style.width = (bestBrandWidth + bestBrandMargin) * bestBrandCnt - bestBrandMargin + 'px';

if (bestBrandCnt <= 2) {                                // 총 길이가 3 과 같거나 낮다면
    bestBrandPrev.classList.add("disabled");            // 이전버튼 비활성화 (이동이 없다는걸 보여주기 위해)
} else {                                                // 총 길이가 3 보다 높다면
    bestBrandPrev.classList.remove("disabled");  // 이전버튼 활성화
}

if (bestBrandIdx >= bestBrandCnt - 2) {                 // 현재 위치가 총 길이보다 높다면
    bestBrandNext.classList.add("disabled");            // 다음버튼 비활성화
} else {                                                // 현재 위치가 총 길이보다 낮다면
    bestBrandNext.classList.remove("disabled");  // 다음버튼 활성화
}

function moveBestBrand(num) {
    bestBrandBox.style.left = -num * (bestBrandWidth + bestBrandMargin) + 'px';
    bestBrandIdx = num;
}

bestBrandNext.addEventListener('click', function() {
    if (bestBrandIdx < bestBrandCnt - 2) {
        moveBestBrand(bestBrandIdx + 1);
    } else {
        moveBestBrand(0);
    }
});

bestBrandPrev.addEventListener('click', function() {
    if (bestBrandIdx > 0) {
        moveBestBrand(bestBrandIdx - 1);
    } else {
        moveBestBrand(bestBrandCnt - 2);
    }
});