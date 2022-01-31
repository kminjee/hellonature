
// 상세페이지 슬라이드 (공통)
// let contItemPrev = document.querySelector('.cont_item_btn_prev');
// let contItemNext = document.querySelector('.cont_item_btn_next');
// let contItemBox = document.querySelector('.cont_item_box');
// let contItem = document.querySelectorAll('.cont_item');
// let contItemCnt = contItem.length;
// let contItemIdx = 0;
// let contItemWidth = 250;
// let contItemMargin = 16.7;
//
// let last_item_li = document.querySelector('.cont_item:last-child');
//
// last_item_li.style.marginRight = -contItemMargin + 'px';
// contItemBox.style.width = (contItemWidth + contItemMargin) * contItemCnt - contItemMargin + 'px';
//
// if (contItemCnt <= 4) {                                 // 총 길이가 4 와 같거나 넘지 않는다면
//     contItemPrev.classList.add("disabled");             // 이전버튼 비활성화
// } else {                                                // 그렇지 않으면 (총 길이가 4를 넘는다면)
//     contItemPrev.classList.remove("disabled");   // 이전버튼 활성화 (무한슬라이드하기 위해)
// }
//
// if (contItemIdx >= contItemCnt - 4) {                   // 현재 위치가 총 길이보다 높다면
//     contItemNext.classList.add("disabled");             // 다음버튼 비활성화
// } else {                                                // 그렇지 않으면 (현재 위치가 총 길이보다 높지 않다면)
//     contItemNext.classList.remove("disabled");   // 다음버튼 활성화
// }
//
// function moveContItem(num) {
//     contItemBox.style.left = -num * (contItemWidth + contItemMargin) + 'px';
//     contItemIdx = num;
// }
//
// contItemNext.addEventListener('click', function() {
//     if (contItemIdx < contItemCnt - 4) {
//         moveContItem(contItemIdx + 1);
//     } else {
//         moveContItem(0);
//     }
// });
//
// contItemPrev.addEventListener('click', function() {
//     if (contItemIdx > 0) {
//         moveContItem(contItemIdx - 1);
//     } else {
//         moveContItem(contItemCnt - 4);
//     }
// });
//
//
// // 상세페이지 좋아요 (공통)
// let contLike = document.querySelector('.cont_like_img');
//
// contLike.addEventListener("click", function() {
//     if (contLike.classList.contains("cont_likeOn")) {
//         contLike.classList.remove("cont_likeOn");
//     } else {
//         contLike.classList.add("cont_likeOn");
//     }
// });
