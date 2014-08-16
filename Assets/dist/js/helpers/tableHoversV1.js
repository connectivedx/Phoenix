// @tableHovers Plugin
// 07.13.09 pdf
// makes row and column hovering for tables
// usage: $('table').tableHovers();
// all the functions are public so can be customized. bad?

(function($) {

	// plugin definition
	$.fn.tableHovers = function(options) {
		// return and iterate
		return this.each(function() {
			if(this.tagName == "TABLE") {
				// row hover
				$('tbody tr',this).bind('mouseenter mouseleave', $.fn.tableHovers.rowHover);
				// row focus
				$('tbody th a',this).bind('focus blur', $.fn.tableHovers.rowFocus);
				// column hover
				$('td,th',this).bind('mouseenter', $.fn.tableHovers.columnHover);
				// clear table
				$(this).bind('mouseleave', $.fn.tableHovers.clearTable);
				$('tbody th',this).bind('mouseenter', $.fn.tableHovers.clearTable);
			}
		});
	};
	
	$.fn.tableHovers.cache = {};
	
	$.fn.tableHovers.rowHover = function(e) {
		$(this)[((e.type == 'mouseenter') ? 'add' : 'remove') + 'Class']('over');
	};
	
	$.fn.tableHovers.rowFocus = function(e) {
		$(this).parents('tr')[((e.type == 'focus') ? 'add' : 'remove') + 'Class' ]('over');
	};

	$.fn.tableHovers.columnHover = function(e) {
		var $this	= $(this),
			$tr		= $this.parents('tr'),
			$table	= $this.parents('table'),
			td_i	= $('td,th',$tr).index($this),
			table_i = $('table',$("body")).index($table);
		if($.fn.tableHovers.cache.index!=td_i) {
			// remove current "over" classes
			$('td,th',$table).removeClass('over');
			// reset index
			$.fn.tableHovers.cache.index = td_i;
			// class the index
			if($.fn.tableHovers.cache["$"+table_i+"_"+td_i]){
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i].addClass('over');
			} else {
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i] = $();
				$('tr',$table).each(function(i){
					$.fn.tableHovers.cache["$"+table_i+"_"+td_i] = $.fn.tableHovers.cache["$"+table_i+"_"+td_i].add($('td:eq('+(td_i-1)+'),th:eq('+td_i+')',this));
				});
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i].addClass('over');
			}
		}
	};
	
	$.fn.tableHovers.clearTable = function(e) {
		var $parent = this.tagName == "TABLE" ? $(this) : $(this).parents("table");
		$('td',$parent).removeClass('over');
		$.fn.tableHovers.cache.index = null;
	};

})(jQuery);