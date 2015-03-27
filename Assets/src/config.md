# Styleguide options

### Head

	link(rel="stylesheet" href="../../Assets/dist/css/style.css")
	link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.0/data/styledown.css')
	link(rel='icon' type='image/png' href='../../Assets/dist/img/content/favicon.png')
	script(src='../../Assets/dist/js/head.js')
	script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.0/data/styledown.js')

### Body

	section.wrapper
		div.row
			div.eight.columns.centered
				a(href='../../index.php')
					img(src='../../Assets/dist/img/content/logo-placeholder.png' srcset='../../Assets/dist/img/content/logo-placeholder@2x.png 2x').img-align-center

		div.row
			div#styleguides(sg-content)

	script(src='../../Assets/dist/js/main.js')

	<!-- changes the title value, because Styleguide doesn't have an option for this -->
	script var title = document.getElementsByTagName('title'); $(title).text('Phoenix Style Guide')