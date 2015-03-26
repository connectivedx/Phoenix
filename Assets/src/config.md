# Styleguide options

### Head

	link(rel="stylesheet" href="/Assets/dist/css/style.css")
    link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.0/data/styledown.css')
    link(rel='icon' type='image/png' href='/Assets/dist/img/content/favicon.png')
    script(src='/Assets/dist/js/head.js')
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.0/data/styledown.js')

### Body

	section.wrapper
		div.row
		    h1 Phoenix Style Guide

		    div#styleguides(sg-content)

    script(src='/Assets/dist/js/main.js')

    <!-- changes the title value, because Styleguide doesn't have an option for this -->
    script var title = document.getElementsByTagName('title'); $(title).text('Phoenix Style Guide')