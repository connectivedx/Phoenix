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
		$numbers = array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six");
		$gridSize = 12;
	?>

	<section>
		<div class="row">
			<h1>Grid System Test</h1>
		</div>
		<div class="row">
			<h2>Standard classes</h2>
		</div>

		<?php
			// output all column widths for divisors of your gridSize
			for ($divisor = 1; $divisor < $gridSize; $divisor++) {
				if ($gridSize % $divisor === 0) {
					echo '<div class="row">';

					$columnText = ($divisor === 1) ? ' column' : ' columns';

					for ($j = 0; $j < ($gridSize / $divisor); $j++) {
						echo '<div class="' . $numbers[$divisor - 1] . $columnText . '">' . $numbers[$divisor - 1] . '</div>';
					}

					echo '</div>';
				}
			}

			// output all classes from 1 to gridSize
			for ($i = 0; $i < $gridSize; $i++) {
				if (array_key_exists($i, $numbers)) {
					$firstColumnWidth = $numbers[$i];
				}

				if (array_key_exists(($gridSize - $i - 2), $numbers)) {
					$secondColumnWidth = $numbers[$gridSize - $i - 2];
				}

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
	</section>

	<section>
		<div class="row">
			<h2>Position classes</h2>
		</div>

		<?php
			for ($i = 0; $i < $gridSize; $i++) {
				if (array_key_exists($i, $numbers)) {
					$firstColumnWidth = $numbers[$i];
				}

				if (array_key_exists(($gridSize - $i - 2), $numbers)) {
					$secondColumnWidth = $numbers[$gridSize - $i - 2];
				}

				if (array_key_exists(($gridSize - $i - 1), $numbers)) {
					$secondColumnPosition = $numbers[$gridSize - $i - 1];
				}

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
					echo '<div class="' . $firstColumnWidth . ' ' . $firstColumnText . ' position-' . $secondColumnPosition . '">' . $firstColumnWidth . ' position ' . $secondColumnPosition . '</div>';
					echo '<div class="' . $secondColumnWidth . ' ' . $secondColumnText . ' position-one">' . $secondColumnWidth . ' position one</div>';
				}

				// end row
				echo '</div>';
			}
		?>
	</section>

	<section>
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
	</section>
<?php
	include_once 'inc/foot.php';
?>