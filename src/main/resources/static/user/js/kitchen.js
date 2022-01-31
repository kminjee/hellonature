// /* 주 재료 슬라이드 -------------------------------------------------------------------------- */
//
// let kit01_ItemBox = document.querySelector('#kit_item_01_box'),
//     kit01_Item = document.querySelectorAll('#kit_item_01'),
//     kit01_ItemIdx = 0,
//     kit01_ItemCnt = kit01_Item.length,
//     kit01_ItemPrev = document.querySelector('#kit_item_01_btn_prev'),
//     kit01_ItemWidth = 250,
//     kit01_ItemMargin = 16.7,
//     kit01_ItemNext = document.querySelector('#kit_item_01_btn_next');
//
// let kit01_last_item_li = document.querySelector('#kit_item_01:last-child');
// kit01_last_item_li.style.marginRight = -kit01_ItemMargin + 'px';
//
// kit01_ItemBox.style.width = (kit01_ItemWidth + kit01_ItemMargin) * kit01_ItemCnt - kit01_ItemMargin + 'px';
//
// if (kit01_ItemCnt <= 4) {                        // 총 길이가 4 와 같거나 넘지 않는다면
//     kit01_ItemPrev.classList.add("disabled");      // 이전버튼 비활성화
// } else {                                         // 그렇지 않으면 (총 길이가 4를 넘는다면)
//     kit01_ItemPrev.classList.remove("disabled");   // 이전버튼 활성화 (무한슬라이드하기 위해)
// }
//
// if (kit01_ItemIdx >= kit01_ItemCnt - 4) {        // 현재 위치가 총 길이보다 높다면
//     kit01_ItemNext.classList.add("disabled");      // 다음버튼 비활성화
// } else {                                         // 그렇지 않으면 (현재 위치가 총 길이보다 높지 않다면)
//     kit01_ItemNext.classList.remove("disabled");   // 다음버튼 활성화
// }
//
// function move_kit01_Item(num) {
//     kit01_ItemBox.style.left = -num * (kit01_ItemWidth + kit01_ItemMargin) + 'px';
//     kit01_ItemIdx = num;
// }
//
// kit01_ItemNext.addEventListener('click', function() {
//     if (kit01_ItemIdx < kit01_ItemCnt - 4) {
//         move_kit01_Item(kit01_ItemIdx + 1);
//     } else {
//         move_kit01_Item(0);
//     }
// });
//
// kit01_ItemPrev.addEventListener('click', function() {
//     if (kit01_ItemIdx > 0) {
//         move_kit01_Item(kit01_ItemIdx - 1);
//     } else {
//         move_kit01_Item(kit01_ItemCnt - 4);
//     }
// });
//
// /* 주 재료 슬라이드 -------------------------------------------------------------------------- */
//
//
// /* 토핑 슬라이드 -------------------------------------------------------------------------- */
//
// let kit02_ItemBox = document.querySelector('#kit_item_02_box'),
//     kit02_Item = document.querySelectorAll('#kit_item_02'),
//     kit02_ItemIdx = 0,
//     kit02_ItemCnt = kit02_Item.length,
//     kit02_ItemPrev = document.querySelector('#kit_item_02_btn_prev'),
//     kit02_ItemWidth = 250,
//     kit02_ItemMargin = 16.7,
//     kit02_ItemNext = document.querySelector('#kit_item_02_btn_next');
//
// let kit02_last_item_li = document.querySelector('#kit_item_02:last-child');
// kit02_last_item_li.style.marginRight = -kit02_ItemMargin + 'px';
//
// kit02_ItemBox.style.width = (kit02_ItemWidth + kit02_ItemMargin) * kit02_ItemCnt - kit02_ItemMargin + 'px';
//
// if (kit02_ItemCnt <= 4) {                        // 총 길이가 4 와 같거나 넘지 않는다면
//     kit02_ItemPrev.classList.add("disabled");      // 이전버튼 비활성화
// } else {                                         // 그렇지 않으면 (총 길이가 4를 넘는다면)
//     kit02_ItemPrev.classList.remove("disabled");   // 이전버튼 활성화 (무한슬라이드하기 위해)
// }
//
// if (kit02_ItemIdx >= kit02_ItemCnt - 4) {        // 현재 위치가 총 길이보다 높다면
//     kit02_ItemNext.classList.add("disabled");      // 다음버튼 비활성화
// } else {                                         // 그렇지 않으면 (현재 위치가 총 길이보다 높지 않다면)
//     kit02_ItemNext.classList.remove("disabled");   // 다음버튼 활성화
// }
//
// function move_kit02_Item(num) {
//     kit02_ItemBox.style.left = -num * (kit02_ItemWidth + kit02_ItemMargin) + 'px';
//     kit02_ItemIdx = num;
// }
//
// kit02_ItemNext.addEventListener('click', function() {
//     if (kit02_ItemIdx < kit02_ItemCnt - 4) {
//         move_kit02_Item(kit02_ItemIdx + 1);
//     } else {
//         move_kit02_Item(0);
//     }
// });
//
// kit02_ItemPrev.addEventListener('click', function() {
//     if (kit02_ItemIdx > 0) {
//         move_kit02_Item(kit02_ItemIdx - 1);
//     } else {
//         move_kit02_Item(kit02_ItemCnt - 4);
//     }
// });

/* 토핑 슬라이드 -------------------------------------------------------------------------- */