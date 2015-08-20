<?php
	// retrieves and asset from the filesystem, properly accounting for production hashes for cache busting
	function getAsset($assetPath) {
		$fileInfo = pathinfo($assetPath);
		$fileExtension = $fileInfo['extension'];

		$devAssets = glob($assetPath);
		$productionAssets = glob(preg_replace('/\.' . $fileExtension . '$/', '.*$0', $assetPath));

		if (count($devAssets) > 0) {
			return $devAssets[0];
		}
		else {
			return $productionAssets[0];
		}
	}

	function getBodyClass() {
		global $bodyClass;
		if (isset($bodyClass)) {
			echo ' class="'.$bodyClass.'"';
		}
	}