
/* menu slide toggle jquery */
$(function(){
    $("#sub_title_1").click(function(event){
        if($(this).hasClass("on")){
            $(this).add("#sub_menu_1").removeClass("on");
            $("#sub_menu_1").slideToggle(350);
            document.getElementById("sub_title_btn_1").src = "/admin/img/down.png";
        }else{
            $(this).add("#sub_menu_1").addClass("on")
            $("#sub_menu_1").slideToggle(350);
            document.getElementById("sub_title_btn_1").src = "/admin/img/up.png";
            event.stopPropagation();
        }
    })
})

$(function(){
    $("#sub_title_2").click(function(event){
        if($(this).hasClass("on")){
            $(this).add("#sub_menu_2").removeClass("on");
            $("#sub_menu_2").slideToggle(350);
            document.getElementById("sub_title_btn_2").src = "/admin/img/down.png";
        }else{
            $(this).add("#sub_menu_2").addClass("on")
            $("#sub_menu_2").slideToggle(350);
            document.getElementById("sub_title_btn_2").src = "/admin/img/up.png";
            event.stopPropagation();
        }
    })
})  

$(function(){
    $("#sub_title_3").click(function(event){
        if($(this).hasClass("on")){
            $(this).add("#sub_menu_3").removeClass("on");
            $("#sub_menu_3").slideToggle(350);
            document.getElementById("sub_title_btn_3").src = "/admin/img/down.png";
        }else{
            $(this).add("#sub_menu_3").addClass("on")
            $("#sub_menu_3").slideToggle(350);
            document.getElementById("sub_title_btn_3").src = "/admin/img/up.png";
            event.stopPropagation();
        }
    })
})  

$(function(){
    $("#sub_title_4").click(function(event){
        if($(this).hasClass("on")){
            $(this).add("#sub_menu_4").removeClass("on");
            $("#sub_menu_4").slideToggle(350);
            document.getElementById("sub_title_btn_4").src = "/admin/img/down.png";
        }else{
            $(this).add("#sub_menu_4").addClass("on")
            $("#sub_menu_4").slideToggle(350);
            document.getElementById("sub_title_btn_4").src = "/admin/img/up.png";
            event.stopPropagation();
        }
    })
})  

$(function(){
    $("#sub_title_5").click(function(event){
        if($(this).hasClass("on")){
            $(this).add("#sub_menu_5").removeClass("on");
            $("#sub_menu_5").slideToggle(350);
            document.getElementById("sub_title_btn_5").src = "/admin/img/down.png";
        }else{
            $(this).add("#sub_menu_5").addClass("on")
            $("#sub_menu_5").slideToggle(350);
            document.getElementById("sub_title_btn_5").src = "/admin/img/up.png";
            event.stopPropagation();
        }
    })
})

//서브메뉴클릭 효과

$(function(){
$("#sub_menu_1_1").click(function(event){
    $(this).add("#sub_menu_1_1").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_1_2").click(function(event){
    $(this).add("#sub_menu_1_2").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_1_3").click(function(event){
    $(this).add("#sub_menu_1_3").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_1_4").click(function(event){
    $(this).add("#sub_menu_1_4").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_1_5").click(function(event){
    $(this).add("#sub_menu_1_5").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_2_1").click(function(event){
    $(this).add("#sub_menu_2_1").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_2_2").click(function(event){
    $(this).add("#sub_menu_2_2").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_2_3").click(function(event){
    $(this).add("#sub_menu_2_3").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_2_4").click(function(event){
    $(this).add("#sub_menu_2_4").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_3_1").click(function(event){
    $(this).add("#sub_menu_3_1").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_3_2").click(function(event){
    $(this).add("#sub_menu_3_2").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_4_1").click(function(event){
    $(this).add("#sub_menu_4_1").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_4_2").click(function(event){
    $(this).add("#sub_menu_4_2").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_4_3").click(function(event){
    $(this).add("#sub_menu_4_3").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_4_4").click(function(event){
    $(this).add("#sub_menu_4_4").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_1").click(function(event){
    $(this).add("#sub_menu_5_1").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_2").click(function(event){
    $(this).add("#sub_menu_5_2").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_3").click(function(event){
    $(this).add("#sub_menu_5_3").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_4").click(function(event){
    $(this).add("#sub_menu_5_4").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_5").click(function(event){
    $(this).add("#sub_menu_5_5").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
$("#sub_menu_5_6").click(function(event){
    $(this).add("#sub_menu_5_6").addClass("strong")
    $(".sub_menu > li > a").not($(this)).removeClass("strong")
    event.stopPropagation();
})
})

$(function(){
    $("#sub_menu_5_7").click(function(event){
        $(this).add("#sub_menu_5_7").addClass("strong")
        $(".sub_menu > li > a").not($(this)).removeClass("strong")
        event.stopPropagation();
    })
})

//ajax

$(function(){
$("#sub_menu_1_1").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/productcate",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_1_2").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/prodcutcreate",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_1_3").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/OrderList",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_1_4").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/productquestionlist",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_1_5").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/ProductReview",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})


$(function(){
$("#sub_menu_2_1").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/MagazineCategory",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_2_2").click(function(){
$.ajax({
type:"GET",
url : "/admin/MagazineList",
datatype : "html/text",
success: function(result){
    $("#content").html(result).trigger("create");
}
});
}) 
})

$(function(){
$("#sub_menu_2_3").click(function(){
$.ajax({
type:"GET",
url : "/admin/MagazineCreate",
datatype : "html/text",
success: function(result){
    $("#content").html(result).trigger("create");
}
});
}) 
})

$(function(){
$("#sub_menu_2_4").click(function(){   

$.ajax({
type:"GET",
url : "/admin/recipe",
datatype : "html/text",
success: function(result){
    $("#content").html(result).trigger("create");
    }   
});
}) 
})

$(function(){
$("#sub_menu_3_1").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/LifeZoneCategory",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_3_2").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/LifeZone",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

// $(function(){
// $("#sub_menu_4_1").click(function(){
// $.ajax({
//     type:"GET",
//     url : "/admin/fresh",
//     datatype : "html/text",
//     success: function(result){
//         $("#content").html(result).trigger("create");
//     }
// });
// })
// })

$(function(){
$("#sub_menu_4_2").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/PopupStore",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_4_3").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/EventList",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_4_4").click(function(){
        $.ajax({
            type:"GET",
            url : "/admin/BrandList",
            datatype : "html/text",
            success: function(result){
                $("#content").html(result).trigger("create");
            }
        });
    })
})

$(function(){
$("#sub_menu_5_1").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/Notice",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_5_2").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/PaymentHistory",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_5_3").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/questionlist",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_5_4").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/FAQ",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_5_5").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/userlist",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
$("#sub_menu_5_6").click(function(){
$.ajax({
    type:"GET",
    url : "/admin/CouponList",
    datatype : "html/text",
    success: function(result){
        $("#content").html(result).trigger("create");
    }
});
})
})

$(function(){
    $("#sub_menu_5_7").click(function(){
        $.ajax({
            type:"GET",
            url : "/admin/AddressList",
            datatype : "html/text",
            success: function(result){
                $("#content").html(result).trigger("create");
            }
        });
    })
})

$(function(){
$(".main_page").click(function(){
    location.href="/admin/"
})
});

function PL_location_1(){
    $("#content").empty();
    $.ajax({
        type:"GET",
        url : "/admin/productlist",
        datatype : "html/text",
        success: function(result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    });
}

function PL_location(){
    $("#content").empty();
    $.ajax({
        type:"GET",
        url : "/admin/prodcutcreate",
        datatype : "html/text",
        success: function(result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    });
}

function PL_location_2(){
    $("#content").empty();
    $.ajax({
        type:"GET",
        url : "/admin/producttext",
        datatype : "html/text",
        success: function(result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    });
}

function EL_location_1(){
    $.ajax({
        type:"GET",
        url: "/admin/EventList",
        datatype: "html/text",
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    });
}

function EL_location_2(){
    $("#content").empty();
    $.ajax({
        type:"GET",
        url: "/admin/EventCreate",
        datatype: "html/text",
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    });
}

function BL_location_1(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: "/admin/BrandList",
        datatype: "html/text",
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function BL_location_2(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: "/admin/BrandCreate",
        datatype: "html/text",
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function BL_location_3(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: "/admin/BrandEdit",
        datatype: "html/text",
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function No_location_1(){
    $("#content").empty();
    $.ajax({
        type:'GET',
        url: '/admin/NoticeCreate',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function QL_location_1(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/question',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function FAQ_location_1(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/FAQ_regist',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function FAQ_location_2(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/FAQ_edit',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function CC_location(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/CouponCreate',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function AE_location(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/AddressEdit',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function PQL_location(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/prodcutquestion',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
        }
    })
}

function UL_location(){
    $("#content").empty();
    $.ajax({
        type: 'GET',
        url: '/admin/userlist',
        datatype: 'html/text',
        success: function (result){
            console.log(result)
            $("#content").html(result).trigger("create");
            sessionStorage.clear();
        }
    })
}
