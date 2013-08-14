<?php
/*

	<style type="text/css" media="screen">
		/* couple of resets -- shouldn't these be the same as the site's?  sorta the point. 
		body{    background-color: #DDDDDD;}
		div { background-color:#fff; padding: 1em;}
		#secondary{    margin-left: -760px;}
		#content{    width: auto;}
		#header {height: auto; margin-bottom: 1em; background-color: #666f66; border: none; color: #fff}
		#header h1 {margin: 0;}
	</style>
*/

$pageTitle = "Type Tests";
$bodyClass = "page-typetest";
//headerAdds for template specific styles/js.  comes after jqeuery, before global.js
$headerAdds = '
<style type="text/css">
	.highlight { border: 1px solid #444; background-color: #555; color: #fff; font-size:120%; padding: .5em 1em;}
</style>
';

// start content buffering for master page
ob_start();
?>

		<section class="primary" role="main">
			<h1>h1 - Type test</h1>
			<p class="highlight">The purpose of this document is to display this site's default <abbr title="Cascading Style Sheets">CSS</abbr> styling for standard <abbr title="HyperText Markup Language">HTML</abbr> elements.</p>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h2>h2 Lorem ipsum </h2>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h3>h3 Lorem ipsum </h3>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer consectetuer adipiscing elit. <a href="#">Aliquam pede</a>.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum. Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em> Donec ut tortor nec  vestibulum consectetuer adipiscing elit.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em>   </p>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.</p>

			<h4>h4 Lorem ipsum </h4>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h5>h5 Lorem ipsum </h5>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h5>Image</h5>
			<img alt="test image" src="../img/css/grey_dot.gif" width="100" height="100" />

			<h5>Unordered List</h5>
			<ul>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </li>
				<li>Short Item in the list</li>
			</ul>

			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p>

			<h5>Ordered List:</h5>
	        <ol>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </li>
				<li>Short Item in the list</li>
			</ol>

   			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p>

			<h5>Blockquote:</h5>
			<blockquote><p>Blockquote Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p></blockquote>

			<h5>Code:</h5>
			<code>Code block Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </code>

			<h5>Definition List:</h5>
			<dl>
			  <dt>DT Lorem Ipsum Dolar</dt>
			  <dd>DD lorem ipdol sumit</dd>
			  <dt>DT Lorem Ipsum Dolar</dt>
			  <dd>DD lorem ipdol sumit</dd>
			  <dt>DT Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </dt>
			  <dd>DD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </dd>
			</dl>

			<h5>Horizontal Rule:</h5>
			<hr />

			<h5>Form:</h5>
			<form action="type_tests.html">
				<fieldset>
				<legend>Form Legend</legend>
				<ol>
					<li>
						<label for="testinput">Label for the input</label>
						<input type="text" id="testinput" />
					</li>

					<li>
						<label for="testselect">Label for the select</label>
						<select id="testselect">
							<option>First</option>
							<option>Second</option>
							<option>Third</option>
						</select>
					</li>
					
					<li>
						<fieldset class="radio">
							<legend>Select one of the following:</legend>
							<ul>
								<li><label><input type="radio" name="options" value="option 1" /> Option 1</label></li>
								<li><label><input type="radio" name="options" value="option 2" /> Option 2</label></li>
							</ul>
						</fieldset>							
					</li>
					<li>
						<fieldset class="checkbox">
							<legend>Select at least one of the following:</legend>
							<ul>
								<li><label><input type="checkbox" name="checkbox" value="option 1" /> Option 1</label></li>
								<li><label><input type="checkbox" name="checkbox" value="option 2" /> Option 2</label></li>
							</ul>
						</fieldset>									
					</li>

					<li>
						<label for="testtextarea">Label for the Textarea</label>
						<textarea id="testtextarea" cols="30" rows="5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit vestibulum. </textarea>
					</li>
				
					<li><button value="button">Button</button></li>
					<li><input type="button" value="input button" /></li>
				</ol>
				</fieldset>
			</form>

			<table>
				<caption>A table summary goes in the caption tag or use aria-describedby attribute on the table tag</caption>
				<thead>
					<tr>
						<th>Vegetable </th>
						<th>Cost per kilo</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Tfoot cell</td>
						<td>The other somewhat longer windeder textardly tfoot, that is "table footer", text is this text, here.</td>
					</tr>
				</tfoot>
				<tbody>
					<tr>
						<td>Lettuce</td>
						<td>$1</td>
					</tr>
					<tr>
						<td>Silver carrots </td>
						<td>$10.50</td>
					</tr>
					<tr>
						<td>Golden turnips </td>
						<td>$100.30</td>
					</tr>
				</tbody>
			</table>


            <address>
				ADDRESS Tag<br />
				1245 House St <br />
				Portland, OR 97211 <br />
				<a href="mailto:email@noreply.com">email@noreply.com</a>
			</address>

		</section><!-- /primary -->

		<section class="secondary" role="complementary">
			<h2>h2 Lorem ipsum </h2>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h3>h3 Lorem ipsum </h3>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer consectetuer adipiscing elit. <a href="#">Aliquam pede</a>.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum. Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em> Donec ut tortor nec  vestibulum consectetuer adipiscing elit.  Vestibulum magna. <strong>Strong Text Here</strong> <em>with emphasis</em>   </p>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.</p>

			<h4>h4 Lorem ipsum </h4>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h5>h5 Lorem ipsum </h5>
			<p>Lorem ipsum dolor sit amet, <em>with emphasis</em> consectetuer adipiscing elit. <a href="#">Aliquam pede</a>. Vestibulum magna. <strong>Strong Text Here</strong> Donec ut tortor nec <a href="#">augue pharetra</a> vestibulum.  </p>

			<h5>Image</h5>
			<img alt="test image" src="../img/css/grey_dot.gif" width="100" height="100" />


			<h5>Unordered List</h5>
			<ul>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </li>
				<li>Short Item in the list</li>
			</ul>

			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p>

			<h5>Ordered List:</h5>
	        <ol>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Short Item in the list</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum. </li>
				<li>Short Item in the list</li>
			</ol>

   			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p>

			<h5>Blockqoute:</h5>
			<blockquote><p>Blockquote Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Donec ut tortor nec augue pharetra vestibulum.  </p></blockquote>

		</section><!-- /secondary  -->
		
		<aside>
		
		</aside>

<?php
// wrap up content buffering and send content to a variable for master.php to access.
$pageContent = ob_get_contents();
ob_end_clean();

include ("../inc/master-html5-elements.php");
?>