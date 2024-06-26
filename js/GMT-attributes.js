$(document).ready(function() {
    var $carousel = $('.ar-carousel.is-feature');

    // Function to get the page name
    function getPageName() {
        return $('title').text().trim(); // Assuming the page name is the document title
    }

    var pageName = getPageName();

    if ($carousel.attr('data-ar') === 'blog' && pageName === 'All resources landing') {
        var $buttons = $carousel.find('.owl-nav > button');

        if ($buttons.length > 0) {
            // Set attributes for the first button
            $buttons.first().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Left' // Exchange the value to 'Left'
            });

            // Set attributes for the last button
            $buttons.last().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Right' // Exchange the value to 'Right'
            });
        }
    }
});
