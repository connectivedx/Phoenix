/**
 * @filmstrip
 * makes a horizontal single frame carousel (i.e., perpetual) scroller.
 * http://jsfiddle.net/SyaDj/
 *
 * minimum html needed:
 * <div class="filmstrip">
 *	<ul>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *	</ul>
 *	<div class="filmstrip-utility">
 *	</div>
 * </div>
 *
 * filmstrip-utility is maintained in the source as a place to emit more links or other static information. plugin does test for its presence so we won't break if it's absent.
 *
 * baseline CSS:
 * .IX_filmstrip .viewport { // this is the 'window' in which the slide is revealed.
 *		height:100px;
 *		overflow:hidden;
 *		position:relative;
 *		width:100px;
 * }
 *	.IX_filmstrip ul {
 *		margin:0;
 *		overflow:hidden;
 *		padding:0;
 *		position:absolute; top:0; left:0;
 *	}
 *		.IX_filmstrip li { // not necessary, but recomend setting height and width to match .viewport
 *			list-style:none;
 *			float:left;
 *			height:100px;
 *			margin:0;
 *			padding:0;
 *			position:relative;
 *			width:100px;
 *		}
 *
 * Usage:
 * $('.filmstrip').IX_filmstrip();
 *
 */

jQuery.fn.IX_filmstrip = function() {
	return this.each(function(){

		// grab the filmstrip itself and build some controls for it.
		var	$widget = jQuery(this),
			$strip = jQuery('ul', this),
			$slides = jQuery('li', this),
			$prev = jQuery('<span class="prev">prev</span>'),
			$next = jQuery('<span class="next">next</span>'),
			$pager = jQuery('<div class="pager"><span class="current">1</span> of <span class="total-slides"></span></div>'),
			$currentSlide = jQuery('.current', $pager),
			totalSlides = $slides.length,
			stripWidth = 0,
		
			filmstrip = {
				
				init : function(){
					$widget.addClass('IX_filmstrip');
					$strip.wrap('<div class="viewport"></div>');
					
					// add extra slides
					jQuery($slides[totalSlides-1]).clone(true).prependTo($strip);
					jQuery($slides[0]).clone(true).appendTo($strip);
					$slides = jQuery('li', $widget);
					
					// update pager
					$pager.find('.total-slides').text(totalSlides);
					if (jQuery('.filmstrip-utility', $widget).length) { jQuery('.filmstrip-utility', $widget).prepend($pager).append($next).append($prev); }
					else { $widget.prepend($pager).append($next).append($prev); }
					
					// arrange the filmstrip
					stripWidth = $slides.width() * $slides.length;
					$strip.width(stripWidth);
					$strip.css('left', '-'+$slides.width()+'px');
					
					// bind the animation to the controls
					$prev.bind('click', function(){ filmstrip.rewind(); });
					$next.bind('click', function(){ filmstrip.advance(); });
				},
				advance : function(){ filmstrip.move(true); },
				rewind : function(){ filmstrip.move(false); },
				move : function(adv){
					if($strip.is(':animated')){ return false; }
					var pos = parseInt($strip.css('left'), 10),
						dir = (adv) ? -1 : 1;
					
					// ready to animate
					$strip.animate({'left': pos + (dir * $slides.width()) + 'px'}, 300, 'swing', function(){
						if (parseInt($strip.css('left'), 10) == -1 * (stripWidth - $slides.width())) { $strip.css('left', -1 * ($slides.width()) + 'px'); }
						if (parseInt($strip.css('left'), 10) === 0) { $strip.css('left', -1 * (stripWidth - (2 * $slides.width())) + 'px'); }
						// update position count
						$currentSlide.text(-1 * (parseInt($strip.css('left'), 10) / $slides.width()));
					});
				}
			};
			
			
		filmstrip.init();

	});
};