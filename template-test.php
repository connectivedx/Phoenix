<?php
	$pageTitle = 'Template Test';
	include_once 'inc/head.php';
?>
	<header role="banner" class="row">
		<nav id="nav" role="navigation">
			<span class="nav-handle">&#x2261;</span>
			<ul class="nav-list">
				<li id="nav1"><a href="#">Nav1</a></li>
				<li id="nav2"><a href="#">Nav2</a></li>
				<li id="nav3"><a href="#">Nav3</a></li>
			</ul>
		</nav>
		<a class="brand" href="#"><img src="/Assets/dist/img/content/logo-placeholder.png" alt="Phoenix by ISITE Design"></a>
		<ul class="accessibility">
			<li><a href="#content" tabindex="1" accesskey="2">Skip to main content</a></li>
			<li><a href="#nav" accesskey="3">Skip to navigation</a></li>
			<li><a href="#" accesskey="1">Return to homepage</a></li>
		</ul>
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
			<li>Copyright &copy; <?php echo date("Y"); ?> Client Name</li>
		</ul>
	</footer>
<?php
	include_once 'inc/foot.php';
?>