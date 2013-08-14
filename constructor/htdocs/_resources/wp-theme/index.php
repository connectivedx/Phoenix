<?php get_header(); ?>
		<ul class="hfeed">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<li class="hentry">
				<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
					<header>
						<h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
						<?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>
					</header>
					<?php the_content(); ?>
					<footer>
						<?php the_tags('Tags: ', ', ', '<br />'); ?>
						Posted in
						<?php the_category(', ') ?>
						|
						<?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?>
					</footer>
				</article>
			</li>
			<?php endwhile; ?>
		</ul><!-- /.hfeed -->
		<?php include (TEMPLATEPATH . '/inc/nav.php' ); ?>
		<?php else : ?>
		<h2>Not Found</h2>
		<?php endif; ?>
	</div><!-- / [role="main"] -->
	<?php get_sidebar(); ?>
</div><!-- /.wrapper -->
<?php get_footer(); ?>