//그래프


window.onload = function () {

    axios.get("/api/admin/main", {}).then(function (response) {

        let product1 = response.data.data.daily.product1;
        let product2 = response.data.data.daily.product2;
        let product3 = response.data.data.daily.product3;
        let brand1 = response.data.data.daily.brand1;
        let brand2 = response.data.data.daily.brand2;
        let productQuestion1 = response.data.data.daily.productQuestion1
        let productQuestion2 = response.data.data.daily.productQuestion2
        let question1 = response.data.data.daily.question1
        let magazine1 = response.data.data.daily.magazine1
        let magazine2 = response.data.data.daily.magazine2
        let order1 = response.data.data.daily.order1
        let order2 = response.data.data.daily.order2
        let order3 = response.data.data.daily.order3
        let order4 = response.data.data.daily.order4


        $("#label_1").text(product1)
        $("#label_2").text(product2)
        $("#label_3").text(product3)
        $("#label_4").text(brand1)
        $("#label_5").text(brand2)
        $("#label_6").text(productQuestion1)
        $("#label_7").text(productQuestion2)
        $("#label_8").text(question1)
        $("#label_9").text(magazine1)
        $("#label_10").text(magazine2)
        $("#label_11").text(order1)
        $("#label_12").text(order2)
        $("#label_13").text(order3)
        $("#label_14").text(order4)

        for (let i in response.data.data.preview.notices) {
            let title = response.data.data.preview.notices[i].title

            let row = $('<tr>').append(
                '<td>' + title + '</td></tr>'
            )
            $("#preview_table1").append(row)
        }

        for (let i in response.data.data.preview.questions) {

            let content = response.data.data.preview.questions[i].content
            content.toString().substring(0, 15);
            content = content + "..."

            let row = $('<tr>').append(
                '<td>' + content + '</td></tr>'
            )
            $("#preview_table2").append(row)

        }

        for (let i in response.data.data.preview.productReviews) {
            let content = response.data.data.preview.productReviews[i].content
            content.toString().substring(0, 15);
            content = content + "..."

            let row = $('<tr>').append(
                '<td>' + content + '</td></tr>'
            )
            $("#preview_table3").append(row)
        }

        for (let i in response.data.data.preview.productQuestions) {
            let content = response.data.data.preview.productQuestions[i].content
            content.toString().substring(0, 15);
            content = content + "..."

            let row = $('<tr>').append(
                '<td>' + content + '</td></tr>'
            )
            $("#preview_table4").append(row)
        }

        let memberCount = response.data.data.users.memberCount;
        let orderCount = response.data.data.users.orderCount;
        let claimCount = response.data.data.users.claimCount;


        let myChart2 = document.getElementById('myChart2').getContext('2d');

        mybar = new Chart(myChart2, {
            type: 'bar', // 차트의 형태
            data: {
                labels: [
                    //x 축
                    '판매중', '판매중지', '품절'
                ],
                datasets: [
                    { //데이터
                        fill: true,
                        fillColor: '#04363a',
                        borderDashOffset: 1.0,
                        data: [$("#label_1").text(), $("#label_2").text(), $("#label_3").text()],
                        backgroundColor: gradient2,
                        borderColor: [
                            '#e9fae9',
                        ],
                        borderWidth: 1,
                        pointBorderColor: '#266266',
                        pointBackgroundColor: '#266266'
                    }
                ]
            },
            options: {
                responsive: false,
                tooltips: {
                    enabled: false
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.fillStyle = '';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });
                        });
                    }
                },
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                                beginAtZero: true,
                                max: 2000,
                            },
                            gridLines: {
                                display: true,
                                drawOnChartArea: false,
                            }
                        }
                    ],
                    xAxes: [{
                        barPercentage: 0.3,
                        gridLines: {
                            display: true,
                            drawOnChartArea: false,
                        }
                    }]
                }
            }
        });


        let myChart = document.getElementById('myChart').getContext('2d');
        gradient = myChart.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0.5, '#e9fae9');
        gradient.addColorStop(0.35, '#BFFFC7');
        gradient.addColorStop(0.15, '#18A5A7');

        console.log(memberCount)


        let linechart = new Chart(myChart, {
            type: 'line', // 차트의 형태
            data: {
                labels: [
                    //x 축
                    '1', '2', '3', '4', '5', '6', '7'
                ],
                datasets: [
                    { //데이터
                        fill: true,
                        data: memberCount,
                        backgroundColor: gradient,
                        borderColor: [
                            '#266266',
                        ],
                        borderWidth: 2.8,//경계선 굵기
                        pointBorderColor: '#266266',
                        pointBackgroundColor: '#266266'
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                max: 1200,
                            },
                            gridLines: {
                                display: true,
                                drawOnChartArea: false,
                            }
                        }
                    ]
                }
            }
        });

        $(function () {
            $("#Am_c2_chart_1").click(function (event) {
                if ($(this).hasClass("strong")) {
                    $(this).add("#Am_c2_chart_1").removeClass("strong");
                } else {
                    $(this).add("#Am_c2_chart_1").addClass("strong")
                    $(".Am_c2 > ul > li > a").not($(this)).removeClass("strong")
                    event.stopPropagation();
                }

                let myChart = document.getElementById('myChart').getContext('2d');
                gradient = myChart.createLinearGradient(0, 0, 0, 450);

                gradient.addColorStop(0.5, '#e9fae9');
                gradient.addColorStop(0.35, '#BFFFC7');
                gradient.addColorStop(0.15, '#18A5A7');

                console.log(memberCount)


                let linechart = new Chart(myChart, {
                    type: 'line', // 차트의 형태
                    data: {
                        labels: [
                            //x 축
                            '1', '2', '3', '4', '5', '6', '7'
                        ],
                        datasets: [
                            { //데이터
                                fill: true,
                                data: memberCount,
                                backgroundColor: gradient,
                                borderColor: [
                                    '#266266',
                                ],
                                borderWidth: 2.8,//경계선 굵기
                                pointBorderColor: '#266266',
                                pointBackgroundColor: '#266266'
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 1200,
                                    },
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }
                            ]
                        }
                    }
                });


            })
        })

        $(function () {
            $("#Am_c2_chart_2").click(function (event) {
                if ($(this).hasClass("strong")) {
                    $(this).add("#Am_c2_chart_2").removeClass("strong");
                } else {
                    $(this).add("#Am_c2_chart_2").addClass("strong")
                    $(".Am_c2 > ul > li > a").not($(this)).removeClass("strong")
                    event.stopPropagation();
                }


                let myChart = document.getElementById('myChart').getContext('2d');
                gradient = myChart.createLinearGradient(0, 0, 0, 450);

                gradient.addColorStop(0.5, '#e9fae9');
                gradient.addColorStop(0.35, '#BFFFC7');
                gradient.addColorStop(0.15, '#18A5A7');


                let linechart = new Chart(myChart, {
                    type: 'line', // 차트의 형태
                    data: {
                        labels: [
                            //x 축
                            '1', '2', '3', '4', '5', '6', '7'
                        ],
                        datasets: [
                            { //데이터
                                fill: true,
                                data: orderCount,
                                backgroundColor: gradient,
                                borderColor: [
                                    '#266266',
                                ],
                                borderWidth: 2.8,//경계선 굵기
                                pointBorderColor: '#266266',
                                pointBackgroundColor: '#266266'
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 1200,
                                    },
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }
                            ]
                        }
                    }
                });


            })
        })

        $(function () {
            $("#Am_c2_chart_3").click(function (event) {
                if ($(this).hasClass("strong")) {
                    $(this).add("#Am_c2_chart_3").removeClass("strong");
                } else {
                    $(this).add("#Am_c2_chart_3").addClass("strong")
                    $(".Am_c2 > ul > li > a").not($(this)).removeClass("strong")
                    event.stopPropagation();
                }

                let myChart = document.getElementById('myChart').getContext('2d');
                gradient = myChart.createLinearGradient(0, 0, 0, 450);

                gradient.addColorStop(0.5, '#e9fae9');
                gradient.addColorStop(0.35, '#BFFFC7');
                gradient.addColorStop(0.15, '#18A5A7');

                console.log(memberCount)


                let linechart = new Chart(myChart, {
                    type: 'line', // 차트의 형태
                    data: {
                        labels: [
                            //x 축
                            '1', '2', '3', '4', '5', '6', '7'
                        ],
                        datasets: [
                            { //데이터
                                fill: true,
                                data: claimCount,
                                backgroundColor: gradient,
                                borderColor: [
                                    '#266266',
                                ],
                                borderWidth: 2.8,//경계선 굵기
                                pointBorderColor: '#266266',
                                pointBackgroundColor: '#266266'
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 1200,
                                    },
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }
                            ]
                        }
                    }
                });


            })
        })

    }).catch(function (err) {
        console.log(err)
    })


    let myChart2 = document.getElementById('myChart2').getContext('2d');
    gradient2 = myChart2.createLinearGradient(0, 0, 0, 450);
    gradient2.addColorStop(0, '#04363a');
    gradient2.addColorStop(0.5, '#266266');
    gradient2.addColorStop(1, '#e9fae9');

    let hover_1 = document.getElementById("Am_c1_product")
    let hover_2 = document.getElementById("Am_c1_order")
    let hover_3 = document.getElementById("Am_c1_claim")
    let hover_4 = document.getElementById("Am_c1_delay")
    let hover_5 = document.getElementById("Am_c1_review")
    let hover_6 = document.getElementById("Am_c1_question")

    let label_1 = document.getElementById("label_1").innerText
    let label_2 = document.getElementById("label_2").innerText
    let label_3 = document.getElementById("label_3").innerText

    setTimeout(function () {
        hover_1.addEventListener("click", function () {
            $(".chartjs-hidden-iframe").remove();
            mybar = new Chart(myChart2, {
                type: 'bar', // 차트의 형태
                data: {
                    labels: [
                        //x 축
                        '판매중', '판매중지', '품절'
                    ],
                    datasets: [
                        { //데이터
                            fill: true,
                            fillColor: '#04363a',
                            borderDashOffset: 1.0,
                            data: [$("#label_1").text(), $("#label_2").text(), $("#label_3").text()],
                            backgroundColor: gradient2,
                            borderColor: [
                                '#e9fae9',
                            ],
                            borderWidth: 1,
                            pointBorderColor: '#266266',
                            pointBackgroundColor: '#266266'
                        }
                    ]
                },
                options: {
                    responsive: false,
                    tooltips: {
                        enabled: false
                    },
                    animation: {
                        duration: 1,
                        onComplete: function () {
                            var chartInstance = this.chart,
                                ctx = chartInstance.ctx;
                            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                            ctx.fillStyle = '';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';

                            this.data.datasets.forEach(function (dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function (bar, index) {
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                });
                            });
                        }
                    },
                    maintainAspectRatio: false,
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                    beginAtZero: true,
                                    max: 2000,
                                },
                                gridLines: {
                                    display: true,
                                    drawOnChartArea: false,
                                }
                            }
                        ],
                        xAxes: [{
                            barPercentage: 0.3,
                            gridLines: {
                                display: true,
                                drawOnChartArea: false,
                            }
                        }]
                    }
                }
            });
        });
    }, 200);

    setTimeout(function () {
        hover_2.addEventListener("click", function () {
            setTimeout(function () {
                $(".chartjs-hidden-iframe").remove();
                let mybar2 = new Chart(myChart2, {
                    type: 'bar', // 차트의 형태
                    data: {
                        labels: [
                            //x 축
                            '신규입점', '입점중지'
                        ],
                        datasets: [
                            { //데이터
                                fill: true,
                                fillColor: '#04363a',
                                borderDashOffset: 1.0,
                                data: [$("#label_4").text(), $("#label_5").text()],
                                backgroundColor: gradient2,
                                borderColor: [
                                    '#e9fae9',
                                ],
                                borderWidth: 1,
                                pointBorderColor: '#266266',
                                pointBackgroundColor: '#266266'
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                        tooltips: {
                            enabled: false
                        },
                        animation: {
                            duration: 1,
                            onComplete: function () {
                                var chartInstance = this.chart,
                                    ctx = chartInstance.ctx;
                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                ctx.fillStyle = '';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';

                                this.data.datasets.forEach(function (dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function (bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                    });
                                });
                            }
                        },
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        display: false,
                                        beginAtZero: true,
                                        max: 100,
                                    },
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }
                            ],
                            xAxes: [{
                                barPercentage: 0.3,
                                gridLines: {
                                    display: true,
                                    drawOnChartArea: false,
                                }
                            }]
                        }
                    }
                });
            }, 200);
        });

        setTimeout(function () {
            hover_3.addEventListener("click", function () {
                $(".chartjs-hidden-iframe").remove();
                let mybar3 = new Chart(myChart2, {
                    type: 'bar', // 차트의 형태
                    data: {
                        labels: [
                            //x 축
                            '미답변 문의', '미답변 후기'
                        ],
                        datasets: [
                            { //데이터
                                fill: true,
                                fillColor: '#04363a',
                                borderDashOffset: 1.0,
                                data: [$("#label_6").text(), $("#label_7").text()],
                                backgroundColor: gradient2,
                                borderColor: [
                                    '#e9fae9',
                                ],
                                borderWidth: 1,
                                pointBorderColor: '#266266',
                                pointBackgroundColor: '#266266'
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                        tooltips: {
                            enabled: false
                        },
                        animation: {
                            duration: 1,
                            onComplete: function () {
                                var chartInstance = this.chart,
                                    ctx = chartInstance.ctx;
                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                ctx.fillStyle = '';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';

                                this.data.datasets.forEach(function (dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function (bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                    });
                                });
                            }
                        },
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        display: false,
                                        beginAtZero: true,
                                        max: 100,
                                    },
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }
                            ],
                            xAxes: [{
                                barPercentage: 0.3,
                                gridLines: {
                                    display: true,
                                    drawOnChartArea: false,
                                }
                            }]
                        }
                    }
                });
            }, 200);

            setTimeout(function () {
                hover_4.addEventListener("click", function () {
                    $(".chartjs-hidden-iframe").remove();
                    let mybar4 = new Chart(myChart2, {
                        type: 'bar', // 차트의 형태
                        data: {
                            labels: [
                                //x 축
                                '미답변 문의'
                            ],
                            datasets: [
                                { //데이터
                                    fill: true,
                                    fillColor: '#04363a',
                                    borderDashOffset: 1.0,
                                    data: [$("#label_8").text()],
                                    backgroundColor: gradient2,
                                    borderColor: [
                                        '#e9fae9',
                                    ],
                                    borderWidth: 1,
                                    pointBorderColor: '#266266',
                                    pointBackgroundColor: '#266266'
                                }
                            ]
                        },
                        options: {
                            responsive: false,
                            tooltips: {
                                enabled: false
                            },
                            animation: {
                                duration: 1,
                                onComplete: function () {
                                    var chartInstance = this.chart,
                                        ctx = chartInstance.ctx;
                                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                    ctx.fillStyle = '';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';

                                    this.data.datasets.forEach(function (dataset, i) {
                                        var meta = chartInstance.controller.getDatasetMeta(i);
                                        meta.data.forEach(function (bar, index) {
                                            var data = dataset.data[index];
                                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                        });
                                    });
                                }
                            },
                            maintainAspectRatio: false,
                            title: {
                                display: false
                            },
                            legend: {
                                display: false
                            },
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            display: false,
                                            beginAtZero: true,
                                            max: 100,
                                        },
                                        gridLines: {
                                            display: true,
                                            drawOnChartArea: false,
                                        }
                                    }
                                ],
                                xAxes: [{
                                    barPercentage: 0.3,
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }]
                            }
                        }
                    });
                });
            }, 200);

            setTimeout(function () {
                hover_5.addEventListener("click", function () {
                    $(".chartjs-hidden-iframe").remove();
                    let mybar5 = new Chart(myChart2, {
                        type: 'bar', // 차트의 형태
                        data: {
                            labels: [
                                //x 축
                                '신규매거진', '전시중지 매거진'
                            ],
                            datasets: [
                                { //데이터
                                    fill: true,
                                    fillColor: '#04363a',
                                    borderDashOffset: 1.0,
                                    data: [$("#label_9").text(), $("#label_10").text()],
                                    backgroundColor: gradient2,
                                    borderColor: [
                                        '#e9fae9',
                                    ],
                                    borderWidth: 1,
                                    pointBorderColor: '#266266',
                                    pointBackgroundColor: '#266266'
                                }
                            ]
                        },
                        options: {
                            responsive: false,
                            tooltips: {
                                enabled: false
                            },
                            animation: {
                                duration: 1,
                                onComplete: function () {
                                    var chartInstance = this.chart,
                                        ctx = chartInstance.ctx;
                                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                    ctx.fillStyle = '';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';

                                    this.data.datasets.forEach(function (dataset, i) {
                                        var meta = chartInstance.controller.getDatasetMeta(i);
                                        meta.data.forEach(function (bar, index) {
                                            var data = dataset.data[index];
                                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                        });
                                    });
                                }
                            },
                            maintainAspectRatio: false,
                            title: {
                                display: false
                            },
                            legend: {
                                display: false
                            },
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            display: false,
                                            beginAtZero: true,
                                            max: 200,
                                        },
                                        gridLines: {
                                            display: true,
                                            drawOnChartArea: false,
                                        }
                                    }
                                ],
                                xAxes: [{
                                    barPercentage: 0.3,
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }]
                            }
                        }
                    });
                });
            }, 200);

            setTimeout(function () {
                hover_6.addEventListener("click", function () {
                    $(".chartjs-hidden-iframe").remove();
                    let mybar6 = new Chart(myChart2, {
                        type: 'bar', // 차트의 형태
                        data: {
                            labels: [
                                //x 축
                                '신규주문', '입금완료', '배송완료', '취소,환불,반품'
                            ],
                            datasets: [
                                { //데이터
                                    fill: true,
                                    fillColor: '#04363a',
                                    borderDashOffset: 1.0,
                                    data: [$("#label_11").text(), $("#label_12").text(), $("#label_13").text(), $("#label_14").text()],
                                    backgroundColor: gradient2,
                                    borderColor: [
                                        '#e9fae9',
                                    ],
                                    borderWidth: 1,
                                    pointBorderColor: '#266266',
                                    pointBackgroundColor: '#266266'
                                }
                            ]
                        },
                        options: {
                            responsive: false,
                            tooltips: {
                                enabled: false
                            },
                            animation: {
                                duration: 1,
                                onComplete: function () {
                                    var chartInstance = this.chart,
                                        ctx = chartInstance.ctx;
                                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                    ctx.fillStyle = '';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';

                                    this.data.datasets.forEach(function (dataset, i) {
                                        var meta = chartInstance.controller.getDatasetMeta(i);
                                        meta.data.forEach(function (bar, index) {
                                            var data = dataset.data[index];
                                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                        });
                                    });
                                }
                            },
                            maintainAspectRatio: false,
                            title: {
                                display: false
                            },
                            legend: {
                                display: false
                            },
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            display: false,
                                            beginAtZero: true,
                                            max: 2000,
                                        },
                                        gridLines: {
                                            display: true,
                                            drawOnChartArea: false,
                                        }
                                    }
                                ],
                                xAxes: [{
                                    barPercentage: 0.3,
                                    gridLines: {
                                        display: true,
                                        drawOnChartArea: false,
                                    }
                                }]
                            }
                        }
                    });
                })
            });
        }, 200);
    })
}