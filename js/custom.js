$(document).ready(function() {

    function removenbsp() {
        $('#remove-nbsp').html(function(i,h){
            return h.replace(/&nbsp;/g,' ');
        });
    }
    
    function productsGetStarted() {
        $(".lp-cta").click(function() {
            $(".get-started-form-slider").css({
            "display" : "block",
            "opacity" : "0",
            "transition" : "transform 0.3s ease-in-out .3s",
            "transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            });
            $(".get-started-form-slider").show().fadeIn('fast');
        });
        $("a.is-lp").click(function() {
            $(".get-started-form-slider").css({
            "display" : "block",
            "opacity" : "0",
            "transition" : "transform 0.3s ease-in-out .3s",
            "transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            });
            $(".get-started-form-slider").show().fadeIn('fast');
        });
    }

    function GetStartedClose() {
        $('body').click(function (event) 
        {
           if(!$(event.target).closest('.get-started-form-slider').length && !$(event.target).is('.get-started-form-slider')) {
           
              $(".get-started-form-slider").css({
                  "display" : "none",
                  "opacity" : "0",
                  "transition" : "transform 0.3s ease-in-out .3s",
                  "transform" : "translate3d(101vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              });
               $(".get-started-form-slider").hide().fadeOut('fast');
           }
        });
    }
    function TeamModalClose() {
        $('.t-modal-close').click(function (event) {
            $(".t-modal-overlay").fadOut('fast');
        });
    }
    
    function dumpDups() {
        const rr = new Set();
        $('.filter-component').each(function() {
                const text = $(this).text().trim();
                if (rr.has(text)) {
                    $(this).remove();
                } else {
                    rr.add(text);
                }
        });
    }
    TeamModalClose();
    GetStartedClose();
    dumpDups();
    removenbsp();
    productsGetStarted();
});
