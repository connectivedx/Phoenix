<?php
	$pageTitle = 'Semantic Grid System Test';
	include_once 'inc/head.php';
?>
	<div class="wrapper">
		<h1 class="row">Three column, semantic example (16 column grid)</h1>
	</div>

	<header class="row">
		Header
	</header>

	<section class="wrapper">
		<article class="layout-primary">
			<h2>Primary</h2>
			<p>This is a nine column container.  It will hold your primary content.  It has been pushed to be placed in the appropriate place in the layout.</p>

			<section class="nested wrapper">
				<div class="two-up">
					This is an eight column sub-layout using a class of "two-up".
				</div>
				<div class="two-up">
					This is an eight column sub-layout using a class of "two-up".
				</div>
			</section>
		</article>

		<nav class="layout-secondary">
			<h3>Secondary</h3>
			<p>This is a four column container.  It will hold navigation content.  It has been pulled to be placed in the left rail on desktops and tablets, but will be below the main content on mobile.</p>
		</nav>

		<aside class="layout-tertiary">
			<h3>Tertiary</h3>
			<p>This is a three column container.  It will hold tertiary content in the right rail on desktops and tablets, but will be at the bottom on mobile because it has not been pushed or pulled.</p>
		</aside>

		<div class="layout-centered">
			<h3>Centered</h3>
			<p>This is a centered element.</p>
		</div>
	</section>

	<footer class="row">
		Footer
	</footer>

	<div class="wrapper">
		<h1 class="row">Three column, semantic hybrid-grid example (24 column grid)</h1>
	</div>

	<header class="row">
		Header
	</header>

	<section class="wrapper">
		<article class="layout-primary-hybrid">
			<h2>Primary</h2>
			<p>This is a sixteen column container.  It will hold your primary content.  It has been pushed to be placed in the appropriate place in the layout.</p>

			<section class="nested wrapper">
				<div class="two-up">
					This is an eight column sub-layout using a class of "two-up".
				</div>
				<div class="two-up">
					This is an eight column sub-layout using a class of "two-up".
				</div>
			</section>
		</article>

		<nav class="layout-secondary-hybrid">
			<h3>Secondary</h3>
			<p>This is a four column container.  It will hold navigation content.  It has been pulled to be placed in the left rail on desktops and tablets, but will be below the main content on mobile.</p>
		</nav>

		<aside class="layout-tertiary-hybrid">
			<h3>Tertiary</h3>
			<p>This is a four column container.  It will hold tertiary content in the right rail on desktops and tablets, but will be at the bottom on mobile because it has not been pushed or pulled.</p>
		</aside>

		<div class="layout-centered-hybrid">
			<h3>Centered</h3>
			<p>This is a centered element.</p>
		</div>
	</section>

	<footer class="row">
		Footer
	</footer>

	<div class="wrapper">
		<h1 class="row">Multi-Grid</h1>
		<p class="row">The multi-grid allows you to define element widths at multiple breakpoints.  Below there are 3 columns on large resolutions, 2 on medium, and 1 on small.</p>
	</div>

	<div class="row">
		<ul class="multi-grid">
			<li>
				Column 1
			</li>
			<li>
				Column 2
			</li>
			<li>
				Column 3
			</li>
		</ul>
	</div>
<?php
	include_once 'inc/foot.php';
?>