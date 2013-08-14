// customSelect jquery plugin
(function($) {

	// plugin definition
	$.fn.customSelect = function(options) {
		//debug(this);
		
		// build main options before element iteration
		var opts = $.extend({}, $.fn.customSelect.defaults, options);
				
		// return and iterate		
		return this.each(function() {
			$this = $(this);
			$drop = {};
			
			// build element specific options ------- not using
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
						
			// insert display div and hide real select
			var $current = $("option[selected]",this).length == 0 ? $("option:first",this) : $("option[selected]",this);
			var $dropdown = $.fn.customSelect.buildDisplay($current.text());
			$current.remove();
			
			var $list = $("<ul></ul>");
			$("option",this).each(function(){
				$list.append($.fn.customSelect.buildOption($(this).text()));
			});
			
			// make clicks show/hide
			$(".custom-select-display a",$dropdown).bind("click",$.fn.customSelect.toggleDrop);
			$(window).bind("click",$.fn.customSelect.hideDrop);
			
			var shiftkey = false;
			
 			$dropdown.keydown(function(e) {	   
				if(!$(".custom-select-list-wrapper:visible",this).length) { return true; }
				switch(e.keyCode) {
					case 16: // shift					
						shiftkey = true;
						break;
					case 38: // up
						moveSelect($(this),-1);
						e.preventDefault();
						break;
					case 40: // down		
						moveSelect($(this),1);
						e.preventDefault();
						break;
 					case 9: // tab
						moveSelect($(this),shiftkey ? -1 : 1);
						e.preventDefault();	
						break;
/*					case 13: // return
						console.log("return");						
						shiftkey = false;	
						//$('a.focused').parents("li").trigger('click');
						//e.preventDefault();
						break; */
					case 27: //escape
				  		$.fn.customSelect.hideDrop();		
						e.preventDefault();
						break;
				}
			}).keyup(function(e){
				shiftkey = e.keyCode == 16 ? false : shiftkey;
				e.preventDefault();		
			});
				
			// insert and hide the select element
			$dropdown.append($.fn.customSelect.listWrap($("option",this).length).append($list));	
			$this.hide().after($dropdown);

			$(".custom-select-wrapper li").click(function(e){			
				var child = $(this).prevAll().length;	
				$this.find("option").eq(child).attr("selected","selected").end().end().change();
				$(this).parents(".custome-select-wrapper").find("a").removeClass("focused");
			});
			$(".custom-select-wrapper li a").click(function(e){
					e.preventDefault();
					e.stopPropagation();
					$(this).parents("li").click();	
				})
				.focus(function(){
					$(this).addClass("focused");
				})
				.blur(function(){
					$drop = $(this);
					$(this).removeClass("focused");
					setTimeout(function(){ $.fn.customSelect.blurDrop($drop)},5);
				});				
				
		});
	};

	// private function for debugging	
	function debug($obj) {
		if (window.console && window.console.log)
		window.console.log('selection count: ' + $obj.size());
	};

	// private function for selecting item	
	function moveSelect($obj,dir) {
		
		var focused = $(".custom-select-list-wrapper a.focused",$obj).length;	
		var current = $(".custom-select-list-wrapper a.focused",$obj).parent().prevAll().length;
		$(".custom-select-list-wrapper li a",$obj).removeClass("focused");

		if(focused) {		
			if(parseInt(current)+dir>=0 && $(".custom-select-list-wrapper li",$obj).eq(parseInt(current)+dir).length) {
				$(".custom-select-list-wrapper li",$obj).eq(parseInt(current)+dir).find("a").focus();
			} else {
				$(".custom-select-display a",$obj).focus();
			}
		} else {
			var psuedo = dir == 1 ? "first" : "last";
			$(".custom-select-list-wrapper li:"+psuedo+" a",$obj).focus();	
		}
		
	};
	
	// blur
	$.fn.customSelect.blurDrop = function($obj) {
		if($obj.parents("ul").find("a.focused").length == 0 ) {
			$.fn.customSelect.hideDrop();
		}
	};
	
	// define and expose our display function
	$.fn.customSelect.buildDisplay = function(txt) {
		return $('<div class="custom-select-wrapper"><div class="custom-select-display"><a href="#">' + $.fn.customSelect.textFormat(txt) + '</a></div></div>');
	};
	
	// define and expose our format function
	$.fn.customSelect.buildOption = function(txt) {
		return $('<li><a href="#">' + $.fn.customSelect.textFormat(txt) + '</a></li>');
	};
	
	// define and expose our display function
	$.fn.customSelect.listWrap = function(c) {
		var fix = c > 11 ? ' maxheight' : '';
		return $('<div class="custom-select-list-wrapper'+fix+'" style="display:none;"></div>');
	};
	
	$.fn.customSelect.toggleDrop = function(e) {
		$(e.target).parents(".custom-select-wrapper").find(".custom-select-list-wrapper").toggle();
		return false;	
	};
	
	$.fn.customSelect.hideDrop = function(e) {
		var ev = e || "";
		if($(ev.target).not(".custom-select-wrapper").length){
			$(".custom-select-list-wrapper li a").removeClass("focused");
			$(".custom-select-list-wrapper").hide();
		}
		return true;		
	};
	
	// custom function for 
	$.fn.customSelect.textFormat = function(txt) {
		// put custom formating function here or define globally.
		// receives test of option tag
		return txt;	
	};

})(jQuery);