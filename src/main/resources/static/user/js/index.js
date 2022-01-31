// 상단 배너 닫기(1일 동안)
var topBnr = document.querySelector('.top_bnr_bg'),
    topBnrClose = document.querySelector('.top_brn_close');

// 쿠키 생성
function setCookie(name, value, day){
    var date = new Date(); // 현재 날짜 지정
    date.setDate(date.getDate() + day);

    var mycookie = '';
    mycookie += name + '=' + value + ';';
    mycookie += 'Expires=' + date.toUTCString();

    document.cookie = mycookie; // 쿠키 설정 생성

}
// setCookie('Nature', 'Main', 1); // 쿠키들어갔는지 확인용

// 쿠키 삭제
function delCookie(name){
    var date = new Date();
    date.setDate(date.getDate() - 1);

    var setCookie = '';
    setCookie += name+'=Main;';
    setCookie += 'Expires=' + date.toUTCString();

    document.cookie = setCookie;
}

// 쿠키 확인
function checkCookie(name){
    var cookies = document.cookie.split(';');
    console.log(cookies);
    var visited = false;    // 방문여부

    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            visited = true; // 방문했을때
            console.log(visited);   // 참거짓 여부 참:안나옴, 거짓:나옴
        }
    }

    if(visited){
        // 재방문
        topBnr.style.display = 'none';
    }else{
        // 신규방문
        topBnr.style.display = 'true';
    }
}
checkCookie('HelloNature');

topBnrClose.addEventListener('click', function(){
    setCookie('HelloNature', 'Main', 1);
    topBnr.style.display = 'none';
});


/* ---------------------------------------------------------------------------- */

// 아이템 4단 배열 슬라이드 index.html > #item_list_1

var slidesA = document.querySelector('#item_list_1 .list_mold'), // ul 변수
    slideA = document.querySelectorAll('#item_list_1 .list_mold li'), // li 변수
    currentIdxA = 0, // 클릭할때마다 값이 차감됨
    slideCountA = slideA.length,  // 슬라이드 어디까지 됐는지 보게
    slideWidthA = 249,   // image width
    slideMarginA = 18,   // image right margin
    prevBtnA = document.querySelector('#item_list_1 .btn_prev'), // 왼쪽버튼
    nextBtnA = document.querySelector('#item_list_1 .btn_next'); // 오른쪽버튼

makeCloneA();    // 복사본 함수

function makeCloneA() {
    for(var i = 0; i < slideCountA; i++){
        var cloneSlideA = slideA[i].cloneNode(true);
        // a.cloneNode() >> a요소를 그대로 복사,
        // a.cloneNode(true) >> a자식요소를 모두 복사
        cloneSlideA.classList.add('cloneA');
        // 뒤에 요소를 추가하는 함수 a.appendChild(b) a요소 기준으로 뒤에 b추가
        slidesA.appendChild(cloneSlideA); // 뒷부분에 클론 만듬
    }
    for(var i = slideCountA -1; i>=0; i--){
        var cloneSlideA = slideA[i].cloneNode(true);
        cloneSlideA.classList.add('cloneA');
        // 앞에 요소를 추가하는 함수 a.prepend(b) a요소 기준으로 앞에 b추가
        slidesA.prepend(cloneSlideA); // 앞부분에 클론 만듬
    }
    updateWidthA();
    setInitialPosA();

    // 슬라이드 애니메이션
    setTimeout(function(){
        slidesA.classList.add('aniA');
    },100);

}
function updateWidthA(){
    var currentSlidesA = document.querySelectorAll('#item_list_1 .list_mold li');
    var newSlideCountA = currentSlidesA.length;   // 슬라이드 갯수
    // slides {transform:translateX(-2136px);}  >> 249+18*8=2136
    var newWidthA = (slideWidthA + slideMarginA) * newSlideCountA - slideMarginA + 'px';
    // 슬라이드 전체 넓이 last margin - right는 제외
    slidesA.style.width = newWidthA;
}
function setInitialPosA(){   // 왼쪽버튼 클릭시 보이는 클론들
    var initialTranslateValueA = - (slideWidthA + slideMarginA) * slideCountA;
    slidesA.style.transform = 'translateX('+ initialTranslateValueA +'px)';
}

prevBtnA.addEventListener('click',function(){
    moveSlideA(currentIdxA + 1);
});

nextBtnA.addEventListener('click',function(){
    moveSlideA(currentIdxA - 1);
});

function moveSlideA(numA){
    slidesA.style.left = - numA * (slideWidthA + slideMarginA) + 'px';
    currentIdxA = numA;
    console.log(currentIdxA, slideCountA);

    if(currentIdxA == slideCountA || currentIdxA == -slideCountA){

        setTimeout(function(){
            slidesA.classList.remove('aniA');
            slidesA.style.left ='0px';
            currentIdxA = 0;
        }, 500);
        setTimeout(function(){
            slidesA.classList.add('aniA');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #item_list_4

/*var slidesB = document.querySelector('#item_list_4 .list_mold'),
    slideB = document.querySelectorAll('#item_list_4 .list_mold li'),
    currentIdxB = 0,
    slideCountB = slideB.length,
    slideWidthB = 249,
    slideMarginB = 18,
    prevBtnB = document.querySelector('#item_list_4 .btn_prev'),
    nextBtnB = document.querySelector('#item_list_4 .btn_next');

makeCloneB();

function makeCloneB() {
    for(var i = 0; i < slideCountB; i++){
        var cloneSlideB = slideB[i].cloneNode(true);
        cloneSlideB.classList.add('cloneB');
        slidesB.appendChild(cloneSlideB);
    }
    for(var i = slideCountB -1; i>=0; i--){
        var cloneSlideB = slideB[i].cloneNode(true);
        cloneSlideB.classList.add('cloneB');
        slidesB.prepend(cloneSlideB);
    }
    updateWidthB();
    setInitialPosB();

    setTimeout(function(){
        slidesB.classList.add('aniB');
    },100);

}
function updateWidthB(){
    var currentSlidesB = document.querySelectorAll('#item_list_4 .list_mold li');
    var newSlideCountB = currentSlidesB.length;
    var newWidthB = (slideWidthB + slideMarginB) * newSlideCountB - slideMarginB + 'px';
    slidesB.style.width = newWidthB;
}
function setInitialPosB(){
    var initialTranslateValueB = - (slideWidthB + slideMarginB) * slideCountB;
    slidesB.style.transform = 'translateX('+ initialTranslateValueB +'px)';
}

prevBtnB.addEventListener('click',function(){
    moveSlideB(currentIdxB + 1);
});

nextBtnB.addEventListener('click',function(){
    moveSlideB(currentIdxB - 1);
});

function moveSlideB(numB){
    slidesB.style.left = - numB * (slideWidthB + slideMarginB) + 'px';
    currentIdxB = numB;
    console.log(currentIdxB, slideCountB);

    if(currentIdxB == slideCountB || currentIdxB == -slideCountB){

        setTimeout(function(){
            slidesB.classList.remove('aniB');
            slidesB.style.left ='0px';
            currentIdxB = 0;
        }, 500);
        setTimeout(function(){
            slidesB.classList.add('aniB');
        }, 600);

    }
}*/


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #item_list_5

var slidesC = document.querySelector('#item_list_5 .list_mold'),
    slideC = document.querySelectorAll('#item_list_5 .list_mold li'),
    currentIdxC = 0,
    slideCountC = slideC.length,
    slideWidthC = 249,
    slideMarginC = 18,
    prevBtnC = document.querySelector('#item_list_5 .btn_prev'),
    nextBtnC = document.querySelector('#item_list_5 .btn_next');

makeCloneC();

function makeCloneC() {
    for(var i = 0; i < slideCountC; i++){
        var cloneSlideC = slideC[i].cloneNode(true);
        cloneSlideC.classList.add('cloneC');
        slidesC.appendChild(cloneSlideC);
    }
    for(var i = slideCountC -1; i>=0; i--){
        var cloneSlideC = slideC[i].cloneNode(true);
        cloneSlideC.classList.add('cloneC');
        slidesC.prepend(cloneSlideC);
    }
    updateWidthC();
    setInitialPosC();

    setTimeout(function(){
        slidesC.classList.add('aniC');
    },100);

}
function updateWidthC(){
    var currentSlidesC = document.querySelectorAll('#item_list_5 .list_mold li');
    var newSlideCountC = currentSlidesC.length;
    var newWidthC = (slideWidthC + slideMarginC) * newSlideCountC - slideMarginC + 'px';
    slidesC.style.width = newWidthC;
}
function setInitialPosC(){
    var initialTranslateValueC = - (slideWidthC + slideMarginC) * slideCountC;
    slidesC.style.transform = 'translateX('+ initialTranslateValueC +'px)';
}

prevBtnC.addEventListener('click',function(){
    moveSlideC(currentIdxC + 1);
});

nextBtnC.addEventListener('click',function(){
    moveSlideC(currentIdxC - 1);
});

function moveSlideC(numC){
    slidesC.style.left = - numC * (slideWidthC + slideMarginC) + 'px';
    currentIdxC = numC;
    console.log(currentIdxC, slideCountC);

    if(currentIdxC == slideCountC || currentIdxC == -slideCountC){

        setTimeout(function(){
            slidesC.classList.remove('aniC');
            slidesC.style.left ='0px';
            currentIdxC = 0;
        }, 500);
        setTimeout(function(){
            slidesC.classList.add('aniC');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #item_list_6

var slidesD = document.querySelector('#item_list_6 .list_mold'),
    slideD = document.querySelectorAll('#item_list_6 .list_mold li'),
    currentIdxD = 0,
    slideCountD = slideD.length,
    slideWidthD = 249,
    slideMarginD = 18,
    prevBtnD = document.querySelector('#item_list_6 .btn_prev'),
    nextBtnD = document.querySelector('#item_list_6 .btn_next');

makeCloneD();

function makeCloneD() {
    for(var i = 0; i < slideCountD; i++){
        var cloneSlideD = slideD[i].cloneNode(true);
        cloneSlideD.classList.add('cloneD');
        slidesD.appendChild(cloneSlideD);
    }
    for(var i = slideCountD -1; i>=0; i--){
        var cloneSlideD = slideD[i].cloneNode(true);
        cloneSlideD.classList.add('clone_D');
        slidesD.prepend(cloneSlideD);
    }
    updateWidthD();
    setInitialPosD();

    setTimeout(function(){
        slidesD.classList.add('aniD');
    },100);

}
function updateWidthD(){
    var currentSlidesD = document.querySelectorAll('#item_list_6 .list_mold li');
    var newSlideCountD = currentSlidesD.length;
    var newWidthD = (slideWidthD + slideMarginD) * newSlideCountD - slideMarginD + 'px';
    slidesD.style.width = newWidthD;
}
function setInitialPosD(){
    var initialTranslateValueD = - (slideWidthD + slideMarginD) * slideCountD;
    slidesD.style.transform = 'translateX('+ initialTranslateValueD +'px)';
}

prevBtnD.addEventListener('click',function(){
    moveSlideD(currentIdxD + 1);
});

nextBtnD.addEventListener('click',function(){
    moveSlideD(currentIdxD - 1);
});

function moveSlideD(numD){
    slidesD.style.left = - numD * (slideWidthD + slideMarginD) + 'px';
    currentIdxD = numD;
    console.log(currentIdxD, slideCountD);

    if(currentIdxD == slideCountD || currentIdxD == -slideCountD){

        setTimeout(function(){
            slidesD.classList.remove('aniD');
            slidesD.style.left ='0px';
            currentIdxD = 0;
        }, 500);
        setTimeout(function(){
            slidesD.classList.add('aniD');
        }, 600);

    }
}



/* ---------------------------------------------------------------------------- */
// 메인배너 슬라이드 index.html > #main_sec_slider

document.body.onload = initSlider;

function initSlider(){
    //변수 지정
    const sliderContainer = document.getElementById('main_slider');
    const paginationContainer = document.createElement('div');

    //페이지네이션 생성
    paginationContainer.className = 'main_bnr_pagination';
    sliderContainer.prepend(paginationContainer);

    //슬라이드 개수 파악
    const slideCount = document.querySelectorAll('.sec_bnr_slide').length;

    for(let i = slideCount; i> 0; i--){
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radio';
        radioBtn.className = 'slide-radio';
        radioBtn.id = `slide-radio-${i}`;

        if(i === 1) radioBtn.checked = true;

        sliderContainer.prepend(radioBtn);

        //label  생성하기
        let label = document.createElement('label');
        label.setAttribute('for',  `slide-radio-${i}`);
        //label.innerHTML = i;

        paginationContainer.prepend(label);
    }

    //자동 슬라이드
    let autoRun = setInterval(changeSlide, 5000);

    paginationContainer.addEventListener('mouseenter', () => clearTimeout(autoRun));

    paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));

}

function changeSlide(){
    // radio 버튼 지정
    const radioButtons = [...document.querySelectorAll('.slide-radio')];

    const currentIndex = radioButtons.findIndex(rb => rb.checked);

    //라디오 버튼 체크하기
    radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
}


/* ---------------------------------------------------------------------------- */
// 필터 아이템리스트
//
// let filterToggle = false;
// function filterBtn(){
//     if(filterToggle){
//         filterToggle = false;
//         document.getElementById("filter_box").style.display = "block";
//         return;
//     }
//     if(!filterToggle){
//         filterToggle = true;
//         document.getElementById("filter_box").style.display = "none";
//         return;
//     }
// }

/* ---------------------------------------------------------------------------- */
// index.html > 전체상품 비동기 아이템슬라이드

const categoryList = document.querySelectorAll('.category_menu');
const totalItemSlider = document.querySelectorAll('.total_item_btn');
for(let i=0; i<categoryList.length; i++){
    categoryList[0].style.background='#0db081';
    totalItemSlider[0].style.display='block';
    categoryList[i].addEventListener('click', function(){
        this.style.background='#0db081';
        this.style.color="#fff";
        totalItemSlider[i].style.display='block';
        for(let j=0; j<categoryList.length; j++){
            if(categoryList[i]!=categoryList[j]){
                categoryList[j].style.background='#f7f7f7';
                categoryList[j].style.color="#000";
                totalItemSlider[j].style.display='none';
            }
        }
    });
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #fruit_list

var slidesT = document.querySelector('#fruit_list .list_mold'),
    slideT = document.querySelectorAll('#fruit_list .list_mold li'),
    currentIdxT = 0,
    slideCountT = slideT.length,
    slideWidthT = 249,
    slideMarginT = 18,
    prevBtnT = document.querySelector('#fruit_list .btn_prev'),
    nextBtnT = document.querySelector('#fruit_list .btn_next');

makeCloneT();

function makeCloneT() {
    for(var i = 0; i < slideCountT; i++){
        var cloneSlideT = slideT[i].cloneNode(true);
        cloneSlideT.classList.add('cloneT');
        slidesT.appendChild(cloneSlideT);
    }
    for(var i = slideCountT -1; i>=0; i--){
        var cloneSlideT = slideT[i].cloneNode(true);
        cloneSlideT.classList.add('cloneT');
        slidesT.prepend(cloneSlideT);
    }
    updateWidthT();
    setInitialPosT();

    setTimeout(function(){
        slidesT.classList.add('aniT');
    },100);

}
function updateWidthT(){
    var currentSlidesT = document.querySelectorAll('#fruit_list .list_mold li');
    var newSlideCountT = currentSlidesT.length;
    var newWidthT = (slideWidthT + slideMarginT) * newSlideCountT - slideMarginT + 'px';
    slidesT.style.width = newWidthT;
}
function setInitialPosT(){
    var initialTranslateValueT = - (slideWidthT + slideMarginT) * slideCountT;
    slidesT.style.transform = 'translateX('+ initialTranslateValueT +'px)';
}

prevBtnT.addEventListener('click',function(){
    moveSlideT(currentIdxT + 1);
});

nextBtnT.addEventListener('click',function(){
    moveSlideT(currentIdxT - 1);
});

function moveSlideT(numT){
    slidesT.style.left = - numT * (slideWidthT + slideMarginT) + 'px';
    currentIdxT = numT;
    console.log(currentIdxT, slideCountT);

    if(currentIdxT == slideCountT || currentIdxT == -slideCountT){

        setTimeout(function(){
            slidesT.classList.remove('aniT');
            slidesT.style.left ='0px';
            currentIdxT = 0;
        }, 500);
        setTimeout(function(){
            slidesT.classList.add('aniT');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #veggie_list

var slidesV = document.querySelector('#veggie_list .list_mold'),
    slideV = document.querySelectorAll('#veggie_list .list_mold li'),
    currentIdxV = 0,
    slideCountV = slideV.length,
    slideWidthV = 249,
    slideMarginV = 18,
    prevBtnV = document.querySelector('#veggie_list .btn_prev'),
    nextBtnV = document.querySelector('#veggie_list .btn_next');

makeCloneV();

function makeCloneV() {
    for(var i = 0; i < slideCountV; i++){
        var cloneSlideV = slideV[i].cloneNode(true);
        cloneSlideV.classList.add('cloneV');
        slidesV.appendChild(cloneSlideV);
    }
    for(var i = slideCountV -1; i>=0; i--){
        var cloneSlideV = slideV[i].cloneNode(true);
        cloneSlideV.classList.add('cloneV');
        slidesV.prepend(cloneSlideV);
    }
    updateWidthV();
    setInitialPosV();

    setTimeout(function(){
        slidesV.classList.add('aniV');
    },100);

}
function updateWidthV(){
    var currentSlidesV = document.querySelectorAll('#veggie_list .list_mold li');
    var newSlideCountV = currentSlidesV.length;
    var newWidthV = (slideWidthV + slideMarginV) * newSlideCountV - slideMarginV + 'px';
    slidesV.style.width = newWidthV;
}
function setInitialPosV(){
    var initialTranslateValueV = - (slideWidthV + slideMarginV) * slideCountV;
    slidesV.style.transform = 'translateX('+ initialTranslateValueV +'px)';
}

prevBtnV.addEventListener('click',function(){
    moveSlideV(currentIdxV + 1);
});

nextBtnV.addEventListener('click',function(){
    moveSlideV(currentIdxV - 1);
});

function moveSlideV(numV){
    slidesV.style.left = - numV * (slideWidthV + slideMarginV) + 'px';
    currentIdxV = numV;
    console.log(currentIdxV, slideCountV);

    if(currentIdxV == slideCountV || currentIdxV == -slideCountV){

        setTimeout(function(){
            slidesV.classList.remove('aniV');
            slidesV.style.left ='0px';
            currentIdxV = 0;
        }, 500);
        setTimeout(function(){
            slidesV.classList.add('aniV');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #rice_list

var slidesR = document.querySelector('#rice_list .list_mold'),
    slideR = document.querySelectorAll('#rice_list .list_mold li'),
    currentIdxR = 0,
    slideCountR = slideR.length,
    slideWidthR = 249,
    slideMarginR = 18,
    prevBtnR = document.querySelector('#rice_list .btn_prev'),
    nextBtnR = document.querySelector('#rice_list .btn_next');

makeCloneR();

function makeCloneR() {
    for(var i = 0; i < slideCountR; i++){
        var cloneSlideR = slideR[i].cloneNode(true);
        cloneSlideR.classList.add('cloneR');
        slidesR.appendChild(cloneSlideR);
    }
    for(var i = slideCountR -1; i>=0; i--){
        var cloneSlideR = slideR[i].cloneNode(true);
        cloneSlideR.classList.add('cloneR');
        slidesR.prepend(cloneSlideR);
    }
    updateWidthR();
    setInitialPosR();

    setTimeout(function(){
        slidesR.classList.add('aniR');
    },100);

}
function updateWidthR(){
    var currentSlidesR = document.querySelectorAll('#rice_list .list_mold li');
    var newSlideCountR = currentSlidesR.length;
    var newWidthR = (slideWidthR + slideMarginR) * newSlideCountR - slideMarginR + 'px';
    slidesR.style.width = newWidthR;
}
function setInitialPosR(){
    var initialTranslateValueR = - (slideWidthR + slideMarginR) * slideCountR;
    slidesR.style.transform = 'translateX('+ initialTranslateValueR +'px)';
}

prevBtnR.addEventListener('click',function(){
    moveSlideR(currentIdxR + 1);
});

nextBtnR.addEventListener('click',function(){
    moveSlideR(currentIdxR - 1);
});

function moveSlideR(numR){
    slidesR.style.left = - numR * (slideWidthR + slideMarginR) + 'px';
    currentIdxR = numR;
    console.log(currentIdxR, slideCountR);

    if(currentIdxR == slideCountR || currentIdxR == -slideCountR){

        setTimeout(function(){
            slidesR.classList.remove('aniR');
            slidesR.style.left ='0px';
            currentIdxR = 0;
        }, 500);
        setTimeout(function(){
            slidesR.classList.add('aniR');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #meat_list

var slidesM = document.querySelector('#meat_list .list_mold'),
    slideM = document.querySelectorAll('#meat_list .list_mold li'),
    currentIdxM = 0,
    slideCountM = slideM.length,
    slideWidthM = 249,
    slideMarginM = 18,
    prevBtnM = document.querySelector('#meat_list .btn_prev'),
    nextBtnM = document.querySelector('#meat_list .btn_next');

makeCloneM();

function makeCloneM() {
    for(var i = 0; i < slideCountM; i++){
        var cloneSlideM = slideM[i].cloneNode(true);
        cloneSlideM.classList.add('cloneM');
        slidesM.appendChild(cloneSlideM);
    }
    for(var i = slideCountM -1; i>=0; i--){
        var cloneSlideM = slideM[i].cloneNode(true);
        cloneSlideM.classList.add('cloneM');
        slidesM.prepend(cloneSlideM);
    }
    updateWidthM();
    setInitialPosM();

    setTimeout(function(){
        slidesM.classList.add('aniM');
    },100);

}
function updateWidthM(){
    var currentSlidesM = document.querySelectorAll('#meat_list .list_mold li');
    var newSlideCountM = currentSlidesM.length;
    var newWidthM = (slideWidthM + slideMarginM) * newSlideCountM - slideMarginM + 'px';
    slidesM.style.width = newWidthM;
}
function setInitialPosM(){
    var initialTranslateValueM = - (slideWidthM + slideMarginM) * slideCountM;
    slidesM.style.transform = 'translateX('+ initialTranslateValueM +'px)';
}

prevBtnM.addEventListener('click',function(){
    moveSlideM(currentIdxM + 1);
});

nextBtnM.addEventListener('click',function(){
    moveSlideM(currentIdxM - 1);
});

function moveSlideM(numM){
    slidesM.style.left = - numM * (slideWidthM + slideMarginM) + 'px';
    currentIdxM = numM;
    console.log(currentIdxM, slideCountM);

    if(currentIdxM == slideCountM || currentIdxM == -slideCountM){

        setTimeout(function(){
            slidesM.classList.remove('aniM');
            slidesM.style.left ='0px';
            currentIdxM = 0;
        }, 500);
        setTimeout(function(){
            slidesM.classList.add('aniM');
        }, 600);

    }
}

/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #meat_list

var slidesF = document.querySelector('#fish_list .list_mold'),
    slideF = document.querySelectorAll('#fish_list .list_mold li'),
    currentIdxF = 0,
    slideCountF = slideF.length,
    slideWidthF = 249,
    slideMarginF = 18,
    prevBtnF = document.querySelector('#fish_list .btn_prev'),
    nextBtnF = document.querySelector('#fish_list .btn_next');

makeCloneF();

function makeCloneF() {
    for(var i = 0; i < slideCountF; i++){
        var cloneSlideF = slideF[i].cloneNode(true);
        cloneSlideF.classList.add('cloneF');
        slidesF.appendChild(cloneSlideF);
    }
    for(var i = slideCountF -1; i>=0; i--){
        var cloneSlideF = slideF[i].cloneNode(true);
        cloneSlideF.classList.add('cloneF');
        slidesF.prepend(cloneSlideF);
    }
    updateWidthF();
    setInitialPosF();

    setTimeout(function(){
        slidesF.classList.add('aniF');
    },100);

}
function updateWidthF(){
    var currentSlidesF = document.querySelectorAll('#fish_list .list_mold li');
    var newSlideCountF = currentSlidesF.length;
    var newWidthF = (slideWidthF + slideMarginF) * newSlideCountF - slideMarginF + 'px';
    slidesF.style.width = newWidthF;
}
function setInitialPosF(){
    var initialTranslateValueF = - (slideWidthF + slideMarginF) * slideCountF;
    slidesF.style.transform = 'translateX('+ initialTranslateValueF +'px)';
}

prevBtnF.addEventListener('click',function(){
    moveSlideF(currentIdxF + 1);
});

nextBtnF.addEventListener('click',function(){
    moveSlideF(currentIdxF - 1);
});

function moveSlideF(numF){
    slidesF.style.left = - numF * (slideWidthF + slideMarginF) + 'px';
    currentIdxF = numF;
    console.log(currentIdxF, slideCountF);

    if(currentIdxF == slideCountF || currentIdxF == -slideCountF){

        setTimeout(function(){
            slidesF.classList.remove('aniF');
            slidesF.style.left ='0px';
            currentIdxF = 0;
        }, 500);
        setTimeout(function(){
            slidesF.classList.add('aniF');
        }, 600);

    }
}

/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #soup_list

var slidesS = document.querySelector('#soup_list .list_mold'),
    slideS = document.querySelectorAll('#soup_list .list_mold li'),
    currentIdxS = 0,
    slideCountS = slideS.length,
    slideWidthS = 249,
    slideMarginS = 18,
    prevBtnS = document.querySelector('#soup_list .btn_prev'),
    nextBtnS = document.querySelector('#soup_list .btn_next');

makeCloneS();

function makeCloneS() {
    for(var i = 0; i < slideCountS; i++){
        var cloneSlideS = slideS[i].cloneNode(true);
        cloneSlideS.classList.add('cloneS');
        slidesS.appendChild(cloneSlideS);
    }
    for(var i = slideCountS -1; i>=0; i--){
        var cloneSlideS = slideS[i].cloneNode(true);
        cloneSlideS.classList.add('cloneS');
        slidesS.prepend(cloneSlideS);
    }
    updateWidthS();
    setInitialPosS();

    setTimeout(function(){
        slidesS.classList.add('aniS');
    },100);

}
function updateWidthS(){
    var currentSlidesS = document.querySelectorAll('#soup_list .list_mold li');
    var newSlideCountS = currentSlidesS.length;
    var newWidthS = (slideWidthS + slideMarginS) * newSlideCountS - slideMarginS + 'px';
    slidesS.style.width = newWidthS;
}
function setInitialPosS(){
    var initialTranslateValueS = - (slideWidthS + slideMarginS) * slideCountS;
    slidesS.style.transform = 'translateX('+ initialTranslateValueS +'px)';
}

prevBtnS.addEventListener('click',function(){
    moveSlideS(currentIdxS + 1);
});

nextBtnS.addEventListener('click',function(){
    moveSlideS(currentIdxS - 1);
});

function moveSlideS(numS){
    slidesS.style.left = - numS * (slideWidthS + slideMarginS) + 'px';
    currentIdxS = numS;
    console.log(currentIdxS, slideCountS);

    if(currentIdxS == slideCountS || currentIdxS == -slideCountS){

        setTimeout(function(){
            slidesS.classList.remove('aniS');
            slidesS.style.left ='0px';
            currentIdxS = 0;
        }, 500);
        setTimeout(function(){
            slidesS.classList.add('aniS');
        }, 600);

    }
}

/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #salad_list

var slidesL = document.querySelector('#salad_list .list_mold'),
    slideL = document.querySelectorAll('#salad_list .list_mold li'),
    currentIdxL = 0,
    slideCountL = slideL.length,
    slideWidthL = 249,
    slideMarginL = 18,
    prevBtnL = document.querySelector('#salad_list .btn_prev'),
    nextBtnL = document.querySelector('#salad_list .btn_next');

makeCloneL();

function makeCloneL() {
    for(var i = 0; i < slideCountL; i++){
        var cloneSlideL = slideL[i].cloneNode(true);
        cloneSlideL.classList.add('cloneL');
        slidesL.appendChild(cloneSlideL);
    }
    for(var i = slideCountL -1; i>=0; i--){
        var cloneSlideL = slideL[i].cloneNode(true);
        cloneSlideL.classList.add('cloneL');
        slidesL.prepend(cloneSlideL);
    }
    updateWidthL();
    setInitialPosL();

    setTimeout(function(){
        slidesL.classList.add('aniL');
    },100);

}
function updateWidthL(){
    var currentSlidesL = document.querySelectorAll('#salad_list .list_mold li');
    var newSlideCountL = currentSlidesL.length;
    var newWidthL = (slideWidthL + slideMarginL) * newSlideCountL - slideMarginL + 'px';
    slidesL.style.width = newWidthL;
}
function setInitialPosL(){
    var initialTranslateValueL = - (slideWidthL + slideMarginL) * slideCountL;
    slidesL.style.transform = 'translateX('+ initialTranslateValueL +'px)';
}

prevBtnL.addEventListener('click',function(){
    moveSlideL(currentIdxL + 1);
});

nextBtnL.addEventListener('click',function(){
    moveSlideL(currentIdxL - 1);
});

function moveSlideL(numL){
    slidesL.style.left = - numL * (slideWidthL + slideMarginL) + 'px';
    currentIdxL = numL;
    console.log(currentIdxL, slideCountL);

    if(currentIdxL == slideCountL || currentIdxL == -slideCountL){

        setTimeout(function(){
            slidesL.classList.remove('aniL');
            slidesL.style.left ='0px';
            currentIdxL = 0;
        }, 500);
        setTimeout(function(){
            slidesL.classList.add('aniL');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #sauce_list

var slidesU = document.querySelector('#sauce_list .list_mold'),
    slideU = document.querySelectorAll('#sauce_list .list_mold li'),
    currentIdxU = 0,
    slideCountU = slideU.length,
    slideWidthU = 249,
    slideMarginU = 18,
    prevBtnU = document.querySelector('#sauce_list .btn_prev'),
    nextBtnU = document.querySelector('#sauce_list .btn_next');

makeCloneU();

function makeCloneU() {
    for(var i = 0; i < slideCountU; i++){
        var cloneSlideU = slideU[i].cloneNode(true);
        cloneSlideU.classList.add('cloneU');
        slidesU.appendChild(cloneSlideU);
    }
    for(var i = slideCountU -1; i>=0; i--){
        var cloneSlideU = slideU[i].cloneNode(true);
        cloneSlideU.classList.add('cloneU');
        slidesU.prepend(cloneSlideU);
    }
    updateWidthU();
    setInitialPosU();

    setTimeout(function(){
        slidesU.classList.add('aniU');
    },100);

}
function updateWidthU(){
    var currentSlidesU = document.querySelectorAll('#sauce_list .list_mold li');
    var newSlideCountU = currentSlidesU.length;
    var newWidthU = (slideWidthU + slideMarginU) * newSlideCountU - slideMarginU + 'px';
    slidesU.style.width = newWidthU;
}
function setInitialPosU(){
    var initialTranslateValueU = - (slideWidthU + slideMarginU) * slideCountU;
    slidesU.style.transform = 'translateX('+ initialTranslateValueU +'px)';
}

prevBtnU.addEventListener('click',function(){
    moveSlideU(currentIdxU + 1);
});

nextBtnU.addEventListener('click',function(){
    moveSlideU(currentIdxU - 1);
});

function moveSlideU(numU){
    slidesU.style.left = - numU * (slideWidthU + slideMarginU) + 'px';
    currentIdxU = numU;
    console.log(currentIdxU, slideCountU);

    if(currentIdxU == slideCountU || currentIdxU == -slideCountU){

        setTimeout(function(){
            slidesU.classList.remove('aniU');
            slidesU.style.left ='0px';
            currentIdxU = 0;
        }, 500);
        setTimeout(function(){
            slidesU.classList.add('aniU');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #bread_list

var slidesE = document.querySelector('#bread_list .list_mold'),
    slideE = document.querySelectorAll('#bread_list .list_mold li'),
    currentIdxE = 0,
    slideCountE = slideE.length,
    slideWidthE = 249,
    slideMarginE = 18,
    prevBtnE = document.querySelector('#bread_list .btn_prev'),
    nextBtnE = document.querySelector('#bread_list .btn_next');

makeCloneE();

function makeCloneE() {
    for(var i = 0; i < slideCountE; i++){
        var cloneSlideE = slideE[i].cloneNode(true);
        cloneSlideE.classList.add('cloneE');
        slidesE.appendChild(cloneSlideE);
    }
    for(var i = slideCountE -1; i>=0; i--){
        var cloneSlideE = slideE[i].cloneNode(true);
        cloneSlideE.classList.add('cloneE');
        slidesE.prepend(cloneSlideE);
    }
    updateWidthE();
    setInitialPosE();

    setTimeout(function(){
        slidesE.classList.add('aniE');
    },100);

}
function updateWidthE(){
    var currentSlidesE = document.querySelectorAll('#bread_list .list_mold li');
    var newSlideCountE = currentSlidesE.length;
    var newWidthE = (slideWidthE + slideMarginE) * newSlideCountE - slideMarginE + 'px';
    slidesE.style.width = newWidthE;
}
function setInitialPosE(){
    var initialTranslateValueE = - (slideWidthE + slideMarginE) * slideCountE;
    slidesE.style.transform = 'translateX('+ initialTranslateValueE +'px)';
}

prevBtnE.addEventListener('click',function(){
    moveSlideE(currentIdxE + 1);
});

nextBtnE.addEventListener('click',function(){
    moveSlideE(currentIdxE - 1);
});

function moveSlideE(numE){
    slidesE.style.left = - numE * (slideWidthE + slideMarginE) + 'px';
    currentIdxE = numE;
    console.log(currentIdxE, slideCountE);

    if(currentIdxE == slideCountE || currentIdxE == -slideCountE){

        setTimeout(function(){
            slidesE.classList.remove('aniE');
            slidesE.style.left ='0px';
            currentIdxE = 0;
        }, 500);
        setTimeout(function(){
            slidesE.classList.add('aniE');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #present_list

var slidesI = document.querySelector('#drink_list .list_mold'),
    slideI = document.querySelectorAll('#drink_list .list_mold li'),
    currentIdxI = 0,
    slideCountI = slideI.length,
    slideWidthI = 249,
    slideMarginI = 18,
    prevBtnI = document.querySelector('#drink_list .btn_prev'),
    nextBtnI = document.querySelector('#drink_list .btn_next');

makeCloneI();

function makeCloneI() {
    for(var i = 0; i < slideCountI; i++){
        var cloneSlideI = slideI[i].cloneNode(true);
        cloneSlideI.classList.add('cloneI');
        slidesI.appendChild(cloneSlideI);
    }
    for(var i = slideCountI -1; i>=0; i--){
        var cloneSlideI = slideI[i].cloneNode(true);
        cloneSlideI.classList.add('cloneI');
        slidesI.prepend(cloneSlideI);
    }
    updateWidthI();
    setInitialPosI();

    setTimeout(function(){
        slidesI.classList.add('aniI');
    },100);

}
function updateWidthI(){
    var currentSlidesI = document.querySelectorAll('#drink_list .list_mold li');
    var newSlideCountI = currentSlidesI.length;
    var newWidthI = (slideWidthI + slideMarginI) * newSlideCountI - slideMarginI + 'px';
    slidesI.style.width = newWidthI;
}
function setInitialPosI(){
    var initialTranslateValueI = - (slideWidthI + slideMarginI) * slideCountI;
    slidesI.style.transform = 'translateX('+ initialTranslateValueI +'px)';
}

prevBtnI.addEventListener('click',function(){
    moveSlideI(currentIdxI + 1);
});

nextBtnI.addEventListener('click',function(){
    moveSlideI(currentIdxI - 1);
});

function moveSlideI(numI){
    slidesI.style.left = - numI * (slideWidthI + slideMarginI) + 'px';
    currentIdxI = numI;
    console.log(currentIdxI, slideCountI);

    if(currentIdxI == slideCountI || currentIdxI == -slideCountI){

        setTimeout(function(){
            slidesI.classList.remove('aniI');
            slidesI.style.left ='0px';
            currentIdxI = 0;
        }, 500);
        setTimeout(function(){
            slidesI.classList.add('aniI');
        }, 600);

    }
}


/* ---------------------------------------------------------------------------- */
// 아이템 4단 배열 슬라이드 index.html > #present_list

var slidesP = document.querySelector('#present_list .list_mold'),
    slideP = document.querySelectorAll('#present_list .list_mold li'),
    currentIdxP = 0,
    slideCountP = slideP.length,
    slideWidthP = 249,
    slideMarginP = 18,
    prevBtnP = document.querySelector('#present_list .btn_prev'),
    nextBtnP = document.querySelector('#present_list .btn_next');

makeCloneP();

function makeCloneP() {
    for(var i = 0; i < slideCountP; i++){
        var cloneSlideP = slideP[i].cloneNode(true);
        cloneSlideP.classList.add('cloneP');
        slidesP.appendChild(cloneSlideP);
    }
    for(var i = slideCountP -1; i>=0; i--){
        var cloneSlideP = slideP[i].cloneNode(true);
        cloneSlideP.classList.add('cloneP');
        slidesP.prepend(cloneSlideP);
    }
    updateWidthP();
    setInitialPosP();

    setTimeout(function(){
        slidesP.classList.add('aniP');
    },100);

}
function updateWidthP(){
    var currentSlidesP = document.querySelectorAll('#present_list .list_mold li');
    var newSlideCountP = currentSlidesP.length;
    var newWidthP = (slideWidthP + slideMarginP) * newSlideCountP - slideMarginP + 'px';
    slidesP.style.width = newWidthP;
}
function setInitialPosP(){
    var initialTranslateValueP = - (slideWidthP + slideMarginP) * slideCountP;
    slidesP.style.transform = 'translateX('+ initialTranslateValueP +'px)';
}

prevBtnP.addEventListener('click',function(){
    moveSlideP(currentIdxP + 1);
});

nextBtnP.addEventListener('click',function(){
    moveSlideP(currentIdxP - 1);
});

function moveSlideP(numP){
    slidesP.style.left = - numP * (slideWidthP + slideMarginP) + 'px';
    currentIdxP = numP;
    console.log(currentIdxP, slideCountP);

    if(currentIdxP == slideCountP || currentIdxP == -slideCountP){

        setTimeout(function(){
            slidesP.classList.remove('aniP');
            slidesP.style.left ='0px';
            currentIdxP = 0;
        }, 500);
        setTimeout(function(){
            slidesP.classList.add('aniP');
        }, 600);

    }
}

/* ---------------------------------------------------------------------------- */
// list - filter > 리스트 필터

function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("filter");

    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}
