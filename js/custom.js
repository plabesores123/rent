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
            "transition" : "transform 0.3s ease-in-out .3s",
            "transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            });
            $(".get-started-form-slider").fadeTo(300, 1);
        });
    }
    
   // Function to handle the section click event
    function handleSectionClick(event) {
        // Check if the click is outside the form slider
        if ($('.get-started-form-slider').css('display') === 'block' && !$(event.target).closest('.get-started-form-slider').length) {
            console.log("Clicked outside the form slider, triggering close.");
            $(".close-wrapper").click();
        }
    }

    // Attach the click event handler to sections once
    $("section").on('click', handleSectionClick);

    removenbsp();
    productsGetStarted();
    //GetStartedClose();
});
