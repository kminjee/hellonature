// 회원 로그인 | 비회원 로그인
$(document).ready(function(){
    $("#member_click").click(function(){
        $(".member_form").show();
        $(".member_choice").eq(0).addClass("member_line");
        $(".notmember_form").hide();
        $(".member_choice").eq(1).removeClass("member_line");

        $(".mem_login").addClass("member_line_checked");
        $(".nomem_login").removeClass("member_line_checked");
    });
    $("#notmember_click").click(function(){
        $(".member_form").hide();
        $(".member_choice").eq(0).removeClass("member_line");
        $(".notmember_form").show();
        $(".member_choice").eq(1).addClass("member_line");

        $(".mem_login").removeClass("member_line_checked");
        $(".nomem_login").addClass("member_line_checked");
    });
});

$(".mem_login").click(function() {
    $(".mem_login").addClass('member_line_checked');
})