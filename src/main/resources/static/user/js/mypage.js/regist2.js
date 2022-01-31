
window.onload = () => {
  function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }
  }

  /* 전체선택/해제 */
  let itemAll = document.querySelector ('.goods_cart_all');
  let items = document.querySelectorAll('.cart_check_btn');
  itemAll.addEventListener("click", function() {
    if (itemAll.classList.contains('goods_cart_all_checked')) {
      itemAll.classList.remove('goods_cart_all_checked');
      for (let i=0; i<items.length; i++) {
        items[i].classList.remove('cart_check_btn_checked');
      }
    } else {
      itemAll.classList.add('goods_cart_all_checked');
      for (let i=0; i<items.length; i++) {
        items[i].classList.add('cart_check_btn_checked');
      }
    }
  });
  /* 개별선택 */
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      if (items[i].classList.contains("cart_check_btn_checked")) {
        items[i].classList.remove("cart_check_btn_checked");
      } else {
        items[i].classList.add("cart_check_btn_checked");
      }
      if (!items[i].classList.contains("cart_check_btn_checked")) {
        itemAll.classList.remove('goods_cart_all_checked');
      }
    });
  }

  let minusBtn = document.querySelectorAll(".minus_btn");
  let plusBtn = document.querySelectorAll(".plus_btn");
  let itemEA = document.querySelectorAll(".item_ea");
  for (let i=0; i<minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', function(e) {
      e.preventDefault();
      let stat = itemEA[i].innerText;
      let num = parseInt(stat, 10);
      num--;
      if (num <= 1) {
        alert('더이상 줄일수 없습니다.');
        num = 1;
      }
      itemEA[i].innerText = num;
    });
  }
  for (let i=0; i<plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', function(e) {
      e.preventDefault();
      let stat = itemEA[i].innerText;
      let num = parseInt(stat, 10);
      num++;
      if (num > 99) {
        alert('더이상 줄일수 없습니다.');
        num = 99;
      }
      itemEA[i].innerText = num;
    });
  }
}

