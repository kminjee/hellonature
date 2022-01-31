//공통 buffer
//참고 https://programmer93.tistory.com/67
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function exportExcel() {
    // step 1. workbook 생성
    var wb = XLSX.utils.book_new();

    // step 2. 시트 만들기
    var newWorksheet = excelHandler.getWorksheet();

    // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
    XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

    // step 4. 엑셀 파일 만들기
    var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});

    // step 5. 엑셀 파일 내보내기
    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), excelHandler.getExcelFileName());
}

$(document).ready(function () {
    $("#exelbtn").click(function () {
        exportExcel();
    });
});

var excelHandler = {
    getExcelFileName: function () {
        return 'hello_userList.xlsx';
    },
    getSheetName: function () {
        return 'userList Sheet';
    },
    getExcelData: function () {
        return document.getElementById('userList_table');
    },
    getWorksheet: function () {
        return XLSX.utils.table_to_sheet(this.getExcelData());
    }
}

//처음 전체보기 + 날짜 설정

$(function () {

    let now = new Date();
    let now_result = now.toISOString().substring(0, 10);

    //일주일, 일개월, 삼개월버튼
    document.getElementById("weekbtn").addEventListener("click", function () {
        let week = new Date();
        week.setDate(week.getDate() - 7);
        var week_result = week.toISOString().substring(0, 10);

        document.getElementById("date_start").value = week_result;
        document.getElementById("date_end").value = now_result;
    })

    document.getElementById("monthbtn").addEventListener("click", function () {

        let month = new Date();
        month.setMonth(month.getMonth() - 1);
        var month_result = month.toISOString().substring(0, 10);


        document.getElementById("date_start").value = month_result;
        document.getElementById("date_end").value = now_result;
    })

    document.getElementById("three_monthbtn").addEventListener("click", function () {

        let three_month = new Date();
        three_month.setMonth(three_month.getMonth() - 3);
        var three_month_result = three_month.toISOString().substring(0, 10);


        document.getElementById("date_start").value = three_month_result;
        document.getElementById("date_end").value = now_result;
    })

    let page = $(".page_hidden").val()
    let tb = $('<tbody>')
    axios.get("/api/member/list?startPage=" + page, {}).then(function (response) {
        for (let i in response.data.data) {
            let $id = response.data.data[i].idx;
            let $name = response.data.data[i].name;
            let $email = response.data.data[i].email;
            let $hp = response.data.data[i].hp;
            let $greenFlag = response.data.data[i].greenFlag;
            let $smsFlag = response.data.data[i].smsFlag;
            let $regdate = response.data.data[i].regdate;
            $regdate = $regdate.toString().substring(0, 10);
            if ($smsFlag == "FALSE") {
                $smsFlag = "미동의"
            } else {
                $smsFlag = "동의"
            }

            if ($greenFlag == "FALSE") {
                $greenFlag = "미가입"
            } else {
                $greenFlag = "더그린"
            }


            let k = parseInt(i) + 1

            let row = $('<tr>').append(
                '<td height="80px"><input type="checkbox" id="Ul_check_' + k + '" name="user" onClick="checkSelectAll()"><label For="Ul_check_' + k + '"></td>' +
                '<td><p>이름 : ' + $name + '</p><p>이메일 : ' + $email + '</p></td>' +
                '<td>' + $hp + '</td>' +
                '<td class="serviceFlag">' + $greenFlag + '</td>' +
                '<td class="smsFlag">' + $smsFlag + '</td>' +
                '<td>' + $regdate + '</td>' +
                '<td><input type="button" value="수정" class="edit_go"><input type="hidden" value="' + $id + '"></td></tr>'
            )
            tb.append(row);
        }
        tb.append($('</tbody>'));
        $(".thead").after(tb)

        // 처음 전체 검색 페이지네이션

        for (let i = response.data.pagination.totalPages; i > 0; i--) {
            let paging = $('<li value="' + (i - 1) + '" class="pagination">').append(
                i + '</li>'
            )
            $("#Maxprev").after(paging)
        }

        // 페이지 네이션 클릭시 axios 호출

        $(".pagination").click(function (e) {

            $(".page_hidden").val($(this).val())
            let page = $(".page_hidden").val()
            let dateStart = $("#date_start").val()
            let dateEnd = $("#date_end").val()
            let scname = $("#scname").val()

            let url = "/api/member/list?dateStart=" + dateStart + "&dateEnd=" + dateEnd;

            if (dateStart == "" && dateEnd == "") {
                url = "/api/member/list?"
            } else if (dateStart != "" && dateEnd == "") {
                url = "/api/member/list?dateStart=" + dateStart
            } else if (dateStart == "" && dateEnd != "") {
                url = "/api/member/list?dateEnd=" + dateEnd
            }

            if ($('#select').val() == "이메일") {
                url = url + "&email=" + scname + "&startPage=" + page
            } else if ($('#select').val() == "이름") {
                url = url + "&name=" + scname + "&startPage=" + page
            } else if ($('#select').val() == "연락처") {
                url = url + "&hp=" + scname + "&startPage=" + page
            }

            let tb = $('<tbody>')
            axios.get(url, {}).then(function (response) {
                if (response.data.data.length == 0) {
                    alert("검색결과가 없습니다")
                    return false;
                } else {
                    $("#userList_table > tbody").remove();
                    for (let i in response.data.data) {
                        let $id = response.data.data[i].idx;
                        let $name = response.data.data[i].name;
                        let $email = response.data.data[i].email;
                        let $hp = response.data.data[i].hp;
                        let $mhpIdx = response.data.data[i].mhpIdx;
                        let $greenFlag = response.data.data[i].greenFlag;
                        let $smsFlag = response.data.data[i].smsFlag;
                        let $regdate = response.data.data[i].regdate;
                        $regdate = $regdate.toString().substring(0, 10);
                        if ($smsFlag == "FALSE") {
                            $smsFlag = "미동의"
                        } else {
                            $smsFlag = "동의"
                        }

                        if ($mhpIdx != null) {
                            $mhpIdx = "헬로패스"
                        } else {
                            $mhpIdx = "미가입"
                        }

                        if ($greenFlag == "FALSE") {
                            $greenFlag = "미가입"
                        } else {
                            $greenFlag = "더그린"
                        }
                        let k = parseInt(i) + 1

                        let row = $('<tr>').append(
                            '<td height="80px"><input type="checkbox" id="Ul_check_' + k + '" name="user" onClick="checkSelectAll()"><label For="Ul_check_' + k + '"></td>' +
                            '<td><p>이름 : ' + $name + '</p><p>이메일 : ' + $email + '</p></td>' +
                            '<td>' + $hp + '</td>' +
                            '<td>' + $mhpIdx + '/' + $greenFlag + '</td>' +
                            '<td>' + $smsFlag + '</td>' +
                            '<td>' + $regdate + '</td>' +
                            '<td><input type="button" value="수정" class="edit_go"><input type="hidden" value="' + $id + '"></td></tr>'
                        )
                        tb.append(row);
                    }
                    tb.append($('</tbody>'));
                    $(".thead").after(tb)
                }

                // 페이지네이션 axios 수정 페이지 클릭시 수정 페이지 이동

                $(".edit_go").click(function (e) {
                    $("#ajax_hidden").val($(this).next().val());
                    let id = $("#ajax_hidden").val();

                    sessionStorage.setItem("idx", id);

                    $("#content").empty();
                    $.ajax({
                        type: 'GET',
                        url: '/admin/useredit?idx=' + id,
                        datatype: 'html/text',
                        success: function (result) {
                            $("#content").html(result).trigger("create");
                        }
                    })
                })
            })
        })

        // 처음 전체 보기 수정 페이지 클릭시 수정 페이지 이동

        $(".edit_go").click(function (e) {
            $("#ajax_hidden").val($(this).next().val());
            let id = $("#ajax_hidden").val();

            sessionStorage.setItem("idx", id);

            $("#content").empty();
            $.ajax({
                type: 'GET',
                url: '/admin/useredit?idx=' + id,
                datatype: 'html/text',
                success: function (result) {
                    $("#content").html(result).trigger("create");
                }
            })
        })
    })
})


//검색하기

function sc() {
    $(".page_hidden").val(0);
    let page = $(".page_hidden").val()
    let dateStart = $("#date_start").val()
    let dateEnd = $("#date_end").val()
    let scname = $("#scname").val()

    // 검색 url 조합

    let url = "/api/member/list?dateStart=" + dateStart + "&dateEnd=" + dateEnd

    if (dateStart == "" && dateEnd == "") {
        url = "/api/member/list?" + "&startPage=" + page
    } else if (dateStart != "" && dateEnd == "") {
        url = "/api/member/list?dateStart=" + dateStart + "&startPage=" + page
    } else if (dateStart == "" && dateEnd != "") {
        url = "/api/member/list?dateEnd=" + dateEnd + "&startPage=" + page
    }

    if ($('#select').val() == "이메일") {
        url = url + "&email=" + scname
    } else if ($('#select').val() == "이름") {
        url = url + "&name=" + scname
    } else if ($('#select').val() == "연락처") {
        url = url + "&hp=" + scname
    }

    console.log(url)

    let tb = $('<tbody>')

    axios.get(url, {}).then(function (response) {
        if (response.data.data.length == 0) {
            alert("검색결과가 없습니다")
            return false;
        } else {
            $("#userList_table > tbody").remove();
            for (let i in response.data.data) {
                let $id = response.data.data[i].idx;
                let $name = response.data.data[i].name;
                let $email = response.data.data[i].email;
                let $hp = response.data.data[i].hp;
                let $mhpIdx = response.data.data[i].mhpIdx;
                let $greenFlag = response.data.data[i].greenFlag;
                let $smsFlag = response.data.data[i].smsFlag;
                let $regdate = response.data.data[i].regdate;
                $regdate = $regdate.toString().substring(0, 10);
                if ($smsFlag == "FALSE") {
                    $smsFlag = "미동의"
                } else {
                    $smsFlag = "동의"
                }

                if ($greenFlag == "FALSE") {
                    $greenFlag = "미가입"
                } else {
                    $greenFlag = "더그린"
                }
                let k = parseInt(i) + 1

                let row = $('<tr>').append(
                    '<td height="80px"><input type="checkbox" id="Ul_check_' + k + '" name="user" onClick="checkSelectAll()"><label For="Ul_check_' + k + '"></td>' +
                    '<td><p>이름 : ' + $name + '</p><p>이메일 : ' + $email + '</p></td>' +
                    '<td>' + $hp + '</td>' +
                    '<td>' + $greenFlag + '</td>' +
                    '<td>' + $smsFlag + '</td>' +
                    '<td>' + $regdate + '</td>' +
                    '<td><input type="button" value="수정" class="edit_go"><input type="hidden" value="' + $id + '"></td></tr>'
                )
                tb.append(row);
            }
            tb.append($('</tbody>'));
            $(".thead").after(tb)
        }

        // 검색 시 페이지네이션

        $("#Maxprev").siblings(".pagination").remove();
        for (let i = response.data.pagination.totalPages; i > 0; i--) {
            let paging = $('<li value="' + (i - 1) + '" class="pagination">').append(
                i + '</li>'
            )
            $("#Maxprev").after(paging)
        }

        // 검색 페이지 네이션 클릭시 axios

        $(".pagination").click(function (e) {
            $(".page_hidden").val($(this).val())
            let page = $(".page_hidden").val()
            let dateStart = $("#date_start").val()
            let dateEnd = $("#date_end").val()
            let scname = $("#scname").val()

            let url = "/api/member/list?dateStart=" + dateStart + "&dateEnd=" + dateEnd;

            if (dateStart == "" && dateEnd == "") {
                url = "/api/member/list?" + "&startPage=" + page
            } else if (dateStart != "" && dateEnd == "") {
                url = "/api/member/list?dateStart=" + dateStart + "&startPage=" + page
            } else if (dateStart == "" && dateEnd != "") {
                url = "/api/member/list?dateEnd=" + dateEnd + "&startPage=" + page
            }

            if ($('#select').val() == "이메일") {
                url = url + "&email=" + scname + "&startPage=" + page
            } else if ($('#select').val() == "이름") {
                url = url + "&name=" + scname + "&startPage=" + page
            } else if ($('#select').val() == "연락처") {
                url = url + "&hp=" + scname + "&startPage=" + page
            }

            let tb = $('<tbody>')
            axios.get(url, {}).then(function (response) {
                if (response.data.data.length == 0) {
                    alert("검색결과가 없습니다")
                    return false;
                } else {
                    $("#userList_table > tbody").remove();
                    for (let i in response.data.data) {
                        let $id = response.data.data[i].idx;
                        let $name = response.data.data[i].name;
                        let $email = response.data.data[i].email;
                        let $hp = response.data.data[i].hp;
                        let $greenFlag = response.data.data[i].greenFlag;
                        let $smsFlag = response.data.data[i].smsFlag;
                        let $regdate = response.data.data[i].regdate;
                        if ($smsFlag == "FALSE") {
                            $smsFlag = "미동의"
                        } else {
                            $smsFlag = "동의"
                        }

                        if ($greenFlag == "FALSE") {
                            $greenFlag = "미가입"
                        } else {
                            $greenFlag = "더그린"
                        }
                        $regdate = $regdate.toString().substring(0, 10);
                        let k = parseInt(i) + 1

                        let row = $('<tr>').append(
                            '<td height="80px"><input type="checkbox" id="Ul_check_"' + k + ' name="user" onClick="checkSelectAll()"><label For="Ul_check_"' + k + '></td>' +
                            '<td><p>이름 : ' + $name + '</p><p>이메일 : ' + $email + '</p></td>' +
                            '<td>' + $hp + '</td>' +
                            '<td>' + $greenFlag + '</td>' +
                            '<td>' + $smsFlag + '</td>' +
                            '<td>' + $regdate + '</td>' +
                            '<td><input type="button" value="수정" class="edit_go"><input type="hidden" value="' + $id + '"></td></tr>'
                        )
                        tb.append(row);
                    }
                    tb.append($('</tbody>'));
                    $(".thead").after(tb)
                }

                // 검색 페이지네이션 수정 페이지 이동 함수

                $(".edit_go").click(function (e) {
                    $("#ajax_hidden").val($(this).next().val());
                    let id = $("#ajax_hidden").val();

                    sessionStorage.setItem("idx", id);

                    $("#content").empty();
                    $.ajax({
                        type: 'GET',
                        url: '/admin/useredit?idx=' + id,
                        datatype: 'html/text',
                        success: function (result) {
                            $("#content").html(result).trigger("create");
                        }
                    })
                })
            })
        })

        // 검색 시 수정 페이지 이동 함수

        $(".edit_go").click(function (e) {
            $("#ajax_hidden").val($(this).next().val());
            let id = $("#ajax_hidden").val();

            sessionStorage.setItem("idx", id);

            $("#content").empty();
            $.ajax({
                type: 'GET',
                url: '/admin/useredit?idx=' + id,
                datatype: 'html/text',
                success: function (result) {
                    $("#content").html(result).trigger("create");
                }
            })
        })
    })
}

$(function () {
    //선택삭제
    $('#delbtn').click(function (){
        let id = [];
        ($("input:checkbox[name='user']:checked").each(function (e){
            id.push($(this).val())
        }));
        id = String(id)
        console.log(id)

        axios.delete("/api/user/deleteList/" + id,  {
        }).then(function (){
            alert("회원 삭제 성공")
            location.reload();
        })
    }).catch(function (err){
        console.log(err)
    })
})