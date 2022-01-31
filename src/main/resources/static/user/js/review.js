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
$(function(){
  var article = (".product_qna_board .product_qna_show");

  $(".product_qna_board .product_qna_click td").click(function() {
    var myArticle =$(this).parents().next("tr");
    if($(myArticle).hasClass('product_qna_detail')) {
      $(article).removeClass('product_qna_show').addClass('product_qna_detail');
      $(myArticle).removeClass('product_qna_detail').addClass('product_qna_show');
    }
    else {
      $(myArticle).addClass('product_qna_detail').removeClass('product_qna_show');
    }
  });
});




/* review_pagination */
var reviewPageNum = document.querySelectorAll("#review_page_num");

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


/* product_qna_pagination */
var prodPageNum = document.querySelectorAll("#prod_qna_page_num");

function proHandleClick(event) {
  for (var i = 0; i < prodPageNum.length; i++) {
    prodPageNum[i].classList.remove("clicked");
  }
  event.target.classList.add("clicked");
}

function proPage() {
  for (var i = 0; i < prodPageNum.length; i++) {
    prodPageNum[i].addEventListener("click", proHandleClick);
  }
}
proPage();