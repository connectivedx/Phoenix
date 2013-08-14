<ul id="nav">
	<?php if (isset($navItem)) { ?>
	<li id="nav1"><a href="#" <?php if ($navItem == 'nav1') echo " class='on'"; ?>>Nav1</a></li>
	<li id="nav2"><a href="#" <?php if ($navItem == 'nav2') echo " class='on'"; ?>>Nav2</a></li>
	<li id="nav3"><a href="#" <?php if ($navItem == 'nav3') echo " class='on'"; ?>>Nav3</a></li>
   <?php } else { ?>
	<li><a href="#" class="nav-">Nav1</a></li>
	<li><a href="#" class="nav-">Nav2</a></li>
	<li><a href="#" class="nav-">Nav3</a></li>
   <?php } ?>
</ul><!-- /nav -->	