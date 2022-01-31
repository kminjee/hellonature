// 상단 메뉴바 고정  header 전체

$(function() {
    var fullScreen = $(window),
        topMenu = $('.category_bg'),
        topMenuOffsetTop = topMenu.offset().top;
    // console.log('높이 : ' + topMenuOffsetTop + 'px');

    fullScreen.scroll(function(){
        if($(this).scrollTop() >= topMenuOffsetTop){
            topMenu.addClass('stickyA');
        }else{
            topMenu.removeClass('stickyA');
        }
    });
});


/* ---------------------------------------------------------------------------- */
// 상단 메뉴바 고정  product.html

$(function() {
    let fullScreen = $(window),
        prodtap = $('.goods-view-tab'), // 상세페이지 텝
        prodtapOffsetTop = prodtap.offset().top;    // 위치
    console.log(prodtapOffsetTop);

    fullScreen.scroll(function(){
        if($(this).scrollTop() >= prodtapOffsetTop) {
            prodtap.addClass('stickyA');
        } else {
            prodtap.removeClass('stickyA');
        }
    });
});



$(function() {
    let prodTapMenu = $('.goods-view-infomation-tab-anchor');
    prodTapMenu.each(function(i) {
        $(this).click(function() {
            $(this).css('color', '#00B081');
            $(this).css('background', '#FFFFFF');
            prodTapMenu.not(this).css({color: '#666', backgroundColor: '#fff'});
        });
    });
});


/* ---------------------------------------------------------------------------- */

// 푸터 index.html > 사업자 정보 확인

// **참고 열고 닫기는 jquery 가 편함 지금 js로 되어있는건 클릭 시 block만 되도록 되어있고 다시 눌렀을 때 none처리 가안되있음
// document.getElementById('footer_info_btn').addEventListener('click',function(){
//     document.getElementById('footer_info_none').style.display = 'block';
// })

// **참고 jquery 사용 함 toggle 이용
$('#footer_info_btn').click(function(){
    $('#footer_info_none').toggle();
});


/* ---------------------------------------------------------------------------- */
// 별점 index.html > 별점
var rating = $('.rating');
rating.each(function(){
    var $this = $(this);
    var targetScore = $this.attr('data-rate');
    var firstdigit = targetScore.split('.');
    // console.log(firstdigit);

    if(firstdigit.length > 1){
        for(var i = 0; i<targetScore[0]; i++){
            $this.find('.star').eq(i).css({width:'100%'});
        }
        $this.find('.star').eq(targetScore[0]).css({width:firstdigit[1]+'0%'});
    }else{
        for(var i = 0; i<targetScore; i++){
            $this.find('.star').eq(i).css({width:'100%'});
        }
    }
});


/* ---------------------------------------------------------------------------- */
// 필터

$(function(){
    //category filter
    $( ".price_range" ).slider({
        range: true,
        min: 0,
        max: 400000,
        values: [ 0, 4000000 ],
        slide:function(event, ui) {
            $("#filter_price").val(ui.values[0] + " 원 - " + ui.values[1] + " 원");

        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values",0) + "- $" + $("#slider-range"));
});

/* ------------------------------------ */
// 천단위 콤마 .priceComma

// $(document).ready(function(){
//     $('.price_comma').each(function(){
//         $(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
//     });
// });

/*  goods_list.html > filter toggle */

$('#filter_btn').click(function(){
    $('#filter_box').toggle();
});


/*  product.html > 문의작성 toggle */

$('#qna_btn').click(function (){
   $('#qna_box').toggle();
});