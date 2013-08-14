<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<article <?php post_class() ?> id="post-<?php the_ID(); ?>" role="article">
			<header>
				<h1><?php the_title(); ?></h1>
				<?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>
			</header>
			<?php the_content(); ?>				
			<footer>
				<?php the_tags( 'Tags: ', ', ', ''); ?>
			</footer>			
		</article>

	<?php comments_template(); ?>
	<?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
	<?php endwhile; endif; ?>
	</div><!-- / [role="main"] -->
	<?php get_sidebar(); ?>
</div><!-- /.wrapper -->
<?php get_footer(); ?>