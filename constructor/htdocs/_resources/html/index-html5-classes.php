<?php
$pageTitle = "ISITE Design HTML5 FED Template";
$bodyClass = "";
$navItem = "";
//footerAdds for template specific javascripts.  comes after jqeuery, before global.js
$footerAdds = '<script></script>' . "\n\t";
$footerAdds .= '<script></script>' . "\n";

// start content buffering for master page
ob_start();
?>
<div class="section primary" role="main">
			<div class="article">
				<h1>Main Heading</h1>
				<h2>Subheading</h2>
				<div class="figure right"> 
					<img src="../img/content/img-placeholder.png" alt="placeholder">
					<div class="figcaption">Description text</div>
				</div><!-- /.figure .right -->
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin arcu urna, euismod quis, vehicula a, pretium nec, justo. Curabitur <a href="#">convallis ullamcorper</a> nulla. Nullam eu velit. Duis consectetuer. Sed vulputate sem nec felis. Cras vehicula dolor a dui. Aliquam magna turpis, facilisis sed, vulputate vel, bibendum sit amet, quam. Nullam sodales metus. Donec venenatis, mi eget mattis ultrices, magna orci consectetuer nisi, at semper libero sapien eget magna. Donec dignissim blandit odio. Phasellus velit pede, nonummy sit amet, pellentesque a, eleifend sed, mauris. Morbi tempus nunc tempor nulla. Aenean interdum dolor id sem. </p>
				<p>Nulla mollis faucibus tempus. Aenean rutrum porta metus, id mattis justo blandit at. Integer eleifend placerat enim, eu hendrerit eros molestie vel. Nullam facilisis rutrum fermentum. Ut iaculis lorem eu nulla vestibulum tincidunt. Ut ut massa vel tortor placerat faucibus. Nullam feugiat diam vel mi molestie sed sodales dolor ultricies. Vivamus quis libero ac nibh feugiat hendrerit. Cras justo magna, varius euismod consequat rhoncus, tincidunt quis lectus. Praesent ut dui feugiat lacus varius blandit nec vitae metus. </p>
			</div><!-- /.article -->
		</div>
		<!-- /.primary -->
		
		<div class="section secondary" role="complementary">
			<h2>Secondary</h2>
		</div>
		<!-- /.secondary -->
		
		<div class="section tertiary">
			<h2>Tertiary</h2>
		</div>
		<!-- /.tertiary -->
		
		<div class="aside">
			<h3>Aside</h3>
			<p>Aliquam magna turpis, facilisis sed, vulputate vel, bibendum sit amet, quam. Nullam sodales metus. Donec	venenatis, mi eget mattis ultrices, magna orci consectetuer nisi, at semper libero sapien eget magna. Donec dignissim blandit odio. </p>
		</div><!-- /.aside -->
<?php
// wrap up content buffering and send content to a variable for master.php to access.
$pageContent = ob_get_contents();
ob_end_clean();

include ("../inc/master-html5-classes.php");
?>
