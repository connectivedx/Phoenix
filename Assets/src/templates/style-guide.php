<?php
	$pageTitle = 'Style Guide';
	include_once 'inc/head.php';
?>
	<section class="wrapper">
		<div class="row" id="headings">
			<div class="twelve columns">
				<h1>Level 1 heading</h1>
				<h2>Level 2 heading</h2>
				<h3>Level 3 heading</h3>
				<h4>Level 4 heading</h4>
			</div>
		</div>

		<div class="row divider" id="typography">
			<div class="twelve columns">
				<h1>Level 1 heading</h1>
				<p>
					This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.
				</p>

				<h2>Level 2 heading</h2>
				<p>
					This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.
				</p>

				<h3>Level 3 heading</h3>
				<p>
					This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.
				</p>

				<h4>Level 4 heading</h4>
				<p>
					This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.
				</p>
			</div>
		</div>

		<div class="row divider">
			<div class="twelve columns">
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
			<div class="twelve columns">
				<h1>Lists</h1>
			</div>
		</div>
		<div class="row">
			<div class="six columns">
				<h2>Unordered List</h2>
				<ul>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the listReally long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list</li>
				</ul>
				<h2>Unordered List with Links</h2>
				<ul class="links">
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
					<li><a href="#">Short Item in the list</a></li>
				</ul>
			</div>
			<div class="six columns">
				<h2>Ordered List:</h2>
				<ol>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Short Item in the list</li>
					<li>Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the listReally long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list, Really long item in the list</li>
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
			<div class="twelve columns">
				<h1>Form Styles</h1>
			</div>
		</div>
		<div class="row">
			<div class="six columns">
				<form action="#">
					<fieldset>
						<legend>Text Input</legend>
						<h2>Text Input</h2>
						<ol>
							<li>
								<label for="testinput">Label for the input</label>
								<input type="text" id="testinput" placeholder="Placeholder for the input">
							</li>
							<li>
								<label for="testtextarea">Label for the Textarea</label>
								<textarea id="testtextarea" cols="30" rows="5" placeholder="Placeholder for the textarea"></textarea>
							</li>
							<li>
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
			<div class="six columns">
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
							<label for="testmultipleselect">Label for the multiple select</label>
							<select id="testmultipleselect" multiple>
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
			</div>
		</div>

		<div class="row divider">
			<div class="twelve columns">
				<h1>Badges</h1>
				<span class="badge-primary">Primary badge</span>
				<span class="badge-secondary">Secondary badge</span>
			</div>
		</div>

		<div class="row divider">
			<div class="twelve columns">
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

				<h2 class="divider-secondary">Vertical - Left</h2>
				<div class="responsive-tabs responsive-tabs-vertical-left">
					<h3>Tab 1</h3>
					<div>
						Tab 1 content
					</div>

					<h3>Tab 2</h3>
					<div class="responsive-tabs__panel--active">Tab 2 content</div>

					<h3>Tab 3</h3>
					<div>Tab 3 content</div>
				</div>

				<h2 class="divider-secondary">Vertical - Right</h2>
				<div class="responsive-tabs responsive-tabs-vertical-right">
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
			<div class="six columns">
				<h1>Modals</h1>
				<ul>
					<li>
						<a href="http://www.youtube.com/embed/sVxT0vrHeyM" class="fancybox fancybox.iframe">Fancybox - Youtube (iframe)</a>
					</li>
				</ul>
			</div>
			<div class="six columns">
				<h1>Tooltips</h1>
				<ul>
					<li>
						<a href="#" title="This is a tooltip" class="tooltip-tipsy">Tipsy</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="row divider">
			<div class="twelve columns">
				<h1>Aspect Ratios</h1>
			</div>
		</div>
		<div class="row">
			<div class="six columns">
				<h2>Video - 16:9</h2>
				<div class="video-container">
					<iframe src="//www.youtube.com/embed/Xz6jt_aSFg0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			<div class="six columns">
				<h2>Map - 4:3</h2>
				<div class="map-container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1397.4527187648691!2d-122.69309834046989!3d45.532108444257446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549509fb37a063b5%3A0x9737d6d4271c1fae!2s2030+NW+Pettygrove+St%2C+Portland%2C+OR+97209!5e0!3m2!1sen!2sus!4v1428075466309" width="600" height="450" frameborder="0" style="border:0"></iframe>
				</div>
			</div>
		</div>

		<div class="row divider">
			<div class="twelve columns">
				<h1>Quick Column Layouts</h1>
				<p>
					Classes are available to build quick column layouts that flow naturally on all resolutions.  The classes are two-up, three-up, and four-up.  They signify how many elements will be displayed side-by-side at the highest resolution.  As in the below examples, the classes are placed on the elements for which you wish to apply the specified number of side-by-side elements.
				</p>
				<p><strong>NOTE:</strong> these elements must be placed in a wrapping container for the proper spacing and flow.</p>

				<h2>.two-up</h2>
				<div class="wrapper">
					<div class="two-up">
						<img src="http://fpoimg.com/700x250?text=Two-Up" alt="">
					</div>
					<div class="two-up">
						<img src="http://fpoimg.com/700x250?text=Two-Up" alt="">
					</div>
					<div class="two-up">
						<img src="http://fpoimg.com/700x250?text=Two-Up" alt="">
					</div>
					<div class="two-up">
						<img src="http://fpoimg.com/700x250?text=Two-Up" alt="">
					</div>
				</div>

				<h2>.three-up</h2>
				<div class="wrapper">
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
					<div class="three-up">
						<img src="http://fpoimg.com/700x250?text=Three-Up" alt="">
					</div>
				</div>

				<h2>.four-up</h2>
				<div class="wrapper">
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
					<div class="four-up">
						<img src="http://fpoimg.com/700x250?text=Four-Up" alt="">
					</div>
				</div>
			</div>
		</div>

	</section><!-- /.wrapper -->
<?php
	include_once 'inc/foot.php';
?>