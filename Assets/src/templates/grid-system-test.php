<?php
	$pageTitle = 'Grid System Test';
	include_once 'inc/head.php';
?>
	<style>
		.column, .columns {
			border: 1px solid black;
			text-align: center;
		}
	</style>
	
	<?php
		$numbers = array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four');
		$gridSize = 12;
		$hybridGridSize = 24;
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

				echo '<div class="row">';

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

				echo '<div class="row">';

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
			<h2>Centered classes</h2>
		</div>

		<?php
			for ($i = 0; $i < $gridSize; $i++) {
				$columnWidth = $numbers[$i];

				echo '<div class="row">';

				// adjust text
				if ($i == 0) {
					$columnText = 'column';
				}
				else {
					$columnText = 'columns';
				}
				
				// display columns
				if ($i < $gridSize - 1) {
					echo '<div class="' . $columnWidth . ' ' . $columnText . ' centered">' . $columnWidth . '</div>';
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

		<div class="twenty-four colgrid">
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

		<div class="twenty-four colgrid">
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

		<div class="row">
			<h2>Centered classes</h2>
		</div>

		<div class="twenty-four colgrid">
		<?php
			for ($i = 0; $i < $gridSize; $i++) {
				$columnWidth = $numbers[$i];

				echo '<div class="row">';

				// adjust text
				if ($i == 0) {
					$columnText = 'column';
				}
				else {
					$columnText = 'columns';
				}
				
				// display columns
				if ($i < $gridSize - 1) {
					echo '<div class="' . $columnWidth . ' ' . $columnText . ' centered">' . $columnWidth . '</div>';
				}

				// end row
				echo '</div>';
			}
		?>
		</div>
	</section>
<?php
	include_once 'inc/foot.php';
?>