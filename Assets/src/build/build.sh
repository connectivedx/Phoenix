#!/bin/bash

[ -z "$1" ] && echo "Missing configuration argument" && exit 1

hash node 2>/dev/null || { echo >&2 "Node is not in the PATH. Install Node.js to correct this."; exit 1; }
hash npm 2>/dev/null || { echo >&2 "NPM is not in the PATH. Install Node.js to correct this."; exit 1; }

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$DIR/.."

# check for a missing node_modules folder, which definitely means we need to npm install
# in production we want to always use npm install on the src directory, but not for the Sassdoc theme; this will prevent CI builds from failing due to missing deps
if [ ! -d sassdoc-theme/node_modules ];
then
	echo "Running npm install for Sassdoc theme"
	NORETRY=1

	cd sassdoc-theme

	if ! npm install;
		then
		echo "npm failed for Sassdoc theme. Exiting."
		exit 1;
	else
		cd ..
	fi
fi

if [ ! -d node_modules ] || [ "$1" == "production" ];
then
	echo "Running npm install"
	NORETRY=1

	if ! npm install;
		then
		echo "npm failed. Exiting."
		exit 1;
	fi
fi

if [ "$1" != "watch" ];
then
	NORETRY=1
fi

if ! node node_modules/gulp/bin/gulp.js $1;
then
	echo "Gulp failed."
	if [ -z "$NORETRY" ];
		then
		echo "Retrying after an npm install in case of new dependencies"

		if ! npm install;
			then
			echo "npm failed. Exiting."
			exit 1;
		fi

		cd sassdoc-theme

		if ! npm install;
			then
			echo "npm failed for Sassdoc theme. Exiting."
			exit 1;
		else
			cd ..
		fi

		node node_modules/gulp/bin/gulp.js $1
	fi
fi