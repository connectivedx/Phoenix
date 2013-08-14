<?php
$pageTitle = "ISITE Design FED Template";
$bodyClass = "";
$navItem = "";
//footerAdds for template specific javascripts.  comes after jqeuery, before global.js
$footerAdds = '<script></script>' . "\n\t";
$footerAdds .= '<script></script>' . "\n";

// start content buffering for master page
ob_start();
?>

		<div id="primary">
			<h1>#Primary</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin arcu urna, euismod quis, vehicula a, pretium nec, justo. 
				Curabitur convallis ullamcorper nulla. Nullam eu velit. Duis consectetuer. Sed vulputate sem nec felis. Cras vehicula 
				dolor a dui. Aliquam magna turpis, facilisis sed, vulputate vel, bibendum sit amet, quam. Nullam sodales metus. Donec 
				venenatis, mi eget mattis ultrices, magna orci consectetuer nisi, at semper libero sapien eget magna. Donec dignissim 
				blandit odio. Phasellus velit pede, nonummy sit amet, pellentesque a, eleifend sed, mauris. Morbi tempus nunc tempor 
				nulla. Aenean interdum dolor id sem.
			</p>
		</div><!-- /primary -->

		<div id="secondary">
			<h2>#Secondary</h2>
		</div> <!-- /secondary -->

		<div id="tertiary">
			<h2>#Tertiary</h2>
		</div> <!-- /tertiary -->

<?php
// wrap up content buffering and send content to a variable for master.php to access.
$pageContent = ob_get_contents();
ob_end_clean();

include ("../inc/master-xhtml.php");
?>