/**
 * @selectTabs v2
 * 5.29.12 D.O. : http://jsfiddle.net/ZEeLV/
 * build select from link list to reveal and hide different options in a form
 * based on @tabs.
 * expects a list of links which it will transform into a select control (please be sure to use inside a form, doesn't add a fieldset!)
 * will reveal sections based on relative links and id's; see @tabs documentation for more info.
 * http://jsfiddle.net/zjHCW/
**/
jQuery.fn.IX_selectTabs = function(tab) {
    return this.each(function() {
        var $tabs = $(this);
        var $select =  $('<select class="IX_selectTabs"><option> - - </option></select>').insertAfter($tabs);
        $.each($('a',$tabs),function(i){ //add options
            $select.append( '<option value="'+ $(this).attr('href') +'">'+ $(this).text() +'</option>');
        });
        
        var $options = $('option',$select);
        $select.change(function(){ //choose options
            $.each($options, function(){ $(this.value).hide(); }); //hide all
            $($options.eq($(':selected',$select).index()).val()).show(); //show selected
        });
        
        var $default =($(window.location.hash).length)? //default selection
            $('a',this).index( $('[href='+window.location.hash+']') )+1 : ($('.default',this).length) ?
            $('a',this).index( $('.default') )+1 : (tab) ? tab : 0 ;

        $('option:eq('+$default+')',$select).attr('selected', 'selected');
        $select.trigger('change');
        $tabs.remove(); //clean up after setup
    });
};

// end @selectTabs v2