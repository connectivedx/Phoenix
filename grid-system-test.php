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
	<link rel="stylesheet" type="text/css" media="all" href="_resources/css/style.css" />
	<title>Grid System Test</title>    
</head>
<body>
	<style type="text/css">
		.column, .columns {
			border: 1px solid black;
			padding: 5px;
			text-align: center;
		}
	</style>
	
	<?php
		$numbers = array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen');
		$gridSize = 16;
		$hybridGridSize = 16;
	?>
	<section class="content">
		<div class="row">
			<h1>Grid System Test</h1>
		</div>

		<div class="row">
			<h2>Standard classes</h2>
		</div>

		<?php
			for ($i = 0; $i < $gridSize; $i++) {
				$firstColumnWidth = $numbers[$i];
				$secondColumnWidth = $numbers[$gridSize - $i - 2];

				echo '<div class="row colgrid-visible">';

				// adjust text
				if ($i == 0) {
					$firstColumnText = 'column';
					$secondColumnText = 'columns';
				}
				else if ($i == $gridSize - 1) {
					$firstColumnText = 'columns';
					$secondColumnText = 'column';
				}
				else {
					$firstColumnText = 'columns';
					$secondColumnText = 'columns';
				}

				// display columns
				echo '<div class="' . $firstColumnWidth . ' ' . $firstColumnText . '">' . $firstColumnWidth . '</div>';

				if ($i < $gridSize - 1) {
					echo '<div class="' . $secondColumnWidth . ' ' . $secondColumnText . '">' . $secondColumnWidth . '</div>';
				}

				// end row
				echo '</div>';
			}
		?>

		<div class="row">
			<h2>Push and pull classes</h2>
		</div>

		<?php
			for ($i = 0; $i < $gridSize; $i++) {
				$firstColumnWidth = $numbers[$i];
				$secondColumnWidth = $numbers[$gridSize - $i - 2];

				echo '<div class="row colgrid-visible">';

				// adjust text
				if ($i == 0) {
					$firstColumnText = 'column';
					$secondColumnText = 'columns';
				}
				else if ($i == $gridSize - 2) {
					$firstColumnText = 'columns';
					$secondColumnText = 'column';
				}
				else {
					$firstColumnText = 'columns';
					$secondColumnText = 'columns';
				}
				
				// display columns
				if ($i < $gridSize - 1) {
					echo '<div class="' . $firstColumnWidth . ' ' . $firstColumnText . ' push_' . $secondColumnWidth . '">' . $firstColumnWidth . ' push ' . $secondColumnWidth . '</div>';
					echo '<div class="' . $secondColumnWidth . ' ' . $secondColumnText . ' pull_' . $firstColumnWidth . '">' . $secondColumnWidth . ' pull ' . $firstColumnWidth . '</div>';
				}

				// end row
				echo '</div>';
			}
		?>

		<div class="row">
			<h1>Hybrid Grid System</h1>
		</div>

		<div class="row">
			<h2>Standard Classes</h2>
		</div>

		<div class="row sixteen colgrid">
		<?php
			for ($i = 0; $i < $hybridGridSize; $i++) {
				$firstColumnWidth = $numbers[$i];
				$secondColumnWidth = $numbers[$hybridGridSize - $i - 2];

				echo '<div class="row">';

				// adjust text
				if ($i == 0) {
					$firstColumnText = 'column';
					$secondColumnText = 'columns';
				}
				else if ($i == $hybridGridSize - 2) {
					$firstColumnText = 'columns';
					$secondColumnText = 'column';
				}
				else {
					$firstColumnText = 'columns';
					$secondColumnText = 'columns';
				}
				
				// display columns
				if ($i < $hybridGridSize - 1) {
					echo '<div class="' . $firstColumnWidth . ' ' . $firstColumnText . '">' . $firstColumnWidth . '</div>';
					echo '<div class="' . $secondColumnWidth . ' ' . $secondColumnText . '">' . $secondColumnWidth . '</div>';
				}

				// end row
				echo '</div>';
			}
		?>
		</div>

		<div class="row">
			<h2>Push and Pull Classes</h2>
		</div>

		<div class="row sixteen colgrid">
		<?php
			for ($i = 0; $i < $hybridGridSize; $i++) {
				$firstColumnWidth = $numbers[$i];
				$secondColumnWidth = $numbers[$hybridGridSize - $i - 2];

				echo '<div class="row">';

				// adjust text
				if ($i == 0) {
					$firstColumnText = 'column';
					$secondColumnText = 'columns';
				}
				else if ($i == $hybridGridSize - 2) {
					$firstColumnText = 'columns';
					$secondColumnText = 'column';
				}
				else {
					$firstColumnText = 'columns';
					$secondColumnText = 'columns';
				}
				
				// display columns
				if ($i < $hybridGridSize - 1) {
					echo '<div class="' . $firstColumnWidth . ' ' . $firstColumnText . ' push_' . $secondColumnWidth . '">' . $firstColumnWidth . ' push ' . $secondColumnWidth . '</div>';
					echo '<div class="' . $secondColumnWidth . ' ' . $secondColumnText . ' pull_' . $firstColumnWidth . '">' . $secondColumnWidth . ' pull ' . $firstColumnWidth . '</div>';
				}

				// end row
				echo '</div>';
			}
		?>
		</div>
	</section>

	<script type="text/javascript" src="_resources/js/jquery.min.js"></script>
	<script type="text/javascript">
		$('.colgrid-visible').wrapInner('<div class="colgrid-image" />');
	</script>
</body>
</html>