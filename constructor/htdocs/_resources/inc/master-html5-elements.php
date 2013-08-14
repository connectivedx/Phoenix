<?php
include('../inc/compiler-variables.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php echo $pageTitle; ?></title>
	<meta charset="UTF-8">
	<meta name="description" content="<?php echo $metaDescription; ?>" />
	<meta name="keywords" content="" />
	<meta name="author" content="ISITE Design" />
    <meta name="apple-mobile-web-app-title" content="CUSTOM SHORT NAME">
	
    <!-- icon and tile color in hex # for Windows phones -->
    <meta name="msapplication-TileImage" content="http://fed.isitedesign.us/content/fed-template/img/apple-touch-icon-144x144.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	
	<link rel="stylesheet" media="all" href="../css/global-html5-classes.php?maxWidth=<?php echo $maxWidth; ?>" />
	<link rel="stylesheet" media="print" href="../css/print.css" />
	
	<?php
		if(isset($_GET['js[modernizr.js]'])){
			echo '<script src="../js/modernizr.js"></script>';
		}
	?>
	<script src="../js/namespace.js?namespace=<?php echo $projectNamespace; ?>"></script>
	<?php echo $headerAdds; ?>
	
	<!-- For everything else --> 
	<link rel="shortcut icon" href="../img/favicon.png"> 
    <!-- 57x57 (precomposed) for iPhone 3GS, 2011 iPod Touch and older Android devices -->
	<link rel="apple-touch-icon-precomposed" href="../img/apple-touch-icon-precomposed.png"> 
	<!-- 72x72 (precomposed) for 1st generation iPad, iPad 2 and iPad mini -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../img/apple-touch-icon-72x72.png"/>
    <!-- 114x114 (precomposed) for iPhone 4, 4S, 5 and 2012 iPod Touch -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../img/apple-touch-icon-114x114.png"/>
	<!-- 144x144 (precomposed) for iPad 3rd and 4th generation -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../img/apple-touch-icon-144x144.png"/>
</head>

<body class="<?php echo $bodyClass; ?>">
<div class="wrapper">
	<header role="banner"> 
		<a class="brand" href="#"><img src="../img/content/logo.png" alt="Company&rsquo;s name"></a>
		<ul class="accessibility">
			<li><a href="#content" tabindex="1" accesskey="2">Skip to main content</a></li>
			<li><a href="#nav" accesskey="3">Skip to navigation</a></li>
			<li><a href="#" accesskey="1">Return to homepage</a></li>
		</ul>
	</header>
	<div id="content"> 
		<?php echo $pageContent; ?> 
	</div>
	<!-- /#content -->
	
	<footer role="contentinfo">
		<h2>footer</h2>		
		<ul class="meta">
			<li>Copyright &copy; <?php echo date('Y'); ?> Client Name</li>
		</ul>
	</footer>
	<?php include("nav-html5-elements.php"); ?>
	
	<div class="site-utility">
		<form id="search" method="post" action="#">
			<fieldset>
				<label for="search-text">Search</label>
				<input id="search-text" type="text" class="input-setter" />
				<button type="submit">Search</button>
			</fieldset>
		</form>
	</div><!-- /.site-utility -->
</div><!-- /.wrapper -->
<script src="../js/jquery-1.7.2.min.js"></script> 
<script src="../js/library.js"></script>
<script src="../js/global.js"></script>
<?php echo $footerAdds; ?>
</body>
</html>