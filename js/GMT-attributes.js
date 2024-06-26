$(document).ready(function() {
    console.log('External script loaded');
    var $carousel = $('.ar-carousel.is-feature');

    // Function to get the page name
    function getPageName() {
        return $('title').text().trim(); // Assuming the page name is the document title
    }

    var pageName = getPageName();
    console.log('Page Name:', pageName);  // Debugging: Log the page name

    if ($carousel.attr('data-ar') === 'blog' && pageName === 'All resources landing') {
        console.log('Condition met: data-ar attribute is blog and page name is All resources landing');

        var $buttons = $carousel.find('.owl-nav > button');
        console.log('Buttons found:', $buttons.length);  // Debugging: Log the number of buttons found

        if ($buttons.length > 0) {
            // Set attributes for the first button
            $buttons.first().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Left' // Exchange the value to 'Left'
            });
            console.log('Attributes set for the first button');

            // Set attributes for the last button
            $buttons.last().attr({
                'data-tag_section': 'Rent Insights',
                'data-click_type': 'Arrow',
                'data-click_text': 'Right' // Exchange the value to 'Right'
            });
            console.log('Attributes set for the last button');
        } else {
            console.log('No buttons found inside .owl-nav');
        }
    } else {
        console.log('Condition not met: data-ar attribute is not blog or page name is not All resources landing');
    }
});
