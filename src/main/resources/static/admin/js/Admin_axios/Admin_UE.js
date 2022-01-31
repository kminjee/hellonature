$(function () {
    console.log(sessionStorage.getItem("idx"));
    let id = sessionStorage.getItem("idx");

    axios.get("/api/member/read/" + id, {}).then(function (response) {
        let $name = response.data.data.name;
        let $email = response.data.data.email;
        let $hp = response.data.data.hp;
        let $birth = response.data.data.birth;
        let $gender = response.data.data.gender;
        let $mhpIdx = response.data.data.mhpIdx;
        let $greenFlag = response.data.data.greenFlag;
        let $smsFlag = response.data.data.smsFlag;
        let $emailFlag = response.data.data.emailFlag;
        $("#name").val($name)
        $("#email").val($email)
        $("#tel").val($hp)
        $("#birth").val($birth)
        $('input:radio[name="gender"][value="' + $gender + '"]').prop("checked", true);
        if ($mhpIdx != null) {
            $('input:radio[name="hellopass"][value="TRUE"]').prop("checked", true);
        } else if ($mhpIdx == null) {
            $('input:radio[name="hellopass"][value="FALSE"]').prop("checked", true);
        }
        $('input:radio[name="thegreen"][value="' + $greenFlag + '"]').prop("checked", true);
        $('input:radio[name="mail"][value="' + $emailFlag + '"]').prop("checked", true);;
        $('input:radio[name="sms"][value="' + $smsFlag + '"]').prop("checked", true);
    })
})

function sendit() {
    let id = sessionStorage.getItem("idx");
    let name = $("#name").val()
    let email = $("#email").val()
    let password = $("#password").val()
    let hp = $("#tel").val()
    let gender = $('input:radio[name="gender"]:checked').val();
    let birth = $("#birth").val()
    let greenFlag = $('input:radio[name="thegreen"]:checked').val();
    let smsFlag = $('input:radio[name="sms"]:checked').val();
    let emailFlag = $('input:radio[name="mail"]:checked').val();

    console.log(gender)

    if (password != null) {
        axios.put("/api/member/update", {
            data: {
                "idx": id,
                "name": name,
                "email": email,
                "password": password,
                "hp": hp,
                "gender": gender,
                "birth": birth,
                "greenFlag": greenFlag,
                "smsFlag": smsFlag,
                "emailFlag": emailFlag
            }
        }).then(function () {
            alert("수정에 성공하셨습니다")
            $.ajax({
                type:"GET",
                url : "/admin/userlist",
                datatype : "html/text",
                success: function(result){
                    $("#content").html(result).trigger("create");
                }
            });
        })
    } else if (password == null) {
        console.log(gender)
        axios.put("/api/member/update", {
            data: {
                "idx": id,
                "name": name,
                "email": email,
                "hp": hp,
                "gender": gender,
                "birth": birth,
                "greenFlag": greenFlag,
                "smsFlag": smsFlag,
                "emailFlag": emailFlag
            }
        }).then(function () {
            alert("수정에 성공하셨습니다")
            $.ajax({
                type:"GET",
                url : "/admin/userlist",
                datatype : "html/text",
                success: function(result){
                    $("#content").html(result).trigger("create");
                }
            });
            sessionStorage.clear();
        })
    }
}