<?php include_once 'functions.php'; ?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<title><?php echo $pageTitle; ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="index, follow">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Connective DX">
	<meta name="apple-mobile-web-app-title" content="Phoenix">

	<script src="<?php echo getAsset('Assets/dist/js/head.js');?>"></script>
	<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet" type="text/css">

	<link rel="stylesheet" media="all" href="<?php echo getAsset('Assets/dist/css/style.css');?>">

	<!-- Serve one icon for all Apple devices -->
	<link rel="apple-touch-icon-precomposed" href="<?php echo getAsset('Assets/dist/img/content/touch-icon.png');?>">
	<!-- icon and tile color in hex # for Windows phones -->
	<meta name="msapplication-TileImage" content="<?php echo getAsset('Assets/dist/img/content/touch-icon.png');?>">
	<meta name="msapplication-TileColor" content="#ffffff">
	<!-- For everything else -->
	<link rel="icon" type="image/png" href="<?php echo getAsset('Assets/dist/img/content/favicon.png');?>">
	<!--[if IE]><link rel="shortcut icon" href="/favicon.ico"><![endif]-->
</head>

<body class="<?php echo $bodyClass; ?>">
	<!--[if lte IE 8]>
		<div class="browser-alert">
			You&rsquo;re using an older web browser version that may make your computer unsafe. <a href="http://browsehappy.com/">Download the latest version</a> to keep your information safe and improve your experience.
		</div>
	<![endif]-->
	<header>
		<div class="row">
			<div class="eight columns centered" style="border: none;">
				<a href="index.php">
					<img src="<?php echo getAsset('Assets/dist/img/content/logo-placeholder.png');?>" srcset="<?php echo getAsset('Assets/dist/img/content/logo-placeholder@2x.png');?> 2x" alt="Phoenix by Connective DX" class="img-align-center">
				</a>
			</div>
		</div>
	</header>