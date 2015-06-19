<?php
	$pageTitle = 'Complex Layout Test';
	include_once 'inc/head.php';
?>
	<section class="layout-complex-wrapper">
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
			<h3 class="divider">Forms</h3>
			<fieldset>
				<legend>Text Input</legend>
				<ol>
					<li>
						<label for="testinput">Label for the input</label>
						<input type="text" id="testinput">
					</li>
					<li>
						<label for="testtextarea">Label for the Textarea</label>
						<textarea id="testtextarea" cols="30" rows="5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit vestibulum. </textarea>
					</li>
				</ol>
			</fieldset>
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
<?php
	include_once 'inc/foot.php';
?>