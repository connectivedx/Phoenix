<aside role="complementary">
	<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Sidebar Widgets')) : else : ?>
	<h2>Archives</h2>
	<ul>
		<?php wp_get_archives('type=monthly'); ?>
	</ul>
	<h2>Categories</h2>
	<ul>
		<?php wp_list_categories('show_count=1&title_li='); ?>
	</ul>
	<h2>Subscribe</h2>
	<ul>
		<li><a href="<?php bloginfo('rss2_url'); ?>">Entries (RSS)</a></li>
		<li><a href="<?php bloginfo('comments_rss2_url'); ?>">Comments (RSS)</a></li>
	</ul>
	<?php endif; ?>
</aside><!-- / [role="complementary"]-->