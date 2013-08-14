<?php
	$projectNamespace = (isset($_GET['js-namespace']))?$_GET['js-namespace']:'';
	$pageTitle = (isset($_GET['meta-title']))?$_GET['meta-title']:'';
	$metaDescription = (isset($_GET['meta-description']))?$_GET['meta-description']:'';
	$templateType = (isset($_GET['template-type']))?$_GET['template-type']:'';
	$maxWidth = $_GET['maxWidth'];
	$headerAdds = (isset($headerAdds))?$headerAdds:'';
?>


