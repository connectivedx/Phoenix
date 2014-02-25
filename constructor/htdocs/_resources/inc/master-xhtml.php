<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title><?php echo $pageTitle; ?></title>

	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />

	<meta name="author" content="ISITE Design" />
    <meta name="apple-mobile-web-app-title" content="CUSTOM SHORT NAME">
	
    <!-- icon and tile color in hex # for Windows phones -->
    <meta name="msapplication-TileImage" content="http://fed.isitedesign.us/content/fed-template/img/apple-touch-icon-144x144.png">
	<meta name="msapplication-TileColor" content="#911014">

	<link rel="stylesheet" media="all" href="../css/constructor.css" type="text/css" />
	<link rel="stylesheet" media="print" href="../css/print.css" type="text/css" />
	
	<!-- can be customized based on what is needed for a specific project at http://modernizr.com 
			- make sure to always include HTML5 Shim/IEPP -->
	<script src="../js/modernizr.js" type="text/javascript"></script>
	<script src="../js/namespace.js" type="text/javascript"></script>
	<?php echo $headerAdds; ?>	
	
	<link rel="shortcut icon" href="../img/favicon.png"> 
    <!-- 57x57 (precomposed) for iPhone 3GS, 2011 iPod Touch and older Android devices -->
	<link rel="apple-touch-icon-precomposed" href="../img/apple-touch-icon-precomposed.png"> 
	<!-- 72x72 (precomposed) for 1st generation iPad, iPad 2 and iPad mini -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../img/apple-touch-icon-72x72.png"/>
    <!-- 114x114 (precomposed) for iPhone 4, 4S, 5 and 2012 iPod Touch -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../img/apple-touch-icon-114x114.png"/>
	<!-- 144x144 (precomposed) for iPad 3rd and 4th generation -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../img/apple-touch-icon-144x144.png"/>
</head>

<body class="<?php echo $bodyClass; ?>">
<div id="wrapper">

	<div id="header">
		<a id="brand" href="#"><img alt="Company's name" src="../img/content/logo.png"></a>
		<ul class="accessibility">
			<li><a href="#content" tabindex="1" accesskey="2">Skip to Content</a></li>
			<li><a href="#nav" accesskey="3">Skip to Navigation</a></li>
			<li><a href="#" accesskey="1">Return to Homepage</a></li>
		</ul>
	</div><!-- /#header -->

	<div id="content">
		<?php echo $pageContent; ?>
	</div><!-- /#content -->

	<div id="footer">
		<h2>#footer</h2>
	</div> <!-- /#footer -->
	<?php include("nav-xhtml.php"); ?>	
</div><!-- /#wrapper -->
<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
<script src="../js/library.js" type="text/javascript"></script>
<?php echo $footerAdds; ?>
<script type="text/javascript" src="../js/global.js"></script>
</body>
</html>