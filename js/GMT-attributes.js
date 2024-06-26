$(document).ready(function() {
    // Function to get the page name
    function getPageName() {
        return $('title').text().trim(); // Assuming the page name is the document title
    }

    // Function for page 'All resources landing'
    function handleAllResourcesPage() {
        var $carousel = $('.ar-carousel.is-feature');

        if ($carousel.attr('data-ar') === 'blog' && getPageName() === 'All resources landing') {
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
    }

    // Function for another page (example)
    function handleBlogTypePage() {
        var $blogFeature = $('.blog-feature.resource-type-page');

        if ($blogFeature.length > 0 && getPageName() === 'Blog') {
            console.log('Handling Blog Type Page');
    
            var $b_title = $blogFeature.find('._40px-rent-black');
            var $b_date = $blogFeature.find('.date-categories > div:first-child');
            var $b_cat = $blogFeature.find('.date-categories > div:last-child');
            
            // Log to check if selectors are correct
            console.log('$b_title:', $b_title.length);
            console.log('$b_date:', $b_date.length);
            console.log('$b_cat:', $b_cat.length);
    
            // Set attribute for .cta element
            var clickSubTypeValue = $b_title.text().trim() + ' | ' + $b_date.text().trim() + ' | ' + $b_cat.text().trim();
            $(".blog-feature.resource-type-page .cta").attr("data-click_sub_type", clickSubTypeValue);
        }
    }

    // Call each function as needed
    handleAllResourcesPage();
    handleBlogTypePage();
});
