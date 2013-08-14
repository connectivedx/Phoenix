<?php get_header(); ?>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>			
			<article class="post" id="post-<?php the_ID(); ?>" role="article">
				<header>
					<h1><?php the_title(); ?></h1>				
					<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>
				</header>
				<?php the_content(); ?>
			</article>
		<?php endwhile; endif; ?>
	</div><!-- / [role="main"] -->
	<?php get_sidebar(); ?>
</div><!-- /.wrapper -->
<?php get_footer(); ?>