//////////////////////////////////////////////////
//Lifezone//

$(function(){
    $(".LZ_c1_cateul_1").children('li').off().on('click',function(e){
        let LZ_1_cate_value = $(this).val();
        $("#LZlist_catevalue_1").val(LZ_1_cate_value);
        $(this).addClass("strong")
        $(".LZ_c1_cateul_1 > li").not($(this)).removeClass("strong")
    })
    $(".LZ_c1_cateul_2").children('li').off().on('click',function(e){
        let LZ_2_cate_value = $(this).val();
        $("#LZlist_catevalue_2").val(LZ_2_cate_value);
        $(this).addClass("strong")
        $(".LZ_c1_cateul_2 > li").not($(this)).removeClass("strong")
    })
})

//////////////////////////////////////////////////
//LifezoneCategory//

$(function(){
    $(".Lcate_c1_cateul_2").children('li').off().on('click',function(e){
        let LC_2_cate_value = $(this).val();
        let LC_2_cate_text = $(this).text();
        $("#select_cate").val(LC_2_cate_text)
        $("#Lcate_catevalue_2").val(LC_2_cate_value);
        $(this).addClass("strong")
        $(".Lcate_c1_cateul_2 > li").not($(this)).removeClass("strong")
    })
    $(".Lcate_c1_cateul").children('li').off().on('click',function(e){
        let LC_1_cate_value = $(this).val();
        let LC_1_cate_text = $(this).text();
        $("#select_cate").val(LC_1_cate_text)
        $("#Lcate_catevalue_1").val(LC_1_cate_value);
        $(this).addClass("strong")
        $(".Lcate_c1_cateul > li").not($(this)).removeClass("strong")
    })
})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//ProductCreate//

$(function(){
    $(".PCT_1_cateul").children('li').off().on('click',function(e){
        let PRC_1_cate_value = $(this).val();
        $("#PRC_catevalue_1").val(PRC_1_cate_value);
        $(this).addClass("strong")
        $(".PCT_1_cateul > li").not($(this)).removeClass("strong")
    })

    $(".PCT_2_cateul").children('li').off().on('click',function(e){
        let PRC_2_cate_value = $(this).val();
        $("#PRC_catevalue_2").val(PRC_2_cate_value);
        $(this).addClass("strong")
        $(".PCT_2_cateul > li").not($(this)).removeClass("strong")
    })
})

//////////////////////////////////////////////////
//ProductCategory//

$(function(){

    $(".Pcate_ulbox_2").children('li').off().on('click',function(e){
        let PC_2_cate_value = $(this).val();
        let PC_2_cate_text = $(this).text();
        $("#Pcate_cateval_2").val(PC_2_cate_value);
        $("#select_cate").val(PC_2_cate_text)
        $(this).addClass("strong")
        $(".Pcate_ulbox_2 > li").not($(this)).removeClass("strong")
    })
})

//////////////////////////////////////////////////
//Magazine//
$(function(){
    $(".MC_c1_cateul").children('li').off().on('click',function(e){
        let MC_c1_catevalue = $(this).val();
        console.log(MC_c1_catevalue);
        $("#MC_c2_catevalue").val(MC_c1_catevalue);
        $(this).addClass("strong")
        $(".MC_c1_cateul > li").not($(this)).removeClass("strong")
    })
})

//////////////////////////////////////////////////
//MagazineCreate//

$(function(){
    $("#MC_click_box").children('a').off().on('click',function(e){
        let MCclickvalue = $(this).children('input').val();

        if(MCclickvalue == 'GUIDE'){
            document.getElementById('MCT_prodList').style.display = 'block';
        }else{
            document.getElementById('MCT_prodList').style.display = 'none';
        }

        console.log(MCclickvalue);
        $("#MCT_catevalue").val(MCclickvalue);
    })
})

