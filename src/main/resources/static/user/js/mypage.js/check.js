// function clickEevent() {
//   for (let i = 0; i < faqMenu.length; i++) {
//     faqMenu[i].addEventListener("click", faqMenuClick);
//   }
// }

$(() => {
  /* 회원가입 동의 선택 */
  /* 전체선택/해제 */
  let agreeAll = document.querySelector('.regist_check_all_btn');
  let agrees = document.querySelectorAll('.regist_check_btn');
  agreeAll.addEventListener('click', function() {
    if (agreeAll.classList.contains('regist_check_all_btn_checked')) {
      agreeAll.classList.remove('regist_check_all_btn_checked');
      for (let i=0; i<agrees.length; i++) {
        agrees[i].classList.remove('regist_check_btn_checked');
      }
    } else {
      agreeAll.classList.add('regist_check_all_btn_checked');
      for (let i=0; i<agrees.length; i++) {
        agrees[i].classList.add('regist_check_btn_checked');
      }
    }
  });
  /* 개별선택 */
  for (let i = 0; i < agrees.length; i++) {
    agrees[i].addEventListener("click", function() {
      if (agrees[i].classList.contains("regist_check_btn_checked")) {
        agrees[i].classList.remove("regist_check_btn_checked");
      } else {
        agrees[i].classList.add("regist_check_btn_checked");
      }
      if (!agrees[i].classList.contains("regist_check_btn_checked")) {
        agreeAll.classList.remove('regist_check_all_btn_checked');
      }
    });
  }
  /* faq 버튼 */
  let faqMenu = document.querySelectorAll(".faq_menu");
  function faqMenuClick(event) {
    for (let i = 0; i < faqMenu.length; i++) {
      faqMenu[i].classList.remove("faqClicked");
    }
    event.target.classList.add("faqClicked");
  }

  clickEevent();
})






