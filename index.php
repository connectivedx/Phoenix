<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>ISITE Design | FED Template Engine v0.1 Alpha</title>
	<link rel="stylesheet" href="_resources/css/constructor.css" />
	<script src="_resources/js/head.js"></script>
</head>

<body>
	<form id="template-options">
		<fieldset id="main">
			<legend><span>Please use the options below to construct your project template.</span></legend>
			<ol>
				<li>
					<fieldset>
						<legend>Meta options</legend>
						<ol>
							<li>
								<label>Project Namespace</label>
								<input type="text" value="" data-key="js-namespace" />
							</li>						
							<li>
								<label>Project Meta Title</label>
								<input type="text" data-key="meta-title" />
							</li>
							<li>
								<label>Project Meta Description</label>
								<input type="text" data-key="meta-description" />
							</li>
						</ol>
					</fieldset>
				</li>	
		
				<li>
					<fieldset>
						<legend>Template Options</legend>
						<ol>
							<li id="template-type">
								<label>Template Type</label>
								<select data-key="template-type" name="template-type">
									<option value="index-html5-classes.php">HTML5 Classes (Depreciated)</option>
									<option value="index-html5-elements.php">HTML5 Elements</option>
									<option value="index-html5-responsive.php">HTML5 Responsive</option>
								</select>
							</li>
							<li id="dimension-options">
								<label>Template's Max Width</label>
								<input type="text" data-key="maxWidth" name="maxWidth" value="960px" />
								<label>Column Count</label>
								<input type="text" data-key="columnCount" name="columnCount" value="12" />
								<label>Gutter Width</label>
								<input type="text" data-key="gutterWidth" name="gutterWidth" value="20px" />
							</li>
						</ol>
					</fieldset>
				</li>
				<li id="layout-options">
					<fieldset>
						<legend>Layout Options</legend>
						<ol>
							<li>
								<fieldset>
									<legend>Header Options</legend>
									<ol>
										<li>
											<label>Header Width</label>
											<select data-key="css-header">
												<option value="fixed">Fixed Width</option>
												<option value="full">Full Width</option>
											</select>
										</li>																												
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Page Column Options</legend>
									<ol>	
										<li>
											<label><input type="checkbox" checked="checked" disabled="disabled" /> One Columns</label>
														
											<!-- I could not think of any options for a one column layout -->
										</li>
										<li>
											<label><input type="checkbox" /> Two Columns</label>
														
											<fieldset class="hide">
												<legend>One Column options</legend>
												<ol>
													<li>
														<label>Primary Column Width</label>
														<input type="text" />
													</li>
													<li>
														<label>Secondary Column Width</label>
														<input type="text" />
													</li>															
												</ol>
											</fieldset>													
										</li>
										<li>
											<label><input type="checkbox" /> Three Columns</label>
											<fieldset class="hide">
												<legend>One Column options</legend>
												<ol>
													<li>
														<label>Primary Column Width</label>
														<input type="text" />
													</li>
													<li>
														<label>Secondary Column Width</label>
														<input type="text" />
													</li>
													<li>
														<label>Tertiary Column Width</label>
														<input type="text" />
													</li>																														
												</ol>
											</fieldset>	
										</li>
									</ol>
								</fieldset>
							</li>																								
						</ol>
					</fieldset>
				</li>
				<!-- Sass code is going to stay commented out until it's ready
				<li>
					<fieldset>
						<legend>Sass Options</legend>
						<ol>
							<?php
								if ($outerHandle = opendir('_resources/scss')) {
									while (false !== ($outerEntry = readdir($outerHandle))) {
										if ($outerEntry != "." && $outerEntry != ".." && $outerEntry != ".DS_Store" && $outerEntry != "style.scss") {
											echo '<li>';
												echo '<fieldset>';
													echo '<legend>' . ucfirst($outerEntry) . '</legend>';
												echo '<ol>';
													if ($innerHandle = opendir('_resources/scss/' . (string)$outerEntry)) {
														while (false !== ($innerEntry = readdir($innerHandle))) {
															if ($innerEntry != "." && $innerEntry != ".." && $innerEntry != "_all.scss") {
																echo '<li>';
																	echo '<label><input type="checkbox" value="" name="scss[' . ucfirst($innerEntry) . ']" />' . ucfirst($innerEntry) . '</label>';
																echo '</li>';
															}
														}
													}
												echo '</ol>';
												echo '</fieldset>';
											echo '</li>';
										}
									}
								}
							?>
						</ol>
					</fieldset>
				</li>		
				-->		
				<li>
					<fieldset>
						<legend>JavaScript Options</legend>
						<ol>								
							<li>
								<fieldset>
									<legend>Form Validation</legend>
									<ol>
										<!-- Pull from js/forms/ folder -->
										<?php
											if ($handle = opendir('_resources/js/forms')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>										
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Filmstrips</legend>
									<ol>
										<?php
											if ($handle = opendir('_resources/js/filmstrips')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Rotators</legend>
									<ol>
										<?php
											if ($handle = opendir('_resources/js/rotators')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Modals / Lightboxes</legend>
									<ol>
										<?php
											if ($handle = opendir('_resources/js/lightboxes')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>
									</ol>
								</fieldset>
							</li>
							<li>
								<fieldset>
									<legend>Tabs</legend>
									<ol>
										<?php
											if ($handle = opendir('_resources/js/tabs')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>
									</ol>
								</fieldset>
							</li>																																		
							<li>
								<fieldset>
									<legend>Helper Functions</legend>
									<ol>
										<?php
											if ($handle = opendir('_resources/js/helpers')) {
 
												/* This is the correct way to loop over the directory. */
												while (false !== ($entry = readdir($handle))) {
													if ($entry != "." && $entry != "..") {
														echo '<li>';
															echo '<label><input type="checkbox" value="" name="js['.ucfirst($entry).']" />'.ucfirst($entry).'</label>';		
														echo '</li>';
													}
												}

												closedir($handle);
											}				
										?>
									</ol>
								</fieldset>
							</li>
						</ol>
					</fieldset>
				</li>
				<li>
					<fieldset>
						<legend>Font Options</legend>
						<ol>
							<li>
								<label>Font Measurement System</label>
								<select data-key="css-fontUnits">
									<option value="rem-em">REM / EM Fallback</option>
									<option value="rem">REM Only</option>
								</select>
							</li>
							<li>
								<label>Body Font Size</label>
								<input type="text" value="" data-key="css-baseFontSize" />
							</li>
							<li>
								<label>Typekit Url</label>
								<input type="text" value="" data-key="css-fontFamilies" />										
							</li>
						</ol>
					</fieldset>
				</li>
			</ol>
		</fieldset>
	</form>
	<iframe id="constructor-preview" src="constructor/htdocs/_resources/html/index-html5-elements.php"></iframe>
	<script src="_resources/js/constructor.js"></script>
</body>
</html>