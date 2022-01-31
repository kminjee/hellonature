/* 세부카테고리 */
// let prodCate = document.querySelectorAll('.prod_cate');
// if (prodCate[0]) { prodCate[0].classList.add('prod_cate_clicked'); }
// function prodCateClicked(event) {
//     for (let i = 0; i < prodCate.length; i++) {
//         prodCate[i].classList.remove('prod_cate_clicked');
//     }
//     event.target.classList.add('prod_cate_clicked');
// }
// function clickEvent_01() {
//     for (let i = 0; i < prodCate.length; i++) {
//         prodCate[i].addEventListener('click', prodCateClicked);
//     }
// }
// clickEvent_01();

/* 페이지네이션 */
let pageNum = document.querySelectorAll('.page_num');
if (pageNum[0]) { pageNum[0].classList.add('clicked'); }
function pageClick(event) {
    for (let i = 0; i < pageNum.length; i++) {
        pageNum[i].classList.remove('clicked');
    }
    event.target.classList.add('clicked');
}
function clickEvent_02() {
    for (let i = 0; i < pageNum.length; i++) {
        pageNum[i].addEventListener('click', pageClick);
    }
}
clickEvent_02();

/* 게시글좋아요 */
let brdLike = document.querySelectorAll('.board_like_img');
for (let i = 0; i < brdLike.length; i++) {
    brdLike[i].addEventListener('click', function() {
        if (brdLike[i].classList.contains('likeOn')) {
            brdLike[i].classList.remove('likeOn');
        } else {
            brdLike[i].classList.add('likeOn');
        }
    });
}

