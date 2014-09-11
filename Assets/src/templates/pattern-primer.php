<?php
	$pageTitle = 'Pattern Primer';
	include_once 'inc/head.php';
?>
	<section class="wrapper">
		<div class="row">
			<div class="sixteen columns">
				<h1>Level 1 heading</h1>
				<h2>Level 2 heading</h2>
				<h3>Level 3 heading</h3>
				<h4>Level 4 heading</h4>
				<p>This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph …and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.</p>
			</div>
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
			<div class="sixteen columns">
				<h1>Lists</h1>
			</div>
			<div class="eight columns">
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
			</div>
			<div class="eight columns">
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
			<div class="sixteen columns">
				<h1>Form Styles</h1>
			</div>
			<div class="eight columns">
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
			<div class="eight columns">
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
									<li>
										<label for="options-2" class="label-large">Large label for radio options</label>
										<ol class="radio-list">
											<li>
												<input type="radio" name="options-2" id="radio-option-1-2" value="option 1">
												<label for="radio-option-1-2" class="label-large">Large labels scale nicely and wrap properly</label>
											</li>
											<li>
												<input type="radio" name="options-2" id="radio-option-2-2" value="option 2">
												<label for="radio-option-2-2" class="label-large">Large labels scale nicely and wrap properly</label>
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
										<li>
											<label for="checkbox-2" class="label-large">Large label for checkboxes</label>
											<ol class="checkbox-list">
												<li>
													<input type="checkbox" name="checkbox-2" id="checkbox-option-1-2" value="option 1">
													<label for="checkbox-option-1-2" class="label-large">Large labels scale nicely and wrap properly</label>
												</li>
												<li>
													<input type="checkbox" name="checkbox-2" id="checkbox-option-2-2" value="option 2">
													<label for="checkbox-option-2-2" class="label-large">Large labels scale nicely and wrap properly</label>
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
			<div class="sixteen columns">
				<h1>Badges</h1>
				<span class="badge-primary">Primary badge</span>
				<span class="badge-secondary">Secondary badge</span>
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

		<div class="row divider">
			<div class="sixteen columns">
				<h1>Aspect Ratios</h1>
			</div>
			<div class="eight columns">
				<h2>Video - 16:9</h2>
				<div class="video">
					<iframe src="//www.youtube.com/embed/Xz6jt_aSFg0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			<div class="eight columns">
				<h2>Map - 4:3</h2>
				<div class="aspect-ratio-4-3">
					<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1397.4432998107925!2d-122.69317991642879!3d45.532487514497674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sisite+design!5e0!3m2!1sen!2sus!4v1391532768363" frameborder="0" style="border:0"></iframe>
				</div>
			</div>
		</div>
 
	</section><!-- /.wrapper -->
<?php
	include_once 'inc/foot.php';
?>