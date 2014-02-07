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
	<title>Complex Layout Test</title>
</head>
<body>
	<div class="row">
		<h1>Multi-column, complex layout where containers have different widths at different breakpoints</h1>
	</div>

	<section class="layout-complex-wrapper">
		<header class="layout-complex-header">
			<h2>Header</h2>
		</header>
		<nav class="layout-complex-nav">
			<h3>Nav</h3>
			<p>This is where your primary navigation items will be.</p>
		</nav>

		<article class="layout-complex-primary">
			<h2>Primary content</h2>
			<p>This container will hold your primary site content.  Things like:</p>
			<h3 class="divider">Lists</h3>
			<ul>
				<li>List item</li>
				<li>List item</li>
				<li>List item</li>
				<li>List item</li>
			</ul>
			<h3 class="divider">Tables</h3>
			<table>
				<thead>
					<tr>
						<th>Column</th>
						<th>Column</th>
						<th>Column</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Row</td>
						<td>Row</td>
						<td>Row</td>
					</tr>
				</tbody>
			</table>
		</article>

		<aside class="layout-complex-tertiary">
			<h3>Aside</h3>
			<p>This will contain content related to your primary content.  Things like:</p>
			<h3 class="divider">Related links</h3>
			<ul>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>
		</aside>

		<footer class="layout-complex-footer">
			<h2>Footer</h2>
			<ul class="meta">
				<li>Meta item</li>
				<li>Meta item</li>
				<li>Meta item</li>
				<li>Meta item</li>
			</ul>
		</footer>
	</section>

	<script type="text/javascript" src="_resources/js/jquery.min.js"></script>
</body>
</html>