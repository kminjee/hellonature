
/* section */
$(function(){
    $.ajax({
        type:"GET",
        url : "/section",
        datatype : "html/text",
        success: function(result){
            $(".contents").html(result).trigger("create");
        }
    });
})
/* sidebar3 */
$(function(){
    $.ajax({
        type:"GET",
        url : "/sidebar3",
        datatype : "html/text",
        success: function(result){
            $(".main_leftaside3").html(result).trigger("create");            
        }
    });
})
/* 마이페이지 사용가능한 쿠폰 / 사용한 쿠폰 */
$(function(){
    $("#coupon_filter_available").click(function(){
        $.ajax({
            type:"GET",
            url : "/available_coupon",
            datatype : "html/text",
            success: function(result){
                $(".coupon_box").html(result).trigger("create");                
            }
        });
    })
    $("#coupon_filter_used").click(function(){
        $.ajax({
            type:"GET",
            url : "/used_coupon",
            datatype : "html/text",
            success: function(result){
                $(".coupon_box").html(result).trigger("create");                
            }
        });
    })
})



/* 쿠폰 클릭시 css */
$(function(){
    $(".contents_coupon_box2 a").click(function(event){
        $(this).add(".contents_coupon_box2 a").addClass("clicked_coupon")
        $(".contents_coupon_box2 a").not($(this)).removeClass("clicked_coupon")
        event.stopPropagation();
    })
})
/* 헬로캐시 이용안내 오버뷰 */
$(function(){
    $(".contents_hellocash_box2").on("click", () => {
        $(".contents_hellocash_box3").toggle();
    })
})
/* 헬로패스 결제내역 오버뷰 */
$(function(){
    $(".hellopass_link_move1").on("click", () => {
        $(".hellopass_overview").toggle();
    })
})
/* 헬로페이 카드 등록 개인정보 수집 및 이용 동의 오버뷰 */
$(function(){
    $(".enrollpay_allow").on("click", () => {
        $(".enrollpay_allow_list").toggle();
    })
})
/* 헬로페이 유효성 검사 */
$(function checks(){
    /* 카드별칭 */
    $("#card_nickname").keyup( () => {
        if($("#card_nickname").val() == ""){
            $("#card_nickname").focus();
            $(".enrollpay_box_inner2 > div").show();
            return false;
        }else{
            $(".enrollpay_box_inner2 > div").hide();
        }
    }).click( () => {
        $("#card_nickname").focus();
    })
    let cardnum1 = $("#card_num1");
    let cardnum2 = $("#card_num2");
    let cardnum3 = $("#card_num3");
    let cardnum4 = $("#card_num4");
    let caution = $(".enrollpay_box_inner3 > div");
    /* 카드번호 */
    cardnum1.keyup( () => {
        if(cardnum1.val() == ""){
            cardnum1.focus();
            caution.show();
        }else{
            if(cardnum1.val().length == 4){
                cardnum2.focus();
                caution.hide();
                cardnum2.keyup( () => {
                    if(cardnum2.val() == ""){
                        caution.show();
                    }else{
                        if(cardnum2.val().length == 4 ){
                            cardnum3.focus();
                            caution.hide();
                            cardnum3.keyup( () => {
                                if(cardnum3.val() == ""){
                                    caution.show();
                                }else{
                                    if(cardnum3.val().length == 4){
                                        cardnum4.focus();
                                        caution.hide();
                                        cardnum4.keyup( () => {
                                            if(cardnum4.val() == ""){
                                                caution.show();
                                            }else{
                                                if(cardnum4.val().length == 4){
                                                    caution.hide();
                                                    return false;
                                                }
                                            }
                                        })
                                    }
                                }
                            })

                        }
                    }
                })
            }
        }
    })
    let cardRange = $("#card_range");
    let caution2 = $(".enrollpay_box_inner4 > div");
    cardRange.keyup( () => {
        if(cardRange.val() == ""){
            cardRange.focus();
            caution2.show();
        }else{
            caution2.hide();
        }
    }).click( () => {
        cardRange.focus();
    })
    let birth = $("#birth_sixnum");
    let caution3 = $(".enrollpay_box_inner5 > div");
    birth.keyup( () => {
        if(birth.val() == ""){
            birth.focus();
            caution3.show();
        }else{
            caution3.hide();
        }
    })
    let cardPw = $("#card_pw");
    let caution4 = $(".enrollpay_box_inner6 > div");
    cardPw.keyup( () => {
        if(cardPw.val() == ""){
            cardPw.focus();
            caution4.show();
        }else{
            caution4.hide();
        }
    })
})
/* 헬로페이 별칭수정 */
$(() => {
    $(".hellopay_card_edit_del > p:nth-child(1)").on("click", () => {
        $("#cardname").prop("readonly", false)
        $("#cardname").focus();
    })

})