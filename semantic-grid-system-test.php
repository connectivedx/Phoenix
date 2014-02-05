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
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" media="all" href="_resources/css/style.css" />
	<script type="text/javascript" src="_resources/js/modernizr.js"></script>
	<script type="text/javascript" src="_resources/js/respond.js"></script>
	<title>Semantic Grid System Test</title>
</head>
<body>
	<div class="row">
		<h1>Three column, semantic example (16 column grid)</h1>
	</div>

	<section class="wrapper colgrid-visible">
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
	</section>

	<div class="row">
		<h1>Three column, semantic hybrid-grid example (24 column grid)</h1>
	</div>

	<section class="wrapper colgrid-visible">
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
	</section>

	<div class="row">
		<h1>Multi-Grid</h1>
		<p>The multi-grid allows you to define element widths at multiple breakpoints.  Below there are 3 columns on large resolutions, 2 on medium, and 1 on small.</p>
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

	<script type="text/javascript" src="_resources/js/jquery.min.js"></script>
</body>
</html>