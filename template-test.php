<html lang="en" class="js"><head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="ISITE Design">
    <meta name="apple-mobile-web-app-title" content="CUSTOM SHORT NAME">
	
    <!-- icon and tile color in hex # for Windows phones -->
    <meta name="msapplication-TileImage" content="http://fed.isitedesign.us/content/fed-template/img/apple-touch-icon-144x144.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	
	<link rel="stylesheet" media="all" href="_resources/css/style.css">
		
	<!-- For everything else --> 
	<link rel="shortcut icon" href="../img/favicon.png"> 
    <!-- 57x57 (precomposed) for iPhone 3GS, 2011 iPod Touch and older Android devices -->
	<link rel="apple-touch-icon-precomposed" href="../img/apple-touch-icon-precomposed.png"> 
	<!-- 72x72 (precomposed) for 1st generation iPad, iPad 2 and iPad mini -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../img/apple-touch-icon-72x72.png">
    <!-- 114x114 (precomposed) for iPhone 4, 4S, 5 and 2012 iPod Touch -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../img/apple-touch-icon-114x114.png">
	<!-- 144x144 (precomposed) for iPad 3rd and 4th generation -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../img/apple-touch-icon-144x144.png">
</head>

<body class="">
	<header role="banner">
		<nav id="nav" role="navigation">
			<span class="nav-handle">&#x2261;</span>
			<ul class="nav-list">
				<li id="nav1"><a href="#">Nav1</a></li>
				<li id="nav2"><a href="#">Nav2</a></li>
				<li id="nav3"><a href="#">Nav3</a></li>
			</ul>
		</nav>
		<a class="brand" href="#"><img src="constructor/htdocs/_resources/img/content/logo.png" alt="Company’s name"></a>
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
	<section id="content"> 
		<div class="primary" role="main">
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
		</div><!-- /.primary -->
		
		<div class="secondary" role="complementary">
			<h2>Secondary</h2>
		</div><!-- /.secondary -->
		
		<div class="tertiary">
			<h2>Tertiary</h2>
		</div><!-- /.tertiary -->
 
	</section><!-- /#content -->
	
	<footer role="contentinfo">
		<h2>footer</h2>		
		<ul class="meta">
			<li>Copyright © 2013 Client Name</li>
		</ul>
	</footer>
	
	<script src="_resources/js/jquery.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$('.colgrid-visible').wrapInner('<div class="colgrid-image" />');
			$('.nav-handle').click(function() {
				$('.nav-list').toggleClass('expanded');
			});
		});
	</script>
</body>
</html>