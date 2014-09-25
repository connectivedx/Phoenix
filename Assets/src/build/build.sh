#!/bin/bash

[ -z "$1" ] && echo "Missing configuration argument" && exit 1

hash node 2>/dev/null || { echo >&2 "Node is not in the PATH. Install Node.js to correct this."; exit 1; }
hash npm 2>/dev/null || { echo >&2 "NPM is not in the PATH. Install Node.js to correct this."; exit 1; }

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$DIR/.."

# check for a missing node_modules folder, which definitely means we need to npm install
# in production we want to always use npm install; this will prevent CI builds from failing due to missing deps
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

if [ "$1" == "watch" ];
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

		node node_modules/gulp/bin/gulp.js $1
	fi
fi