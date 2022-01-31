// UserList
function checkSelectAll()  {
    // 전체 체크박스
    const cbox = document.querySelectorAll('input[name="user"]');
    // 선택된 체크박스
    const checked = document.querySelectorAll('input[name="user"]:checked');
    // select all 체크박스
    const selectAll = document.querySelector('input[name="selectall"]');
    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function selectAll(selectAll)  {
    const cbox = document.getElementsByName('user');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// AddressList
function AL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="addr"]');
    const checked = document.querySelectorAll('input[name="addr"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function AL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('addr');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// BrandList
function BL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="brand"]');
    const checked = document.querySelectorAll('input[name="brand"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function BL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('brand');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// CouponList
function CL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="coupon"]');
    const checked = document.querySelectorAll('input[name="coupon"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function CL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('coupon');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// EventList
function EL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="event"]');
    const checked = document.querySelectorAll('input[name="event"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function EL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('event');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// FAQ
function FAQ_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="faq"]');
    const checked = document.querySelectorAll('input[name="faq"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function FAQ_selectAll(selectAll)  {
    const cbox = document.getElementsByName('faq');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// MagazineList
function ML_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="magazine"]');
    const checked = document.querySelectorAll('input[name="magazine"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function ML_selectAll(selectAll)  {
    const cbox = document.getElementsByName('magazine');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// NoticeList
function No_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="notice"]');
    const checked = document.querySelectorAll('input[name="notice"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function No_selectAll(selectAll)  {
    const cbox = document.getElementsByName('notice');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// OrderList
function OL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="order"]');
    const checked = document.querySelectorAll('input[name="order"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function OL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('order');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// PaymentHistory
function PH_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="pay"]');
    const checked = document.querySelectorAll('input[name="pay"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function PH_selectAll(selectAll)  {
    const cbox = document.getElementsByName('pay');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// ProductList
function PL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="product"]');
    const checked = document.querySelectorAll('input[name="product"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function PL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('product');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// ProductQuestionList
function PQ_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="pquestion"]');
    const checked = document.querySelectorAll('input[name="pquestion"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function PQ_selectAll(selectAll)  {
    const cbox = document.getElementsByName('pquestion');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// QuestionList
function QL_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="question"]');
    const checked = document.querySelectorAll('input[name="question"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function QL_selectAll(selectAll)  {
    const cbox = document.getElementsByName('question');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// ProductReview
function PR_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="review"]');
    const checked = document.querySelectorAll('input[name="review"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function PR_selectAll(selectAll)  {
    const cbox = document.getElementsByName('review');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// MagazineCreate
function MC_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="mc_list"]');
    const checked = document.querySelectorAll('input[name="mc_list"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function MC_selectAll(selectAll)  {
    const cbox = document.getElementsByName('mc_list');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// RecipeCreate
function RC_checkSelectAll() {
    const cbox = document.querySelectorAll('input[name="RC_list"]');
    const checked = document.querySelectorAll('input[name="RC_list"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function RC_selectAll(selectAll)  {
    const cbox = document.getElementsByName('RC_list');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// RecipeCreate
function RC_checkSelectAll2() {
    const cbox = document.querySelectorAll('input[name="RC_list2"]');
    const checked = document.querySelectorAll('input[name="RC_list2"]:checked');
    const selectAll = document.querySelector('input[name="selectall2"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function RC_selectAll2(selectAll)  {
    const cbox = document.getElementsByName('RC_list2');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// MagazineCreate
function MC_checkSelectAll2() {
    const cbox = document.querySelectorAll('input[name="mc_list2"]');
    const checked = document.querySelectorAll('input[name="mc_list2"]:checked');
    const selectAll = document.querySelector('input[name="selectall2"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function MC_selectAll2(selectAll)  {
    const cbox = document.getElementsByName('mc_list2');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

// BrandEdit
function BE_checkSelectAll2() {
    const cbox = document.querySelectorAll('input[name="brand_edit"]');
    const checked = document.querySelectorAll('input[name="brand_edit"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(cbox.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}
function BE_selectAll2(selectAll)  {
    const cbox = document.getElementsByName('brand_edit');

    cbox.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}
