<?php include_once 'functions.php'; ?>
<!DOCTYPE html>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]-->
<!--[if lt IE 7 ]><html class="no-js oldie ie6" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js oldie ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js oldie ie8" lang="en"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
	<title><?php echo $pageTitle; ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="index, follow">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="ISITE Design">
	<meta name="apple-mobile-web-app-title" content="Phoenix">

	<script src="<?php echo getAsset('Assets/dist/js/head.js');?>"></script>
	<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css">

	<link rel="stylesheet" media="all" href="<?php echo getAsset('Assets/dist/css/style.css');?>">
	<!--[if lte IE 8]>
	<script src="<?php echo getAsset('Assets/dist/js/oldie.js');?>"></script>
	<![endif]-->

	<!-- Serve one icon for all Apple devices -->
	<link rel="apple-touch-icon-precomposed" href="<?php echo getAsset('Assets/dist/img/content/touch-icon.png');?>">
	<!-- icon and tile color in hex # for Windows phones -->
	<meta name="msapplication-TileImage" content="<?php echo getAsset('Assets/dist/img/content/touch-icon.png');?>">
	<meta name="msapplication-TileColor" content="#ffffff">
	<!-- For everything else -->
	<link rel="shortcut icon" type="image/png" href="<?php echo getAsset('Assets/dist/img/content/favicon.png');?>">
</head>

<body class="<?php echo $bodyClass; ?>">
	<div class="row">
		<div class="eight columns centered" style="border: none;">
			<a href="index.php">
				<img src="<?php echo getAsset('Assets/dist/img/content/logo-placeholder.png');?>" alt="Phoenix by ISITE Design" class="img-align-center">
			</a>
		</div>
	</div>