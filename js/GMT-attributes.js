$(document).ready(function() {
    var $carousel = $('.ar-carousel.is-feature');

    if ($carousel.attr('data-ar') === 'blog') {
        var $buttons = $carousel.find('.owl-nav > button');
        
        if ($buttons.length > 0) {
            // Set attributes for the first button
            $buttons.first().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Left'
            });
            
            // Set attributes for the last button
            $buttons.last().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Right'
            });
        }
    }
});