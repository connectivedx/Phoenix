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

$pageTitle = "FED Pattern Primer";
$bodyClass = "page-typetest full";
//headerAdds for template specific styles/js.  comes after jqeuery, before global.js
$headerAdds = '';

// start content buffering for master page
ob_start();
?>

<section class="primary" role="main">
  <div class="group">
    <h1>Level one heading</h1>
    <h2>Level two heading</h2>
    <h3>Level three heading</h3>
    <h4>Level four heading</h4>
    <h5>Level five heading</h5>
    <h6>Level six heading</h6>
  </div>
  <!-- /.group -->
  
  <div class="group">
    <h2>Paragraph Text</h2>
    <p>This is a paragraph of text. Some of the text may be <em>emphasised</em> and some it might even be <strong>strongly emphasised</strong>. Occasionally <q>quoted text</q> may be found within a paragraph &hellip;and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.</p>
  </div>
  <!-- /.group -->
  
  <div class="group">
    <h2>Blockquote</h2>
    <blockquote>
      <p>This text is quoted. A block of quoted text like this is particularly useful when presented as a pull-quote within an article of text.</p>
    </blockquote>
  </div>
  <!-- /.group -->
  
  <div class="group">
    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <ul>
      <li>Short Item in the list</li>
      <li>Short Item in the list</li>
      <li>Short Item in the list</li>
    </ul>
    <h3>Unordered List with Links</h3>
    <ul class="links">
      <li><a href="#">Short Item in the list</a></li>
      <li><a href="#">Short Item in the list</a></li>
      <li><a href="#">Short Item in the list</a></li>
    </ul>
    <h3>Ordered List:</h3>
    <ol>
      <li>Short Item in the list</li>
      <li>Short Item in the list</li>
      <li>Short Item in the list</li>
    </ol>
    <h3>Ordered List with Links:</h3>
    <ol class="links">
      <li><a href="#">Short Item in the list</a></li>
      <li><a href="#">Short Item in the list</a></li>
      <li><a href="#">Short Item in the list</a></li>
    </ol>
  </div>
  <!-- /.group -->
  
  <div class="group">
    <h2>Form Styles</h2>
    <form action="type_tests.html">
      <fieldset>
        <legend>Form Legend</legend>
        <ol>
          <li>
            <label for="testinput">Label for the input</label>
            <input type="text" id="testinput">
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
                <li>
                  <label>
                    <input type="radio" name="options" value="option 1">
                    Option 1</label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="options" value="option 2">
                    Option 2</label>
                </li>
              </ul>
            </fieldset>
          </li>
          <li>
            <fieldset class="checkbox">
              <legend>Select at least one of the following:</legend>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" name="checkbox" value="option 1">
                    Option 1</label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="checkbox" value="option 2">
                    Option 2</label>
                </li>
              </ul>
            </fieldset>
          </li>
          <li>
            <label for="testtextarea">Label for the Textarea</label>
            <textarea id="testtextarea" cols="30" rows="5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit vestibulum. </textarea>
          </li>
          <li>
            <button value="button">Button</button>
          </li>
          <li>
            <input type="button" value="input button">
          </li>
        </ol>
      </fieldset>
    </form>
  </div>
  <!-- /.group -->
  <div class="group">
    <h2>Table Style</h2>
    <table>
      <thead>
        <tr>
          <th>Lorem Ipsum dolor</th>
          <th>Lorem Ipsum dolor</th>
          <th>Lorem Ipsum dolor</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd">
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
        </tr>
        <tr>
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
        </tr>
        <tr class="odd">
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
        </tr>
        <tr class="last">
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
          <td>Mauris vestibulum auctor</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- /.group -->
  
  <div class="group">
  	<h2>Contact Information using Microformats</h2>
  	<address class="vcard">
    	<h4 class="fn org">Name of Organization</h4>
		<p class="adr">
            <span class="street-address">1245 House St</span> <br>
            <span class="locality">Portland</span>, <span class="region">OR</span> <span class="postal-code">97211</span> 
        </p>
		<p>Email: <a href="mailto:email@noreply.com" class="email">email@noreply.com</a></p>
        <p>Tel: <a href="tel:+123 456 7890" class="tel">+123 456 7890</a></p>
	</address>
  
  <div class="group">
    <h2>Fading borders</h2>
    <div class="box">
      <div class="content">
        <p>Lorem ipsum dolor sit amet, with emphasis consectetuer adipiscing elit. Aliquam pede. Vestibulum magna. Strong Text Here Donec ut tortor nec augue pharetra vestibulum.</p>
        <ul>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </div>
      <!-- /.content --> 
    </div>
    <!-- /.box --> 
  </div>
  <!-- /.group --> 
  
</section>
<!-- /primary -->

<?php
// wrap up content buffering and send content to a variable for master.php to access.
$pageContent = ob_get_contents();
ob_end_clean();

include ("../inc/master-html5-responsive.php");
?>
