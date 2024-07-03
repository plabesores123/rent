$(document).ready(function() {
    
   // Initialize SelectMenu using $("#Cat-Select-3")
           /** $("#Cat-Select-3").selectmenu({
                icons: { button: "custom-button" }, 
                open: function(event, ui) {
                    // Check if the clear button already exists
                    if (!$(this).data('clear-button-initialized')) {
                        var selectmenuMenu = $(this).selectmenu("menuWidget");

                        // Create the clear button with an icon
                        var clearButton = $('<a>', {
                            class: 'clear-selection',
                            text: 'Clear Filter',
                            click: function() {
                                // Clear the selection
                                $("#Cat-Select-3").selectmenu("refresh").selectmenu("close");
                                $("#btn-clr-cat").click();
                            },
                            'href': '#',
                            'fs-cmsfilter-element': 'reset',
                            'fs-cmsfilter-reset': 'cat'
                        });

                        // Append the clear button to the menu wrapper
                        selectmenuMenu.after(clearButton);

                        // Mark the button as initialized
                        $(this).data('clear-button-initialized', true);
                    }
                }
            }).selectmenu("menuWidget").addClass("overflow"); **/
        // Initialize SelectMenu using $("#Cat-Select-3")
        $("#Cat-Select-3").selectmenu({
        icons: { button: "custom-button" },
        open: function (event, ui) {
            if (!$(this).data('clear-button-initialized')) {
                var selectmenuMenu = $(this).selectmenu("menuWidget");

                // Create the clear button
                var clearButton = $('<button>', {
                    id: 'clear-cat', // Add the id here
                    class: 'clear-selection',
                    text: 'Clear Filter',
                    'fs-cmsfilter-element': 'reset',
                    'fs-cmsfilter-reset': 'cat'
                });

                $(clearButton).click(function (e) {
                    e.preventDefault();
                    $("#Cat-Select-3").val(null).selectmenu("refresh").selectmenu("close");
                    $("#btn-clr-cat").trigger("click");
                });

                console.log(clearButton);

                // Append the clear button to the menu wrapper
                selectmenuMenu.after(clearButton);

                // Mark the button as initialized
                $(this).data('clear-button-initialized', true);
            }
        }
    }).selectmenu("menuWidget").addClass("overflow");

    $catselect = $('#Cat-Select-3');
    $catselect2 = $('#Cat-Select-2');
    $catselect.unbind('mouseenter mouseleave'); 
    
    $("#Type-Select-3").selectmenu({ icons: { button: "custom-button" } }); 
    
    $typeselect = $('#Type-Select-3');
    $typeselect2 = $('#Type-Select-2');
    $typeselect.unbind('mouseenter mouseleave'); 
    
    $("#Author-Select-2").selectmenu({ icons: { button: "custom-button" } }); 
     
    $authorselect = $('#Author-Select-2');
    $authorselect2 = $('#Author-Select');
    $authorselect.unbind('mouseenter mouseleave'); 
  
    $catselect.on('selectmenuchange', function() {
        var selectedValue = $catselect.val();
        $catselect2.val(selectedValue);
        $catselect2.trigger('change');
        $catselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
        $(".ui-button").trigger('blur');
    });
    
    $typeselect.on('selectmenuchange', function() {
        var selectedValue = $typeselect.val();
        $typeselect2.val(selectedValue);
        $typeselect2.trigger('change');
        $typeselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
        $(".ui-button").trigger('blur');
    });
    
    $authorselect.on('selectmenuchange', function() {
        var selectedValue = $authorselect.val();
        $authorselect2.val(selectedValue);
        $authorselect2.trigger('change');
        $authorselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
        $(".ui-button").trigger('blur');
    });

    $('#Cat-Select-3-button').on('click', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '-20px');
    });
    
    $('#Cat-Select-3-button').on('mousedown', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '0px');
    });
    
    $("#Cat-Select-3 option:first-child").text("All");
    
});
