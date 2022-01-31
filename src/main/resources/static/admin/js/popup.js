function modal_close(){
document.getElementById('mw_temp').style.display='none'
}

function modal_close_3(){
    document.getElementById('mw_temp_k').style.display='none'
}

function modal_close_4(){
    document.getElementById('mw_temp_o').style.display='none'
}

function modal_open_3(){
    document.getElementById('mw_temp_k').style.display='block'
}

function modal_open_4(){
    document.getElementById('mw_temp_o').style.display='block'
}


function modal_open(){
    document.getElementById('mw_temp').style.display='block'
}

function modal_submit(){
    document.getElementById('mw_temp').style.display='none'
}


function modal_close_2(){
    document.getElementById('mw_temp_t').style.display='none'
}

function modal_open_2(){
    document.getElementById('mw_temp_t').style.display='block'
}

function modal_submit_2(){
    document.getElementById('mw_temp_s').style.display='none'
}

$(function(){
    $("#MC_click_1").click(function(event){
        $(this).add("#MC_click_1").addClass("strong")
        $("#MC_click_box > a").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})


$(function(){
    $("#MC_click_2").click(function(event){
        $(this).add("#MC_click_2").addClass("strong")
        $("#MC_click_box > a").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})


$(function(){
    $("#MC_click_3").click(function(event){
        $(this).add("#MC_click_3").addClass("strong")
        $("#MC_click_box > a").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})

$(function(){
    $("#CP_click_1").click(function(event){
        $(this).add("#CP_click_1").addClass("strong")
        $(".CP_click_box > input[name='target']").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})

$(function(){
    $("#CP_click_2").click(function(event){
        $(this).add("#CP_click_2").addClass("strong")
        $(".CP_click_box > input[name='target']").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})

$(function(){
    $("#CP_click_3").click(function(event){
        $(this).add("#CP_click_3").addClass("strong")
        $(".CP_click_box > input[name='target']").not($(this)).removeClass("strong")
        event.stopPropagation();
})
})

function modal_regist(){
    var row = document.getElementById('PC_cateregist').value
    var appendli = '<li>'+row+'</li>';
    console.log(row)
    $("#Pcate_ulbox").append(appendli)
}