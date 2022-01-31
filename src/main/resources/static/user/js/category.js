// 세부 카테고리 (공통)
let prodCate = document.querySelectorAll(".prod_cate");

if (prodCate[0]) { prodCate[0].classList.add("prod_cate_clicked"); }

function prodCateOn(event) {
  for (let i = 0; i < prodCate.length; i++) {
    prodCate[i].classList.remove("prod_cate_clicked");
  }
  event.target.classList.add("prod_cate_clicked");
}

function clickEevent01() {
  for (let i = 0; i < prodCate.length; i++) {
    prodCate[i].addEventListener("click", prodCateOn);
  }
}
clickEevent01();


// 페이지네이션 (공통)
let pageNum = document.querySelectorAll(".page_num");
if (pageNum[0]) { pageNum[0].classList.add("clicked"); }

function pageClick(event) {
  for (let i = 0; i < pageNum.length; i++) {
    pageNum[i].classList.remove("clicked");
  }
  event.target.classList.add("clicked");
}

function clickEevent02() {
  for (let i = 0; i < pageNum.length; i++) {
    pageNum[i].addEventListener("click", pageClick);
  }
}
clickEevent02();






/* review_board */
$(function(){
  var article = (".review_board .review_show");

  $(".review_board .review_click td").click(function() {
    var myArticle =$(this).parents().next("tr");
    if($(myArticle).hasClass('review_detail')) {
      $(article).removeClass('review_show').addClass('review_detail');
      $(myArticle).removeClass('review_detail').addClass('review_show');
    }
    else {
      $(myArticle).addClass('review_detail').removeClass('review_show');
    }
  });
});

/* product_qna_board */
// $(function(){
//   var article = (".product_qna_board .product_qna_show");
//
//   $(".product_qna_board .product_qna_click td").click(function() {
//     var myArticle =$(this).parents().next("tr");
//     if($(myArticle).hasClass('product_qna_detail')) {
//       $(article).removeClass('product_qna_show').addClass('product_qna_detail');
//       $(myArticle).removeClass('product_qna_detail').addClass('product_qna_show');
//     }
//     else {
//       $(myArticle).addClass('product_qna_detail').removeClass('product_qna_show');
//     }
//   });
// });




/* review_pagination */
var reviewPageNum = document.querySelectorAll("#review_page_num");
if (reviewPageNum[0]) { reviewPageNum[0].classList.add("clicked"); }

function reviHandleClick(event) {
  for (var i = 0; i < reviewPageNum.length; i++) {
    reviewPageNum[i].classList.remove("clicked");
  }
  event.target.classList.add("clicked");
}

function revPage() {
  for (var i = 0; i < reviewPageNum.length; i++) {
    reviewPageNum[i].addEventListener("click", reviHandleClick);
  }
}
revPage();


// /* product_qna_pagination */
// var prodPageNum = document.querySelectorAll("#prod_qna_page_num");
// if (prodPageNum[0]) { prodPageNum[0].classList.add("clicked"); }
//
// function proHandleClick(event) {
//   for (var i = 0; i < prodPageNum.length; i++) {
//     prodPageNum[i].classList.remove("clicked");
//   }
//   event.target.classList.add("clicked");
// }
//
// function proPage() {
//   for (var i = 0; i < prodPageNum.length; i++) {
//     prodPageNum[i].addEventListener("click", proHandleClick);
//   }
// }
// proPage();








/* 좋아요 */
// let likeBtn = document.querySelector('.like_button');
//
// likeBtn.addEventListener("click", function() {
//   if (likeBtn.classList.contains("likeClicked")) {
//     likeBtn.classList.remove("likeClicked");
//   } else {
//     likeBtn.classList.add("likeClicked");
//   }
// });

/* 주소복사 */
// let shareBtn = document.querySelector('.share_button');

// shareBtn.addEventListener("click", function() {
//   if (shareBtn.classList.contains("shareClicked")) {
//     shareBtn.classList.remove("shareClicked");
//     shareBtn.classList.add("shareClicked");
//   } else {
//     shareBtn.classList.add("shareClicked");
//   }
// });



// 주소복사 ------------------------------------------------------
function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  }

  $('#clipboard').click(function() {
    copyToClipboard('http://127.0.0.1:5500/product.html');
    alert('주소를 복사하였습니다');
  });




let closeBtn = document.querySelector('.about_deli_close');
let infoBox = document.querySelector('.about_deil_info_box');
let openBtn = document.querySelector('.about_deli_open');

closeBtn.addEventListener("click", function() {
  if (infoBox.classList.contains("closed")) {
    infoBox.classList.remove("closed");
    openBtn.innerHTML = "닫기";
  } else {
    infoBox.classList.add("closed");
    openBtn.innerHTML = "보기";
  }
});