$(document).ready(function(){
    $("#event_type1").click(function(){
        $(".list1").show();
        $(".event_type_box > ul > li").eq(0).addClass("on");
        $(".list2").hide();
        $(".event_type_box > ul > li").eq(1).removeClass("on");
    });
    $("#event_type2").click(function(){
        $(".list1").hide();
        $(".event_type_box > ul > li").eq(0).removeClass("on");
        $(".list2").show();
        $(".event_type_box > ul > li").eq(1).addClass("on");
    });
});