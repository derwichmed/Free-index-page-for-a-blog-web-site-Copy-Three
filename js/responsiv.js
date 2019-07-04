$(function (){
    isNavbarHidden = true;
    $('.mobile_icon img').click(function (){
        if(isNavbarHidden){
            $('body > header .nav_bar').fadeIn("slow");
            isNavbarHidden = false;
        }
        else{
            $('body > header .nav_bar').fadeOut("slow");
            isNavbarHidden = true;
        }
    });
});
