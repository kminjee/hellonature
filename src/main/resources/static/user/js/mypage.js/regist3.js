$(function () {
    $("#email_check_btn").click(function () {
        const inputEmail = $("#email_input").val();
        axios.get('/api/member/emailCheck/' + inputEmail, {}).then((response) => {
            const flag = response.data.data;
            if (flag === "TRUE") {
                alert("이미 존재하는 이메일입니다.");
                $("#email_check_btn").css("background", "#ffffff")
                $("#email_check_btn").css("color", "#5dab99");
            } else {
                alert("사용 가능한 이메일입니다.");
                $("#email_check_btn").css("background", "#5dab99");
                $("#email_check_btn").css("color", "#fff");
            }
        })
    })
});

function sendit() {
    const expPwCheck = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/);
    const expNameCheck = RegExp(/^[가-힣]+$/);
    const expHpCheck = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    const expEmailInput = RegExp(/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$/);

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
    if ($("#pwd_input").val() != $("#pwd2_input").val()) {
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

    if ($("#email_input").val() == "") {
        alert("이메일을 입력해주세요.")
        $('#email_input').focus();
        return false;
    }

    if ($("#pwd_input").val() == "") {
        alert('비밀번호를 입력하세요');
        $('#pwd_input').focus();
        return false;
    }

    if ($("#pwd2_input").val() == "") {
        alert('비밀번호 확인을 입력하세요');
        $('#pwd2_input').focus();
        return false;
    }

    if ($("#name_input").val() == "") {
        alert('이름을 입력하세요');
        $('#name_input').focus();
        return false;
    }

    if ($("#sample6_detailAddress").val() == "") {
        alert('상세주소를 입력하세요.');
        $('#sample6_detailAddress').focus();
        return false;
    }

    let email = $('#email_input').val();                    // 이메일
    let name = $('#name_input').val();                      // 이름
    let password = $('#pwd_input').val();                   // 비밀번호
    let hp = $('#hp_input').val();                          // 연락처
    let birth = $('#birth_input').val();                    // 생년월일

    let zipcode = $('#sample6_postcode').val();                         // 우편번호
    let addr1 = $('#sample6_address').val();                            // 도로명 주소
    let sample6DetailAddress = $('#sample6_detailAddress').val();       // 상세주소
    let sample6ExtraAddress = $('#sample6_extraAddress').val();         // 나머지 주소
    let addr2 = sample6DetailAddress + " " + sample6ExtraAddress;       // 상세주소 + 나머지주소
    let site = "HELLONATURE";                                           // 헬로네이쳐 회원가입

    let check;
    let gender; // 0: "FEMALE, 1: "MALE"
    // 남자 체크
    if ($('#select_man').is(':checked')) {
        gender = 1;
        // 여자 체크
    } else if ($('#select_woman').is(':checked')) {
        gender = 0;
    }

    /* 동의 체크 */
    let smsFlag;            // TRUE일 경우 수신동의, FALSE일 경우 수신거부(default)
    let emailFlag;          // 이하 동일
    // 전체 동의일 경우
    if ($('#regist_check_all_btn').hasClass('regist_check_all_btn_checked')) {
        smsFlag = "TRUE";
        emailFlag = "TRUE";
        check = true;
    }
    // SMS 수신동의일 경우
    if ($('#agree_sms').hasClass('regist_check_btn_checked')) {
        smsFlag = "TRUE";
        check = true;
    }
    // EMAIL 수신동의일 경우
    if ($('#agree_email').hasClass('regist_check_btn_checked')) {
        emailFlag = "TRUE";
        check = true;
    }
    if (!check) {
        emailFlag = "FALSE";
        smsFlag = "FALSE";
    }

    axios.post('/api/member/signUp', {
        headers: {'Content-type': 'application/json'},
        data: {
            email: email,                       // 이메일 주소
            password: password,                 // 비밀번호
            name: name,                         // 이름
            hp: hp,                             // 연락처
            gender: gender,                     // 성별
            birth: birth,                       // 생년월일
            smsFlag: smsFlag,                   // SMS수신
            emailFlag: emailFlag,               // EMAIL수신
            zipcode: zipcode,                   // 우편번호
            addr1: addr1,                       // 주소1
            addr2: addr2,                       // 주소2
            site: site,                         // 헬로네이쳐

            addrName: "기본배송지",                // 삭제컬럼컬럼1
            requestType: 1,                    // 삭제예정컬럼2
            requestMemo1: "삭제할 컬럼",          // 삭제예정컬럼3
        }
    }).then(function () {
        alert('회원가입이 완료되었습니다.');
        location.href = "/user/mypage_userLogin"
    }).catch(function (err) {
        alert('회원가입에 실패했습니다 정보를 다시 확인해주세요')
        console.log(err)
    });
}