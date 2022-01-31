
$(function(){
let input_hidden = document.querySelectorAll('.file_input_hidden_s')
let preview_img = document.querySelectorAll('.file_input_button_s')
for(let i =0; i<preview_img.length; i++){
    function readImage(input) {
            if(input_hidden[i].files && input_hidden[i].files[0]) {
                const reader = new FileReader()
                reader.onload = e => {
                    const previewImage = preview_img[i]
                    previewImage.src = e.target.result}
                reader.readAsDataURL(input.files[0])
            }
        }

        input_hidden[i].addEventListener("change", e => {
        readImage(e.target)
    })
}
})

$(function(){
    $('#Lz_input').change(function(){
        readURL_Lz(this);
    });
});

function readURL_Lz(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#Lz_banner').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#MC_input').change(function(){
        readURL_MC(this);
    });
});

function readURL_MC(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#MC_banner').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#Pcate_input').change(function(){
        readURL_Pcate(this);
    });
});

function readURL_Pcate(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#Pcate_banner').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#MCT_c2_imgbtn').change(function(){
        readURL_MCT(this);
    });
});

function readURL_MCT(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#MCT_c2_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#BCT_input').change(function(){
        readURL_BCT(this);
    });
});

function readURL_BCT(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#BCT_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#BCT_bannerinput').change(function(){
        readURL_BCT_banner(this);
    });
});

function readURL_BCT_banner(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#BCT_banner').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#BCE_input').change(function(){
        readURL_BCE(this);
    });
});

function readURL_BCE(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#BCE_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#BCE_bannerinput').change(function(){
        readURL_BCE_banner(this);
    });
});

function readURL_BCE_banner(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#BCE_banner').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#PS_c1_imgbtn').change(function(){
        readURL_PS(this);
    });
});

function readURL_PS(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#PS_c1_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function(){
    $('#RC_imgbtn').change(function(){
        readURL_RC(this);
    });
});

function readURL_RC(input){
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            $('#RC_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}