$(document).ready(function() {
    
    $("#Cat-Select-3").selectmenu({
    icons: { button: "custom-button" },
    open: function (event, ui) {
        if (!$(this).data('clear-button-initialized')) {
            var selectmenuMenu = $(this).selectmenu("menuWidget");
            $('#btn-clr-cat').insertAfter(selectmenuMenu);
            $(this).data('clear-button-initialized', true);
        }
    }
    })
    .selectmenu("menuWidget").addClass("overflow");

    $catselect = $('#Cat-Select-3');
    $catselect2 = $('#Cat-Select-2');
    $catselect.unbind('mouseenter mouseleave'); 

    $("#Type-Select-3").selectmenu({
    icons: { button: "custom-button" },
    open: function (event, ui) {
        if (!$(this).data('clear-button-initialized')) {
            var selectmenuMenu = $(this).selectmenu("menuWidget");
            $('#btn-clr-type').insertAfter(selectmenuMenu);
            $(this).data('clear-button-initialized', true);
        }
    }
    })
    .selectmenu("menuWidget").addClass("overflow");
    
    $typeselect = $('#Type-Select-3');
    $typeselect2 = $('#Type-Select-2');
    $typeselect.unbind('mouseenter mouseleave'); 
 
    $("#Author-Select-2").selectmenu({
    icons: { button: "custom-button" },
    open: function (event, ui) {
        if (!$(this).data('clear-button-initialized')) {
            var selectmenuMenu = $(this).selectmenu("menuWidget");
            $('#btn-clr-author').insertAfter(selectmenuMenu);
            $(this).data('clear-button-initialized', true);
        }
    }
    })
    .selectmenu("menuWidget").addClass("overflow");
     
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

    $('#Type-Select-3-button').on('click', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '-20px');
    });
    
    $('#Type-Select-3-button').on('mousedown', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '0px');
    });
    
    $("#Type-Select-3 option:first-child").text("All");

    $('#Author-Select-2-button').on('click', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '-20px');
    });
    
    $('#Author-Select-2-button').on('mousedown', function() {
        $('.ui-selectmenu-menu.ui-front.ui-selectmenu-open').css('margin-top', '0px');
    });
    
    $("#Author-Select-2 option:first-child").text("All");
    
});
