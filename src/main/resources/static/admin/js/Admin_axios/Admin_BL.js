$(function () {
    let page = $('.page').val()

    axios.get('/api/brand/list?startPage='+ page, {

    }).then(function (response) {
        let tb = $('<tbody class="tbody">');
        for (let i in response.data.data) {
            let $id = response.data.data[i].idx;
            let $name = response.data.data[i].name;
            let $proCount = response.data.data[i].proCount;
            let $dateStart = response.data.data[i].dateStart;
            let $dateEnd = response.data.data[i].dateEnd;
            let $state = response.data.data[i].state;
            if ($state == 1) {
                $state = '입점대기'
            } else if ($state == 2) {
                $state = '입점중'
            } else if ($state == 3) {
                $state = '입점중지'
            } else if ($state == 4) {
                $state = '입점종료'
            }else{
                $state = ""
            }
            console.log($name);
            console.log($proCount);
            console.log($dateStart);
            console.log($dateEnd);
            console.log($state);

            let row = $('<tr>').append(
                '<td><input type="checkbox" value="'+$id+'" id="check_' + i + '" name="brand" onclick="BL_checkSelectAll()"><label for="check_' + i + '"></label></td>' +
                '<td>' + $name + '</td>' +
                '<td>' + $proCount + '</td>' +
                '<td>' + $dateStart + ' ~ ' + $dateEnd + '</td>' +
                '<td><input type="button" class="edit" value="'+ $state +'"><input type="hidden" value="'+ $id +'"></td></tr>'
            )
            tb.append(row);
        }
        $('.thead').after(tb);

        $(".edit").click(function (e) {
            $("#ajax_hidden").val($(this).next().val());
            let id = $("#ajax_hidden").val();

            console.log(id)

            sessionStorage.setItem("brIdx", id);
            $.ajax({
                type: 'GET',
                url: '/admin/BrandEdit?brIdx=' + id,
                datatype: 'html/text',
                success: function (result) {
                    console.log(result)
                    $("#content").html(result).trigger("create");
                }
            })
        })

        for (let i = response.data.pagination.totalPages; i > 0; i--) {
            let pages = $('<li class="page_num" style="cursor: pointer" value="' + (i - 1) + '">').append(
                i + '</li>'
            )
            $('#prev').after(pages);
        }
        $('.page_num').click(function (e) {

            $('.tbody').empty();

            $(".page").val($(this).val())
            let page = $('.page').val()

            axios.get('/api/brand/list?startPage=' + page, {}).then(function (response) {
                let tb = $('<tbody class="tbody">');
                for (let i in response.data.data) {
                    let $id = response.data.data[i].idx;
                    let $name = response.data.data[i].name;
                    let $proCount = response.data.data[i].proCount;
                    let $dateStart = response.data.data[i].dateStart;
                    let $dateEnd = response.data.data[i].dateEnd;
                    let $state = response.data.data[i].state;
                    if ($state == 1) {
                        $state = '입점대기'
                    } else if ($state == 2) {
                        $state = '입점중'
                    } else if ($state == 3) {
                        $state = '입점중지'
                    } else if ($state == 4) {
                        $state = '입점종료'
                    }else{
                        $state = ""
                    }
                    let row = $('<tr>').append(
                        '<td><input type="checkbox" value="'+$id+'" id="check_' + i + '" name="brand" onclick="BL_checkSelectAll()"><label for="check_' + i + '"></label></td>' +
                        '<td>' + $name + '</td>' +
                        '<td>' + $proCount + '</td>' +
                        '<td>' + $dateStart + ' ~ ' + $dateEnd + '</td>' +
                        '<td><input type="button" class="edit" value="'+ $state +'"><input type="hidden" value="'+ $id +'"></td></tr>'
                    )
                    tb.append(row);
                }
                $('.thead').after(tb);

                $(".edit").click(function (e) {
                    $("#ajax_hidden").val($(this).next().val());
                    let id = $("#ajax_hidden").val();

                    console.log(id)

                    sessionStorage.setItem("brIdx", id);
                    $.ajax({
                        type: 'GET',
                        url: '/admin/BrandEdit?brIdx=' + id,
                        datatype: 'html/text',
                        success: function (result) {
                            console.log(result)
                            $("#content").html(result).trigger("create");
                        }
                    })
                })
            })
        })

    }).catch(function (err) {
        console.log(err);
    })
})

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

    $('#search').click(function (e) {
        let name = $('#name').val();
        let state = $('input:checkbox[name="enter_state"]:checked').val();

        if (state == '입점대기') {
            state = 1
        } else if (state == '입점중') {
            state = 2
        } else if (state == '입점중지') {
            state = 3
        } else if (state == '입점종료') {
            state = 4
        } else{
            state = ""
        }

        let dateStart = $('#date_start').val();
        let dateEnd = $('#date_end').val();
        let page = $('.page').val();
        let url = '/api/brand/list?name=' + name;

        if(name == ""){
            url = '/api/brand/list?startPage=' + page;
        }else if(name != ""){
            url = '/api/brand/list?startPage=' + page + '&name=' + name;
        }
        console.log(state);

        if(state == ""){
            url = url;
        }else if(state != ""){
            url = url + '&state=' + state;
        }

        if(dateStart == "" && dateEnd == ""){
            url = url;
        }else if(dateStart == "" && dateEnd != ""){
            url = url + '&dateEnd=' + dateEnd;
        }else if(dateStart != "" && dateEnd == ""){
            url = url + '&dateStart' + dateStart;
        }else if(dateStart != "" && dateEnd != ""){
            url = '/api/brand/list?startPage=' + page + '&name=' + name + '&dateStart=' + dateStart + '&dateEnd=' + dateEnd;
        }else if(dateStart != "" && dateEnd != ""){
            url = '/api/brand/list?startPage=' + page + '&dateStart=' + dateStart + '&dateEnd=' + dateEnd;
        }
        console.log(url);
        $('.tbody').empty();

        axios.get(url, {}).then(function (response) {

            let tb = $('<tbody class="tbody">');
            for (let i in response.data.data) {
                let $id = response.data.data[i].idx;
                let $name = response.data.data[i].name;
                let $proCount = response.data.data[i].proCount;
                let $dateStart = response.data.data[i].dateStart;
                let $dateEnd = response.data.data[i].dateEnd;
                let $state = response.data.data[i].state;
                if ($state == 1) {
                    $state = '입점대기'
                } else if ($state == 2) {
                    $state = '입점중'
                } else if ($state == 3) {
                    $state = '입점중지'
                } else if ($state == 4) {
                    $state = '입점종료'
                }else{
                    $state = ""
                }

                let row = $('<tr>').append(
                    '<td><input type="checkbox" value="'+$id+'" id="check_' + i + '" name="brand" onclick="BL_checkSelectAll()"><label for="check_' + i + '"></label></td>' +
                    '<td>' + $name + '</td>' +
                    '<td>' + $proCount + '</td>' +
                    '<td>' + $dateStart + ' - ' + $dateEnd + '</td>' +
                    '<td><input type="button" class="edit" value="'+ $state +'"><input type="hidden" value="'+ $id +'"></td></tr>'
                )
                tb.append(row);
            }
            $('.thead').after(tb);

            $(".edit").click(function (e) {
                $("#ajax_hidden").val($(this).next().val());
                let id = $("#ajax_hidden").val();

                console.log(id)

                sessionStorage.setItem("brIdx", id);
                $.ajax({
                    type: 'GET',
                    url: '/admin/BrandEdit?brIdx=' + id,
                    datatype: 'html/text',
                    success: function (result) {
                        console.log(result)
                        $("#content").html(result).trigger("create");
                    }
                })
            })

            for (let i = response.data.pagination.totalPages; i > 0; i--) {
                let pages = $('<li class="page_num" style="cursor:pointer" value="'+ (i - 1) +'">').append(
                    i + '</li>'
                )
                $('#prev').after(pages);
            }
            $('.page_num').click(function (e) {

                $('.tbody').empty();

                $(".page").val($(this).val())
                let page = $('.page').val()
                let url = '/api/brand/list?startPage=' + page;
                // if(state == ""){
                //     url = '/api/brand/list?&name='+ name +'&dateStart='+ dateStart + '&dateEnd='+ dateEnd;
                //     console.log(url)


                axios.get('/api/brand/list?startPage='+ page + '&name=' + name, {}).then(function (response) {
                    let tb = $('<tbody>');
                    for (let i in response.data.data) {
                        let $id = response.data.data[i].idx;
                        let $name = response.data.data[i].name;
                        let $proCount = response.data.data[i].proCount;
                        let $dateStart = response.data.data[i].dateStart;
                        let $dateEnd = response.data.data[i].dateEnd;
                        let $state = response.data.data[i].state;
                        if ($state == 1) {
                            $state = '입점대기'
                        } else if ($state == 2) {
                            $state = '입점중'
                        } else if ($state == 3) {
                            $state = '입점중지'
                        } else if ($state == 4) {
                            $state = '입점종료'
                        }else{
                            state = ""
                        }

                        let row = $('<tr>').append(
                            '<td><input type="checkbox" value="'+$id+'" id="check_' + i + '" name="brand" onclick="BL_checkSelectAll()"><label for="check_' + i + '"></label></td>' +
                            '<td>' + $name + '</td>' +
                            '<td>' + $proCount + '</td>' +
                            '<td>' + $dateStart + ' ~ ' + $dateEnd + '</td>' +
                            '<td><input type="button" class="edit" value="'+ $state +'"><input type="hidden" value="'+ $id +'"></td></tr>'
                        )
                        tb.append(row);
                    }
                    $('.thead').after(tb);

                    $(".edit").click(function (e) {
                        $("#ajax_hidden").val($(this).next().val());
                        let id = $("#ajax_hidden").val();

                        sessionStorage.setItem("brIdx", id);
                        $.ajax({
                            type: 'GET',
                            url: '/admin/BrandEdit?brIdx=' + id,
                            datatype: 'html/text',
                            success: function (result) {
                                console.log(result)
                                $("#content").html(result).trigger("create");
                            }
                        })
                    })
                })
            })

        }).catch(function (err) {
            console.log(err);
            alert("검색 결과가 없습니다.")
        })
    })
})

$(function () {
    //선택삭제
    $('#delbtn').click(function (){
        alert('클릭')
        let id = [];
        ($("input:checkbox[name='brand']:checked").each(function (e){
            id.push($(this).val())
        }));
        id = String(id)
        console.log(id)

        axios.delete("/api/brand/deleteList/" + id,  {
        }).then(function (){
            alert("브랜드 삭제 성공")
            location.reload();
        })
    }).catch(function (err){
        console.log(err)
    })
})

$('input[name="enter_state"]').click(function(e){
    let count = $('input:checked[name="enter_state"]').length;
    if(count > 1){
        $(this).prop('checked', false);
        alert('한개만 선택해주세요')
    }
})