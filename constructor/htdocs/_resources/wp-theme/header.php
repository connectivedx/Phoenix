<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->

<head data-template-set="busy-bee">
<meta charset="<?php bloginfo('charset'); ?>">
<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if (is_search()) { ?>
<meta name="robots" content="noindex, nofollow" />
<?php } ?>
<title>
<?php
  if (function_exists('is_tag') && is_tag()) {
	 single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
  elseif (is_archive()) {
	 wp_title(''); echo ' Archive - '; }
  elseif (is_search()) {
	 echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
  elseif (!(is_404()) && (is_single()) || (is_page())) {
	 wp_title(''); echo ' - '; }
  elseif (is_404()) {
	 echo 'Not Found - '; }
  if (is_home()) {
	 bloginfo('name'); echo ' - '; bloginfo('description'); }
  else {
	  bloginfo('name'); }
  if ($paged>1) {
	 echo ' - page '. $paged; }
?>
</title>
<meta name="title" content="<?php
  if (function_exists('is_tag') && is_tag()) {
	 single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
  elseif (is_archive()) {
	 wp_title(''); echo ' Archive - '; }
  elseif (is_search()) {
	 echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
  elseif (!(is_404()) && (is_single()) || (is_page())) {
	 wp_title(''); echo ' - '; }
  elseif (is_404()) {
	 echo 'Not Found - '; }
  if (is_home()) {
	 bloginfo('name'); echo ' - '; bloginfo('description'); }
  else {
	  bloginfo('name'); }
  if ($paged>1) {
	 echo ' - page '. $paged; }
?>">
<meta name="description" content="<?php if ( (is_home()) || (is_front_page()) ) {
    echo ('The San Francisco Rock Project is a nonprofit organization providing intensive performance-based music instruction for young musicians in the San Francisco Bay Area.');
} elseif(is_category()) {
    echo category_description();
} elseif(is_tag()) {
    echo '-tag archive page for this blog' . single_tag_title();
} elseif(is_month()) {
    echo 'archive page for this blog' . the_time('F, Y');
} else {
    echo get_post_meta($post->ID, "Metadescription", true);
}?>">
<meta name="author" content="ISITE Design, Inc.">
<meta name="Copyright" content="Client Name">

<!--  Mobile Viewport meta tag
	j.mp/mobileviewport & davidbcalhoun.com/2010/viewport-metatag 
	device-width : Occupy full width of the screen in its current orientation
	initial-scale = 1.0 retains dimensions instead of zooming out if page height > device height
	maximum-scale = 1.0 retains dimensions instead of zooming in if page width < device width -->
<!-- Uncomment to use - use thoughtfully!
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
	-->

<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.ico">
<!-- For iPhone 4 --> 
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php bloginfo('template_directory'); ?>/img/apple-touch-icon-144x144.png"/>
<!-- For iPad 1--> 
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/img/apple-touch-icon-72x72.png"/>
<!-- For iPhone 3G, iPod Touch and Android --> 
<link rel="apple-touch-icon-precomposed" href="<?php bloginfo('template_directory'); ?>/img/apple-touch-icon-precomposed.png"> 
<!-- For Nokia --> 
<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/img/favicon.png">

<!-- CSS: screen, mobile & print are all in the same file -->
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

<!-- all our JS is at the bottom of the page, except for Modernizr. -->
<script src="<?php bloginfo('template_directory'); ?>/js/modernizr.js"></script>
<script src="http://use.typekit.com/szm3lcl.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="wrapper group">	
	<header role="banner">
		<a href="<?php echo get_settings('home'); ?>/"><img src="<?php bloginfo('template_directory'); ?>/img/content/logo.png" alt="Company Logo"/></a>
		<?php get_search_form(); ?>
	</header>
	<div role="main">