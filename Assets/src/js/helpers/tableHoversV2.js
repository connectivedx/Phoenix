// @tableHovers Plugin v2
// 5.28.12 D.O. : http://jsfiddle.net/YUzUz/
// makes row, column and or current hovering for tables. Still thead and th friendly.
// usage: $('table').tableHovers();
// http://jsfiddle.net/SDbQY/
$.fn.tableHovers = function(options) {
    var defaults = {
        single: true, //single cell highlighting
        column: true, //column highlighting
        row: true, //row highlighting
        autoReset:true, //clear highlights on mouse leave of table
        cached:false //keep clicked state of highlights
    };
    //inherit from provided configuration (if any)
    var o = $.extend(defaults, options);
    return this.each(function(){
        $(this).mouseover(function(e){
            var $t = $(e.target);
            var tableRow = $('tr',$(this));
            var isTable = $t.is('table');
            var row = $t.index();
            var col = $t.parent().index();

            if(!isTable && $(this).is(':not(.cached)')){
                $('.over, .single-over',this).removeClass('over single-over'); //clear previous hover
                $($t.parent(),$(this))[(o.row !== false)?'addClass':'removeClass']('over'); //set row highlight
                
                //set column highlight
                for(var i = tableRow.length; i--;){
                    $(tableRow[i]).find('td,th').eq(row)
                    .not((o.single !== false)?$t:'table')
                    [(o.column !== false)?'addClass':'removeClass']('over');
                }
                
                //set single highlight
                $t[(o.single === true)?'addClass':'removeClass']('single-over');
            }
        }).mouseout(function(){
            if(o.autoReset === true && $(this).is(':not(.cached)')){
                $('.over, .single-over',this).removeClass('over single-over');
            }
        }).click(function(e){
            if(o.cached !== false){
                $(this).toggleClass('cached');
                $(e.target).trigger('mouseenter');
            }
        });
    });
}; // end @tableHovers Plugin v2