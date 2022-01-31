
$(() => {
    $("#email_input").keyup(() => {
        if($("#email_input").val() == ""){
            alert("이메일을 입력해주세요.")
            $('#email_input').focus();
            return false;
        }
    })
    $("#pwd_input").keyup(() => {
        if($("#pwd_input").val() == ""){
            alert('비밀번호를 입력하세요');
            $('#pwd_input').focus();
            return false;
        }
    })
    $("#pwd2_input").keyup(() => {
        if($("#pwd2_input").val() == ""){
            alert('비밀번호 확인을 입력하세요');
            $('#pwd2_input').focus();
            return false;
        }
    })
    $("#name_input").keyup(() => {
        if($("#name_input").val() == ""){
            alert('이름을 입력하세요');
            $('#name_input').focus();
            return false;
        }
    })
    $("#hp_input").keyup(() => {
        if($("#hp_input").val() == ""){
            alert('전화번호를 입력하세요.');
            $('#hp_input').focus();
            return false;
        }
    })
    $("#sample6_detailAddress").keyup(() => {
        if($("#sample6_detailAddress").val() == ""){
            alert('상세주소를 입력하세요.');
            $('#sample6_detailAddress').focus();
            return false;
        }
    })
    $("#email_input").on("click", () => {
        $("#email_input").focus();
        if($("#email_input").focus()){
            if($("#email_input").val() == ""){
                $("#email_check_btn").prop("disabled", true);
            }else if($("#email_input").val().length > 0){
                $("#email_check_btn").prop("disabled", false);
            }
            $("#email_check_btn").css("background", "#5dab99");
            $("#email_check_btn").css("color", "#fff");
        }else{
            $("#email_check_btn").css("background", "#000000")
        }
    })
})
function registCheck(){
    const expPwCheck= RegExp (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/);
    const expNameCheck = RegExp (/^[가-힣]+$/);
    const expHpCheck = RegExp (/^\d{3}-\d{3,4}-\d{4}$/);
    const expEmailInput = RegExp (/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$/);
    if (!expEmailInput.test($('#email_input').val())) {
        alert('이메일을 형식에 맞게 입력하세요.');
        $('#email_input').val('');
        $('#email_input').focus();
        return false;
    }
    if (!expPwCheck.test($('#pwd_input').val())) {
        alert('비밀번호를 형식에 맞게 입력하세요');
        $('#pwd_input').val('');
        $('#pwd_input').focus();
        return false;
    }
    if ($("#pwd_input").val() != $("#pwd2_input").val() ) {
        alert('비밀번호란과 비밀번호 확인란에 입력된 비밀번호가 동일하지 않습니다.');
        $('#pwd_input').val('');
        $('#pwd_input').focus();
        return false;
    }
    if (!expNameCheck.test($('#name_input').val())) {
        alert('이름란에 한글로 입력하세요');
        $('#name_input').val('');
        $('#name_input').focus();
        return false;
    }
    if (!expHpCheck.test($('#hp_input').val())) {
        alert('휴대폰 번호를 형식에 맞게 입력하세요 ( -포함 )');
        $('#hp_input').val('');
        $('#hp_input').focus();
        return false;
    }
}
function emailCheck() {
    const expEmailCheck = RegExp (/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$/);
    if (!expEmailCheck.test($('#email_check').val())) {
        alert('이메일을 형식에 맞게 입력하세요');
        $('#email_check').val('');
        $('#email_check').focus();
        return false;
    }
}
function memCheck() {
    const expLoginEmailCheck = RegExp (/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$/);
    const expLoginPwCheck= RegExp (/^[a-zA-Z0-9]{6,20}$/);
    if (!expLoginEmailCheck.test($('#login_email_check').val())) {
        alert('이메일을 형식에 맞게 입력하세요');
        $('#login_email_check').val('');
        $('#login_email_check').focus();
        return false;
    }
    if (!expLoginPwCheck.test($('#login_password_check').val())) {
        alert('비밀번호를 형식에 맞게 입력하세요');
        $('#login_password_check').val('');
        $('#login_password_check').focus();
        return false;
    }
}
function notMemCheck() {
    const expNotMemNameCheck = RegExp (/^[가-힣]+$/);
    const expNotMemNumberCheck= RegExp (/^[a-zA-Z0-9]{6,20}$/);
    if (!expNotMemNameCheck.test($('#notmem_name').val())) {
        alert('이름은 한글로 입력하세요');
        $('#notmem_name').val('');
        $('#notmem_name').focus();
        return false;
    }
    if (!expNotMemNumberCheck.test($('#notmem_number').val())) {
        alert('주문번호를 형식에 맞게 입력하세요');
        $('#notmem_number').val('');
        $('#notmem_number').focus();
        return false;
    }
}

function orderCheck() {
    const expOrderNameCheck = RegExp (/^[가-힣]+$/);
    const expOrderHpCheck = RegExp (/^\d{3}-\d{3,4}-\d{4}$/);
    const expOrderEmailCheck = RegExp (/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$/);
    if (!expOrderNameCheck.test($('#order_name_check').val())) {
        alert('이름은 한글로 입력하세요');
        $('#order_name_check').val('');
        $('#order_name_check').focus();
        return false;
    }
    if (!expOrderHpCheck.test($('#order_hp_check').val())) {
        alert('휴대폰 형식에 맞게 입력하세요 ( -포함 )');
        $('#order_hp_check').val('');
        $('#order_hp_check').focus();
        return false;
    }
    if (!expOrderEmailCheck.test($('#order_email_check').val())) {
        alert('이메일을 형식에 맞게 입력하세요');
        $('#order_email_check').val('');
        $('#order_email_check').focus();
        return false;
    }
}

$(function() {
    const expAddrPopNameCheck = RegExp (/^[가-힣]+$/);
    const expAddrPopHpCheck = RegExp (/^\d{3}-\d{3,4}-\d{4}$/);
    $("#addressName").keyup(() => {
        if($("#addressName").val() == ""){
            $("#addressName").focus();
            $("#caution_not_input_addressName").show();
            return false;
        } else if (!$("#addressName").val() == "") {
            $("#caution_not_input_addressName").hide();
        }
    })
    if (!expAddrPopNameCheck.test($('#toName').val())) {
        $('#toName').val('');
        $('#toName').focus();
        $("#caution_not_input_toName").show();
        $('#caution_not_input_toName').text('받으실 분을 입력해주세요.');
        $('#caution_not_input_toName').css('color', 'blue');
        $('#caution_not_input_toName').css('padding', '10px');
        return false;
    } else if (!$("#toName").val() == "") {
        $("#caution_not_input_toName").hide();
    }
    if (!expAddrPopHpCheck.test($('#hp_input').val())) {
        $('#hp_input').val('');
        $('#hp_input').focus();
        $("#caution_not_input_hp").show();
        $('#caution_not_input_hp').text('휴대폰번호를 입력해주세요.');
        $('#caution_not_input_hp').css('color', 'blue');
        $('#caution_not_input_hp').css('padding', '10px');
        return false;
    } else if (!$("#hp_input").val() == "") {
        $("#caution_not_input_hp").hide();
    }
    if($("#sample6_address").val() == ""){
        $("#sample6_address").focus();
        $("#caution_not_input_address").show();
        $('#caution_not_input_address').text('주소를 입력해주세요.');
        $('#caution_not_input_address').css('color', 'blue');
        $('#caution_not_input_address').css('padding', '10px');
        return false;
    } else if (!$("#sample6_address").val() == "") {
        $("#caution_not_input_address").hide();
    }
});


