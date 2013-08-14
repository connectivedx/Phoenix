<?php

$pageTitle = "ISITE Design FED Template";
$bodyClass = "page-";
//headerAdds for template specific styles/js.  comes after jqeuery, before global.js
$headerAdds = '';

// start content buffering for master page
ob_start();
?>
<script type="text/javascript">

// an example content array
// maybe ajax gets this, maybe it is written to the page, maybe it is just content in the js file, maybe I don't know
var rotatorcontent = [
		{
			title : "title 1",
			content : "content 1",
			image : "image.jpg",
			links : [
						{
							text : "More Info",
							url : "#somelink-1"
						},
						{
							text : "Purchase Now",
							url : "#somelink-2"
						}
					]
		},
		{
			title : "title 2",
			content : "content 2",
			image : "image-2.jpg",
			links : [
						{
							text : "More Info",
							url : "#somelink-3"
						},
						{
							text : "Purchase Now",
							url : "#somelink-4"
						}
					]
		},
		{
			title : "title 3",
			content : "content 3",
			image : "image-3.jpg",
			links : [
						{
							text : "More Info",
							url : "#somelink-5"
						},
						{
							text : "Purchase Now",
							url : "#somelink-6"
						}
					]
		}
	];


// doc ready set go
jQuery(document).ready(function() {

	// do the plugin passing in the desired data object and optional options
	jQuery('.rotator').IX_rotator(rotatorcontent);			

}); //victory	


// IX_rotator plugin
// wrap it up with jQuery passed in as $ for name collision safety
(function($) {

	// plugin definition
	$.fn.IX_rotator = function(content,options) {

		// if the content didn't get created or isn't an object, bail now before errors get tossed
		if(content == undefined || typeof content !== "object") { return this; }

		// build main options before element iteration
		// extends exposed defaults property
		// options might include transition effects or speeds or ???
		var opts = $.extend({}, $.fn.IX_rotator.defaults, options);

		// vaaarrrrrs	
		var $this 	= $(this), 			// the rotator container
			$ul 	= $('<ul />').addClass(opts.class || "rotator"), // the new rotator container
			current	= opts.show || 1,	// current displayed rotatee
			total	= content.length;	// total number of rotatee

		// loop over content object and build out each rotatee	
		for(var j=0;j<total;j++) {		
			var rotatee = $.fn.IX_rotator.tmpl.replace(/<%=image%>/g,content[j].image.replace(/\s/g,"%20"))
											.replace(/<%=title%>/g,content[j].title)
											.replace(/<%=content%>/g,content[j].content),
				links = "";			

			// for items that could have more than one, loop to create
			// this example uses multiple links placed into the btn template
			$.each(content[j].links,function(i){
				if(content[j].links[i].url!=null) {
					links += $.fn.IX_rotator.btn.replace(/<%=url%>/g,content[j].links[i].url)
												.replace(/<%=text%>/g,content[j].links[i].text);														 
				}
			});
			$(rotatee).find('.nav-rotator').append(links).end().appendTo($ul);		
		}				
		
		// make the nav and counter
		$ul.append($.fn.IX_rotator.nav.replace(/<%=current%>/g,current).replace(/<%=total%>/g,total));

		// hide all but the default rotatee
		$('li.rotator-item:not(:eq('+(current-1)+'))',$ul).hide();

		// dump in the new html structure
		$this.html($ul);

		// the cycler
		var cycle = function(e) {
			// set current depending on what nav item was pressed			
			current = $(e.target).parents('.arrow-previous').length ? current += -1 : current += 1;
			// loop to beginning or end if previous setting resulted in non-existent rotatee
			current = current < 0 ? total-1 : current == total ? 0 : current;
			$('li.rotator-item:visible',$this).fadeOut("slow");
			$('li.rotator-item',$this).eq(current-1).fadeIn("slow");
			$('.rotator-current',$this).text(current);
		};

		// start the auto rotating
		if($.fn.IX_rotator.defaults.auto) {
			var speed = $.fn.IX_rotator.autospeed || 7000;
			$.fn.IX_rotator.rotate = setInterval(function(){ $this.trigger('rotate'); },speed);
		}

		// image preloading
		for(var i=0,length = content.length; i<length; i++) {
			$('<img>').attr("src", content[i].image.replace(/\s/g,"%20"));
		}	

		// return and iterate
		return this.each(function(){
			$('a.btn-arrow',this).live('click',function(e) {
				clearInterval($.fn.IX_rotator.rotate);
				cycle(e);
				return false;
			});
			$(this).bind('rotate',function(e) {
				cycle(e);
				return false;
			});
		});

		// get other objects
			// dom children

		// get other properties
			// li width

			//if object with data (JSON)
				//slide - JSON object
					// header
					// content
					// thumbnails
					// url
					// bg image

				//rotate through

					//make the slides

						//create some html

					//get the total	

					//build the nav
						//attach behaviors
							//click
								// which is active (see .index)
								// animate
									//slider
										//difference between current and next
											//offset?

								

				//build play pause controls
					// attach behaviors

				//page index
					//attach method for updating

				//insert it

				// preload next

	}; // end plugin definition

	// exposed functions

	// default options
	$.fn.IX_rotator.defaults = {	
		transition : "fade",
		speed : 100,
		auto : true,
		autospeed : 7000	
	};

	// base html templates
	// better to base of html?
	$.fn.IX_rotator.tmpl 	= '<li class="rotator-item" style="background-image:url(<%=image%>);"><div class="wrapper"><h1><%=title%></h1><div class="content"><p><%=content%></p></div><div class="nav-rotator"></div></div></li>';
	$.fn.IX_rotator.btn 	= '<a class="btn" href="<%=url%>"><%=text%></a>';
	$.fn.IX_rotator.nav 	= '<div class="nav-rotate"><ul><li class="arrow-previous"><a class="btn-arrow ir" href="#">Previous</a></li><li class="arrow-next"><a class="btn-arrow ir" href="#">Next</a></li></ul><span class="pages"><span class="rotator-current"><%=current%></span> of <%=total%></span></div>';

})(jQuery);

</script>

<div class="rotator">
	<div class="viewport">
		<ul class="slides">
			<li> slide 1 </li>
		</ul>
		<!-- /slides -->
	</div>
	<!-- /.viewport -->
</div>
<!-- /.rotator -->
<div id="primary">
	<h1>#Primary</h1>
	<ul>
		<li>auto advance</li>
		<li>any number</li>
		<li>navigation </li>
		<li> 1:1 navigation</li>
		<li> prev/next</li>
		<li>ajax option</li>
		<li>on page object option</li>
		<li>preload, bitches.</li>
	</ul>
</div>
<!-- /primary -->
<div id="secondary">
	<div class="xxxrotator">
		<div class="xxxviewport">
			<ul class="xxxslides">
				<li> slide 1 </li>
				<li> slide 2 </li>
				<li> slide 3 </li>
				<li> slide 4 </li>
			</ul>
			<!-- /slides -->
		</div>
		<!-- /.viewport -->
		<ul class="xxxrotator-nav">
			<li><a href="#">slide 1</a></li>
			<li><a href="#">slide 2</a></li>
			<li><a href="#">slide 3</a></li>
			<li><a href="#">slide 4</a></li>
		</ul>
		<!-- /nav-rotator -->
		<ul class="xxxrotator-controls">
			<li><a href="#">prev</a></li>
			<li><a href="#">next</a></li>
			<li><a href="play" class="play">Play</a></li>
		</ul>
		<p class="xxxrotator-index"><span class="index-current">X</span> of <span class="index-total">Y</span></p>
	</div>
	<!-- /.rotator -->
</div>
<!-- /secondary -->
<div id="tertiary">
	<h2>#Tertiary</h2>
</div>
<!-- /tertiary -->
<?php

// wrap up content buffering and send content to a variable for master.php to access.

$pageContent = ob_get_contents();

ob_end_clean();



include ("_resources/inc/master.php");

?>
