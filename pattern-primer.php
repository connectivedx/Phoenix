<!DOCTYPE html>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]-->
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
	<title>Pattern Primer</title>
	<meta charset="UTF-8">
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="ISITE Design">
	<meta name="apple-mobile-web-app-title" content="CUSTOM SHORT NAME">
	
	<!-- icon and tile color in hex # for Windows phones -->
	<meta name="msapplication-TileImage" content="/path/to/touch-icon.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	
	<script type="text/javascript" src="_resources/js/modernizr.js"></script>
	<link rel="stylesheet" media="all" href="_resources/css/style.css">
	<!--[if lte IE8]>
	<script type="text/javascript" src="_resources/js/respond.js"></script>
	<![endif]-->
		
	<!-- For everything else --> 
	<link rel="shortcut icon" href="/path/to/shortcut-icon.png"> 
	<!-- Serve one icon for all Apple devices -->
	<link rel="apple-touch-icon-precomposed" href="/path/to/touch-icon.png"> 
</head>

<body class="">
	<section class="wrapper">
		<div class="row">
			<h1>Level 1 heading</h1>
			<h2>Leven 2 heading</h2>
			<h3>Level 3 heading</h3>
			<h4>Level 4 heading</h4>
			<p>
				This is a paragraph of text. Some of the text may be <em>emphasised</em> and some it might even be <strong>strongly emphasised</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.
			</p>
		</div>

		<div class="row divider">
			<div class="sixteen columns">
				<h1>Table Style</h1>
				<table>
					<thead>
						<tr>
							<th>Lorem Ipsum dolor</th>
							<th>Lorem Ipsum dolor</th>
							<th>Lorem Ipsum dolor</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
						</tr>
						<tr>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
						</tr>
						<tr>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
						</tr>
						<tr>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
							<td>Mauris vestibulum auctor</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="row divider">
			<div class="eight columns">
				<h1>Lists</h1>
				<h2>Unordered List</h2>
				<ul>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
				</ul>
				<h2>Unordered List with Links</h2>
				<ul class="links">
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
				</ul>
				<h2>Unordered List with Arrows</h2>
				<ul class="list-arrow">
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>
						Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the listReally long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list
					</li>
				</ul>
				<h2>Ordered List:</h2>
				<ol>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
				</ol>
				<h2>Ordered List with Links:</h2>
				<ol class="links">
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
				</ol>
			</div>
		</div>

		<div class="row divider">
			<div class="eight columns">
				<h1>Form Styles</h1>
				<form action="#">
					<fieldset>
						<legend>Text Input</legend>
						<h2>Text Input</h2>
						<ol>
							<li>
								<label for="testinput">Label for the input</label>
								<input type="text" id="testinput">
							</li>
							<li>
								<label for="testtextarea">Label for the Textarea</label>
								<textarea id="testtextarea" cols="30" rows="5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit vestibulum. </textarea>
							</li>
							<li>
						</ol>
					</fieldset>
					<fieldset>
						<legend>Selects, Radios, Checkboxes</legend>
						<h2>Selects, Radios, Checkboxes</h2>
						<ol>
							<li>
								<label for="testselect">Label for the select</label>
								<select id="testselect">
									<option>First</option>
									<option>Second</option>
									<option>Third</option>
								</select>
							</li>
							<li>
							<fieldset>
								<legend>Select one of the following:</legend>
								<ol>
									<li>
										<label for="options">Label for the radio options</label>
										<p class="label-secondary">Secondary label for the radio</p>
										<ol class="radio-list">
											<li>
												<input type="radio" name="options" id="radio-option-1" value="option 1">
												<label for="radio-option-1">Option 1</label>
											</li>
											<li>
												<input type="radio" name="options" id="radio-option-2" value="option 2">
												<label for="radio-option-2">Option 2</label>
											</li>
										</ol>
									</li>
								</ol>
							</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Select at least one of the following:</legend>
									<ol>
										<li>
											<label for="checkbox">Label for the checkbox</label>
											<p class="label-secondary">Secondary label for the checkbox</p>
											<ol class="checkbox-list">
												<li>
													<input type="checkbox" name="checkbox" id="checkbox-option-1" value="option 1">
													<label for="checkbox-option-1">Option 1</label>
												</li>
												<li>
													<input type="checkbox" name="checkbox" id="checkbox-option-2" value="option 2">
													<label for="checkbox-option-2">Option 2</label>
												</li>
											</ol>
										</li>
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
								<legend>Inline Checkboxes and Radio Buttons</legend>
								<ol>
									<li>
										<label for="options">Label for the radio options</label>
										<p class="label-secondary">Secondary label for the radio</p>
										<ol class="radio-list">
											<li>
												<input type="radio" name="inline-options" id="inline-radio-option-1" value="option 1">
												<label for="inline-radio-option-1" class="inline">Option 1</label>
												<input type="radio" name="inline-options" id="inline-radio-option-2" value="option 2">
												<label for="inline-radio-option-2" class="inline">Option 2</label>	
											</li>
										</ol>
									</li>
									<li>
										<label for="checkbox">Label for the checkbox</label>
										<p class="label-secondary">Secondary label for the checkbox</p>
										<ol class="checkbox-list">
											<li>
												<input type="checkbox" name="inline-checkbox" id="inline-checkbox-option-1" value="option 1">
												<label for="inline-checkbox-option-1" class="inline">Option 1</label>
												<input type="checkbox" name="inline-checkbox" id="inline-checkbox-option-2" value="option 2">
												<label for="inline-checkbox-option-2" class="inline">Option 2</label>
											</li>
										</ol>
									</li>
								</ol>
								</fieldset>
							</li>
						</ol>
					</fieldset>
					<fieldset>
						<legend>Buttons</legend>
						<h2>Buttons</h2>
						<ol>
							<li>
								<button>Primary button</button>
								<button class="btn-small">Primary button-small</button>
							</li>
							<li>
								<button class="btn-secondary">Secondary button</button>
								<button class="btn-secondary btn-small">Secondary button-small</button>
							</li>
						</ol>
					</fieldset>
					<fieldset>
						<legend>File Uploads</legend>
						<h2>File Uploads</h2>
						<ol>
							<li>
								<button class="custom-file-upload">Select file</button>
								<input type="file" />
							</li>
						</ol>
					</fieldset>
				</form>
			</div>
		</div>

		<div class="row divider">
			<div class="sixteen columns">
				<h1>Badges</h1>
				<span class="badge-primary">Primary badge</span>
				<span class="badge-secondary">Secondary badge</span>
				<span class="badge-tertiary">Tertiary badge</span>
			</div>
		</div>

		<div class="row divider">
			<div class="sixteen columns">
				<h1>Responsive Tabs</h1>
				<h2 class="divider-secondary">Horizontal</h2>
				<div class="responsive-tabs responsive-tabs-horizontal">
					<h3>Tab 1</h3>
					<div>
						Tab 1 content
					</div>

					<h3>Tab 2</h3>
					<div>Tab 2 content</div>

					<h3>Tab 3</h3>
					<div class="responsive-tabs__panel--active">Tab 3 content</div>
				</div>

				<h2 class="divider-secondary">Vertical</h2>
				<div class="responsive-tabs responsive-tabs-vertical">
					<h3>Tab 1</h3>
					<div>
						Tab 1 content
					</div>

					<h3>Tab 2</h3>
					<div class="responsive-tabs__panel--active">Tab 2 content</div>

					<h3>Tab 3</h3>
					<div>Tab 3 content</div>
				</div>
			</div>
		</div>

		<div class="row divider">
			<div class="eight columns">
				<h1>Modals</h1>
				<ul>
					<li>
						<a href="http://www.youtube.com/embed/sVxT0vrHeyM" class="fancybox fancybox.iframe">Fancybox - Youtube (iframe)</a>
					</li>
				</ul>
			</div>
			<div class="eight columns">
				<h1>Tooltips</h1>
				<ul>
					<li>
						<a href="#" title="This is a tooltip" class="tooltip-tipsy">Tipsy</a>
					</li>
				</ul>
			</div>
		</div>
 
	</section><!-- /.wrapper -->
	
	<script src="_resources/js/jquery.min.js"></script>
	<script src="_resources/js/tabs/jquery.responsive-tabs.js"></script>
	<script src="_resources/js/lightboxes/jquery.fancybox.pack.js"></script>
	<script src="_resources/js/tooltips/jquery.tipsy.js"></script>
	<script type="text/javascript">
		$(function() {
			$('.nav-handle').click(function() {
				$('.nav-list').toggleClass('expanded');
			});
			$('select').wrap('<div class="decorator-select"></div>');

			RESPONSIVEUI.responsiveTabs();

			$('.fancybox').fancybox();

			$('.tooltip-tipsy').tipsy({
				gravity: 'w'
			});

			$('.custom-file-upload').click(function(e) {
				e.preventDefault();

				$(this).next('input[type="file"]').click();
			});
		});
	</script>
</body>
</html>