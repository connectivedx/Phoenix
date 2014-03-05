<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product">
<!--<![endif]-->
<head>
	<title>Template Test</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="ISITE Design" />
	<meta name="apple-mobile-web-app-title" content="CUSTOM SHORT NAME" />
	
	<!-- icon and tile color in hex # for Windows phones -->
	<meta name="msapplication-TileImage" content="/path/to/touch-icon.png" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,700" />
	<link rel="stylesheet" href="_resources/css/style.css" />
	
	<script src="_resources/js/modernizr.js"></script>
	<!--[if lte IE 8]>
	<script src="_resources/js/respond.js"></script>
	<![endif]-->
		
	<!-- For everything else --> 
	<link rel="shortcut icon" href="/path/to/shortcut-icon.png"> 
	<!-- Serve one icon for all Apple devices -->
	<link rel="apple-touch-icon-precomposed" href="/path/to/touch-icon.png"> 
</head>

<body class="">
	<header role="banner" class="row">
		<nav id="nav" role="navigation">
			<span class="nav-handle">&#x2261;</span>
			<ul class="nav-list">
				<li id="nav1"><a href="#">Nav1</a></li>
				<li id="nav2"><a href="#">Nav2</a></li>
				<li id="nav3"><a href="#">Nav3</a></li>
			</ul>
		</nav>
		<a class="brand" href="#"><img src="/_resources/img/content/logo-placeholder.png" alt="ISITE Design"></a>
		<ul class="accessibility">
			<li><a href="#content" tabindex="1" accesskey="2">Skip to main content</a></li>
			<li><a href="#nav" accesskey="3">Skip to navigation</a></li>
			<li><a href="#" accesskey="1">Return to homepage</a></li>
		</ul>
		<!--
		<div class="site-utility">
			<form id="search" method="post" action="#" role="search">
				<fieldset>
					<label for="search-text" style="display: none;">Search</label>
					<input id="search-text" type="text" class="input-setter placeholdered" placeholder="Search">
					<button type="submit">Search</button>
				</fieldset>
			</form>
		</div><!-- /.site-utility -->
	</header>
	<section class="wrapper"> 
		<div class="layout-primary" role="main">
			<article>
				<h1>Main Heading</h1>
				<h2>Subheading</h2>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin arcu urna, euismod quis, vehicula a, pretium nec, justo. Curabitur <a href="#">convallis ullamcorper</a> nulla. Nullam eu velit. Duis consectetuer. Sed vulputate sem nec felis. Cras vehicula dolor a dui. Aliquam magna turpis, facilisis sed, vulputate vel, bibendum sit amet, quam. Nullam sodales metus. Donec venenatis, mi eget mattis ultrices, magna orci consectetuer nisi, at semper libero sapien eget magna. Donec dignissim blandit odio. Phasellus velit pede, nonummy sit amet, pellentesque a, eleifend sed, mauris. Morbi tempus nunc tempor nulla. Aenean interdum dolor id sem. </p>
				<p>Nulla mollis faucibus tempus. Aenean rutrum porta metus, id mattis justo blandit at. Integer eleifend placerat enim, eu hendrerit eros molestie vel. Nullam facilisis rutrum fermentum. Ut iaculis lorem eu nulla vestibulum tincidunt. Ut ut massa vel tortor placerat faucibus. Nullam feugiat diam vel mi molestie sed sodales dolor ultricies. Vivamus quis libero ac nibh feugiat hendrerit. Cras justo magna, varius euismod consequat rhoncus, tincidunt quis lectus. Praesent ut dui feugiat lacus varius blandit nec vitae metus. </p>
				<aside>
					<h3>Aside</h3>
					<p>Aliquam magna turpis, facilisis sed, vulputate vel, bibendum sit amet, quam. Nullam sodales metus. Donec	venenatis, mi eget mattis ultrices, magna orci consectetuer nisi, at semper libero sapien eget magna. Donec dignissim blandit odio. </p>
				</aside>
			</article>
		</div><!-- /.layout-primary -->
		
		<div class="layout-secondary" role="complementary">
			<h3>Secondary</h3>
		</div><!-- /.layout-secondary -->
		
		<div class="layout-tertiary">
			<h3>Tertiary</h3>
		</div><!-- /.layout-tertiary -->
 
	</section><!-- /.wrapper -->
	
	<footer role="contentinfo" class="row">
		<h2>footer</h2>		
		<ul class="meta">
			<li>Copyright &copy; 2013 Client Name</li>
		</ul>
	</footer>
	
	<script src="_resources/js/jquery.min.js"></script>
	<script src="_resources/js/tabs/jquery.responsive-tabs.js"></script>
	<script src="_resources/js/lightboxes/jquery.fancybox.pack.js"></script>
	<script>
		$(function() {
			$('.nav-handle').click(function() {
				$('.nav-list').toggleClass('expanded');
			});
			$('select').wrap('<div class="decorator-select"></div>');

			$('.fancybox').fancybox();
		});
	</script>
</body>
</html>