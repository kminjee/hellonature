/* 좋아요 */
// let specLike = document.querySelector('.spec_like_img');
//
// specLike.addEventListener("click", function() {     // 좋아요 클릭 시
//     if (specLike.classList.contains("spec_like_clicked")) {     // 체크 클래스네임이 존재한다면
//         specLike.classList.remove("spec_like_clicked");  // 체크 클래스네임을 지우고
//     } else {                                                    // 존재하지 않다면
//         specLike.classList.add("spec_like_clicked");            // 클래스네임을 추가 'css적용'
//     }
// });

//
// /* 만드는법 */
// let recCookPrev = document.querySelector('.rec_cook_btn_prev');
// let recCookNext = document.querySelector('.rec_cook_btn_next');
// let recCookBox = document.querySelector('.rec_cook_box');
// let recCook = document.querySelectorAll('.rec_cook');
// let recCookCnt = recCook.length;
// let recCookIdx = 0;
// let recCookWidth = 510;
// let recCookMargin = 30;
// let last_li = document.querySelector('.rec_cook:last-child');
//
// last_li.style.marginRight = -recCookMargin + 'px';
// recCookBox.style.width = (recCookWidth + recCookMargin) * recCookCnt - recCookMargin + 'px';
//
// function moveRecCook(num) {
//     recCookBox.style.left = -num * (recCookWidth + recCookMargin) + 'px';
//     recCookIdx = num;
// }
//
// if (recCookIdx == 0) {                        // 현재 위치가 0 이라면
//     recCookPrev.classList.add("disabled");    // 이전버튼을 비활성화
// }
//
// recCookNext.addEventListener('click', function() {    // 다음버튼 클릭 시
//     if (recCookIdx < recCookCnt - 2) {                            // 현재 위치가 총 길이보다 낮다면
//         moveRecCook(recCookIdx + 1);                         // 한칸 앞으로 이동하고
//         recCookPrev.classList.remove("disabled");          // 이전버튼을 활성화하면서
//         if (recCookIdx == recCookCnt - 2) {                       // 현재 인덱스가 총 길이와 같다면
//             recCookNext.classList.add("disabled");                // 다음버튼을 비활성화
//         }
//     }
// });
//
// recCookPrev.addEventListener('click', function() {    // 이전버튼 클릭 시
//     if (recCookIdx > 0) {                                         // 현재 위치가 0 보다 높으면
//         moveRecCook(recCookIdx - 1);                         // 한칸 뒤로 이동하고
//         recCookNext.classList.remove("disabled");          // 다음버튼을 활성화하면서
//         if (recCookIdx == 0) {                                    // 현재 위치가 0 이라면
//             recCookPrev.classList.add("disabled");                // 이전버튼을 비활성화
//         }
//     }
// });
//

/* 재료담기 */
// let recProdPrev = document.querySelector('.rec_prod_btn_prev');
// let recProdNext = document.querySelector('.rec_prod_btn_next');
// let recProdBox = document.querySelector('.rec_prod_box');
// let recProd = document.querySelectorAll('.rec_prod');
// let recProdCnt = recProd.length;
// let recProdIdx = 0;
// let recProdWidth = 250;
// let recProdMargin = 16.7;
// let last_prod_li = document.querySelector('.rec_prod:last-child');
//
// last_prod_li.style.marginRight = -recProdMargin + 'px';
// recProdBox.style.width = (recProdWidth + recProdMargin) * recProdCnt - recProdMargin + 'px';
//
// function moveRecProd(num) {
//     recProdBox.style.left = -num * (recProdWidth + recProdMargin) + 'px';
//     recProdIdx = num;
// }
//
// recProdNext.addEventListener('click', function() {      // 다음버튼 클릭 시
//     if (recProdIdx < recProdCnt - 4) {                              // 현재 위치가 총 길이보다 낮다면
//         moveRecProd(recProdIdx + 1);                           // 한칸 앞으로 이동
//     } else {                                                        // 그렇지 않으면 (현재 위치가 총 길이보다 높아질 경우)
//         moveRecProd(0);                                        // 처음 위치로 이동
//     }
// });
//
// recProdPrev.addEventListener('click', function() {      // 이전버튼 클릭 시
//     if (recProdIdx > 0) {                                           // 현재 위치가 0 보다 높으면
//         moveRecProd(recProdIdx - 1);                           // 한칸 뒤로 이동
//     } else {                                                        // 그렇지 않으면 (현재 위치가 0보다 낮아질 경우)
//         moveRecProd(recProdCnt - 4);                           // 마지막으로 위치로 이동
//     }
// });


/* 관련상품 */
// let recItemPrev = document.querySelector('.rec_item_btn_prev');
// let recItemNext = document.querySelector('.rec_item_btn_next');
// let recItemBox = document.querySelector('.rec_item_box');
// let recItem = document.querySelectorAll('.rec_item');
// let recItemCnt = recItem.length;
// let recItemIdx = 0;
// let recItemWidth = 250;
// let recItemMargin = 16.7;
// let last_item_li = document.querySelector('.rec_item:last-child');
//
// last_item_li.style.marginRight = -recItemMargin + 'px';
// recItemBox.style.width = (recItemWidth + recItemMargin) * recItemCnt - recItemMargin + 'px';
//
// if (recItemCnt <= 4) {                                // 총 길이가 4 와 같거나 넘지 않는다면
//     recItemPrev.classList.add("disabled");            // 이전버튼 비활성화
// } else {                                              // 그렇지 않으면 (총 길이가 4를 넘는다면)
//     recItemPrev.classList.remove("disabled");  // 이전버튼 활성화 (무한슬라이드하기 위해)
// }
//
// if (recItemIdx >= recItemCnt - 4) {                   // 현재 위치가 총 길이보다 높다면
//     recItemNext.classList.add("disabled");            // 다음버튼 비활성화
// } else {                                              // 그렇지 않으면 (현재 위치가 총 길이보다 높지 않다면)
//     recItemNext.classList.remove("disabled");  // 다음버튼 활성화
// }
//
// function moveRecItem(num) {
//     recItemBox.style.left = -num * (recItemWidth + recItemMargin) + 'px';
//     recItemIdx = num;
// }
//
// recItemNext.addEventListener('click', function() {
//     if (recItemIdx < recItemCnt - 4) {
//         moveRecItem(recItemIdx + 1);
//     } else {
//         moveRecItem(0);
//     }
// });
//
// recItemPrev.addEventListener('click', function() {
//     if (recItemIdx > 0) {
//         moveRecItem(recItemIdx - 1);
//     } else {
//         moveRecItem(recItemCnt - 4);
//     }
// });


/* 비슷한 레시피 */
let recAnoPrev = document.querySelector('.rec_ano_btn_prev');
let recAnoNext = document.querySelector('.rec_ano_btn_next');
let recAnoBox = document.querySelector('.rec_ano_box');
let recAno = document.querySelectorAll('.rec_ano');
let recAnoCnt = recAno.length;
let recAnoIdx = 0;
let recAnoWidth = 340;
let recAnoMargin = 15;
let last_recAno_li = document.querySelector('.rec_ano:last-child');

last_recAno_li.style.marginRight = -recAnoMargin + 'px';
recAnoBox.style.width = (recAnoWidth + recAnoMargin) * recAnoCnt - recAnoMargin + 'px';

if (recAnoCnt <= 3) {                                // 총 길이가 3 과 같거나 낮다면
    recAnoPrev.classList.add("disabled");            // 이전버튼 비활성화 (이동이 없다는걸 보여주기 위해)
} else {                                             // 총 길이가 3 보다 높다면
    recAnoPrev.classList.remove("disabled");  // 이전버튼 활성화
}

if (recAnoIdx >= recAnoCnt - 3) {                   // 현재 위치가 총 길이보다 높다면
    recAnoNext.classList.add("disabled");           // 다음버튼 비활성화
} else {                                            // 현재 위치가 총 길이보다 낮다면
    recAnoNext.classList.remove("disabled"); // 다음버튼 활성화
}

function moveRecAno(num) {
    recAnoBox.style.left = -num * (recAnoWidth + recAnoMargin) + 'px';
    recAnoIdx = num;
}

recAnoNext.addEventListener('click', function() {
    if (recAnoIdx < recAnoCnt - 3) {
        moveRecAno(recAnoIdx + 1);
    } else {
        moveRecAno(0);
    }
});

recAnoPrev.addEventListener('click', function() {
    if (recAnoIdx > 0) {
        moveRecAno(recAnoIdx - 1);
    } else {
        moveRecAno(recAnoCnt - 3);
    }
});