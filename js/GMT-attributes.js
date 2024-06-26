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

    // Function for 'Blog' type page
    function handleBlogTypePage() {
        var $blogFeature = $('.blog-feature.resource-type-page');

        if ($blogFeature.length > 0 && getPageName() === 'Blog') {
            var $b_title = $blogFeature.find('._40px-rent-black');
            var $b_date = $blogFeature.find('.date-categories > div:first-child');
            var $b_cat = $blogFeature.find('.date-categories > div:last-child');

            // Set attribute for .cta element
            var clickSubTypeValue = $b_title.text().trim() + ' | ' + $b_date.text().trim() + ' | ' + $b_cat.text().trim();
            $(".blog-feature.resource-type-page .cta").attr("data-click_sub_type", clickSubTypeValue);
        }
    }

    // Function for submenu handling
    function handleSubmenu() {
        var $solution_link = $('.pr-card a[href="/solutions-overview"]');

        if ($solution_link.length > 0) {
            // Set attribute for the solution link
            $solution_link.attr({
                    'data-tag_section': 'Header',
                    'data-click_type': 'Header_Rent_Soultions',
                    'data-click_text': 'Solutions_Review' // Exchange the value to 'Left'
                });
        }
    }

    // Call each function as needed
    handleSubmenu();
    handleAllResourcesPage();
    handleBlogTypePage();
});
