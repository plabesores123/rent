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
    }
    
    function BlogsGetStartedLink() {
        // Select all links with href starting with "/get-started/" within .blog-content
        var $links = $(".blog-content a[href^='/get-started/']");
        
        // Check if any such links exist
        if ($links.length > 0) {
            // Add the "cta-blog-post" class to these links
            $links.addClass("cta-blog-post");
    
            // Replace the href attribute with "#"
            $links.attr("href", "#");
    
            // Set up the click handler
            $(".cta-blog-post").click(function(event) {
                event.preventDefault(); // Prevent the default action
                event.stopPropagation(); // Stop the event from propagating to the body
    
                // Check if the slider element exists
                var $slider = $(".get-started-form-slider");
                if ($slider.length > 0) {
                    $slider.css({
                        "display": "block",
                        "transform": "translate3d(0px, 0px, 0px)",
                        "opacity": "1",
                        "transition": "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                    }).fadeIn('fast');
                }
            });
        }
    }

    function GetStartedClose() {
        $('body').click(function(event) {
            // Check if the click is outside the slider and not on exceptions
            if (!$(event.target).closest('.get-started-form-slider').length &&
                !$(event.target).is('.get-started-form-slider') &&
                !$(event.target).closest('.close-wrapper').length &&
                !$(event.target).is('a') &&  // exception for all <a> tags
                !$(event.target).closest('.lp-cta').length) {  // exception for .lp-cta class
                
                $(".get-started-form-slider").css({
                    "transform": "translate3d(101vw, 0px, 0px)",
                    "opacity": "0",
                    "transition": "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                }).one('transitionend', function() {
                    $(this).hide();
                });
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
    function FAQCTA() {
        $( document ).ready(function() {   
            // Component 
            $("p:contains([cta-button-white])").load('https://redfin-group.webflow.io/ [cms-component=cta-button-contact-me]');
            // Last component with function to show the body once all components have been loaded in - make sure this is the last component in this list
            //$("p:contains([cta-2-section])").load('https://rmcn-tutorials.webflow.io/symbols [symbol=contact-me]', function() {
               // $('body').css('display','block');
           // });
        });
    }

    function textCMSDecode() {
        $(document).ready(function () {
           $(".faq-answer").each(function () {
               $(this).html(he.decode($(this).html())); // decode the text
           });
        });
    }
    BlogsGetStartedLink();
    textCMSDecode();
    FAQCTA();
    TeamModalClose();
    //GetStartedClose();
    dumpDups();
    removenbsp();
    //productsGetStarted();
    
    /**$('#ar-no-space').owlCarousel({
        // Your Owl Carousel options here
    }).on('changed.owl.carousel', function(event) {
        var totalDots = event.page.count; // Total number of dots (pages)
        var currentDotIndex = event.page.index; // Index of the active dot
    
        // Check if the second-to-last dot is active
        if (currentDotIndex === totalDots - 2) {
            $('.owl-next').addClass('disabled'); // Disable "Next" button
        } else {
            $('.owl-next').removeClass('disabled'); // Enable "Next" button
        }
    });**/
});
