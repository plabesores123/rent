$(document).ready(function() {
    // Function to get the page name
    function getPageName() {
        return $('title').text().trim(); // Assuming the page name is the document title
    }

    // Function for page 'All resources landing'
    function handleAllResourcesPage() {
        
        $('#remove-nbsp').html(function(i,h){
            return h.replace(/&nbsp;/g,' ');
        });
    }
        
$(".lp-cta").click(function() {
    $(".get-started-form-slider").css({
    "display" : "block",
    "transition" : "transform 0.4s ease-in-out 0s",
    "transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
    });
    $(".get-started-form-slider").fadeTo(300, 1);
});
