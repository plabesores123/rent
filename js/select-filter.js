$(function() {
    
   // Initialize SelectMenu using $("#Cat-Select-3")
            $("#Cat-Select-3").selectmenu({
                icons: { button: "custom-button" },
                position: {
                        my: "left top",  // Position of the dropdown menu relative to the button
                        at: "left bottom", // Position of the dropdown menu relative to the button
                        of: "#mySelectMenu", // Element to position against
                        collision: "flip" // Adjusts the position if dropdown overflows window
                },                    
                open: function(event, ui) {
                    // Check if the clear button already exists
                    if (!$(this).data('clear-button-initialized')) {
                        var selectmenuMenu = $(this).selectmenu("menuWidget");

                        // Create the clear button with an icon
                        var clearButton = $('<button>', {
                            class: 'clear-selection',
                            text: 'Clear Selection',
                            click: function() {
                                // Clear the selection
                                $("#Cat-Select-3").val('all').selectmenu("refresh").selectmenu("close");
                            }
                        });

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
});
