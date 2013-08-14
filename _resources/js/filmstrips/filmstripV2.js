/**
 * @filmstrip v2 : http://jsfiddle.net/Epgm3/ the basic version
 * http://jsfiddle.net/mRXaw/ - Horizontal with large preview version
 * http://jsfiddle.net/jkbbY/ - Vertical with large preview version
 * makes a generic (no auto progression, no pager, no animations) horizontal / vertical single frame carousel scroller.
 * Usage:
 * $ixite.filmstrip.init([TARGET ELEMENT STRING OR OBJECT],[PREVIEW TARGET STRING OR OBJECT]);
 *
 */
var $ixite = $ixite || {};
$ixite.filmstrip = {
    init:function(target){
        var $strip = (typeof target === 'objet')? target : $(target);
        //template shifters, script is not class dependent
        $strip.append('<li class="right">&raquo</li>')
        .prepend('<li class="left">&laquo</li>').end()
        .find('li:eq(1)').addClass('on').end()
        .click(function(e){
            $ixite.filmstrip.shift($(e.target),$strip);
        });
    },
    shift:function(dir,target){
        var $strip = target;
        var isShifter = dir.is(':first-child, :last-child');
        var $on = $('.on',$strip);
        if(isShifter){
            var isLeft = dir.is(':first-child');
            var $oppositeDir = (isLeft)? $(':last-child',$strip) : $(':first-child',$strip);
            var $nextPrev = $on[(isLeft)?'prev':'next']();
            var isVisible = ($nextPrev.position().top === 0);
            var isFirst = $nextPrev.is(':first-child');

            //FULL VIEWPORT SHIFT
            if(!isVisible || isFirst){
               $($oppositeDir,$strip)[(isLeft)?'prev':'next']()[(isLeft)?'insertAfter':'insertBefore'](dir);
            }
            
            //SELECTED SHIFT
            $on.removeClass('on');
            if (isFirst) {
				$('li:eq(1)',$strip).addClass('on');
            }
            else {
				$nextPrev.addClass('on');
            }
        }else if(dir.is('li',$strip)){
            $on.removeClass('on');
            dir.addClass('on');
        }
    }
};
//end @filmstrip v2