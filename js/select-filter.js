$(function() {
    
    $("#Cat-Select-3").selectmenu({ icons: { button: "custom-button" }, create: function(event, ui) {
                   var selectmenuButton = $(this).selectmenu("widget");
                   var clearButton = $('<button>', {
                       text: 'Clear Selection',
                       class: 'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only',
                       click: function() {
                           // Clear the selection
                           $("#Cat-Select-3").val('').selectmenu("refresh");
                       }
                   });

                   // Append the clear button to the selectmenu widget
                   selectmenuButton.after(clearButton);
               }
 }); 
    
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

    var buttonCat = $catselect;
    $('<button type="button" class="btn btn-sm btn-light">Clear filter</button>').appendTo(button); 
  
    $catselect.on('selectmenuchange', function() {
        var selectedValue = $catselect.val();
        $catselect2.val(selectedValue);
        $catselect2.trigger('change');
        $catselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
 
    });
    
    $typeselect.on('selectmenuchange', function() {
        var selectedValue = $typeselect.val();
        $typeselect2.val(selectedValue);
        $typeselect2.trigger('change');
        $typeselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
  
    });
    
    $authorselect.on('selectmenuchange', function() {
        var selectedValue = $authorselect.val();
        $authorselect2.val(selectedValue);
        $authorselect2.trigger('change');
        $authorselect2[0].dispatchEvent(new Event('input', { bubbles: true }));
  
    });
});
