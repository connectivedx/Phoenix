FED-Template-Engine
===================
# Setup
Once you've cloned or downloaded the project, you'll first need to install NodeJS.  It can be downloaded at http://nodejs.org/download/.  Once Node is installed, setup is dependent on platform.

## Windows
1. Navigate to _resources/src
2. Execute one of the .cmd files, depending on which build you need.  The builds are listed below.

## Mac OS
1. In a Terminal window, navigate to _resources/src of the project
2. Execute the command:

    ```
    $ npm install
    ```
    This will install all of the Node package dependencies.
3. Once complete, in the same Terminal window, execute the command

    ```
    $ sudo npm install -g gulp
    ```
    This will allow you to execute gulp commands system-wide.
4. To build the project, execute a gulp command depending on which build you need.  The builds are listed below.

# Builds
1. build-dev.cmd will execute the development build, which include linting and debugging and does not minify files.  On Mac OS, execute this command:

    ```
    $ gulp
    ```
2. build-watch.cmd will execute the development build and watch for file changes, automatically reloading your browser if you have LiveReload installed..  On Mac OS, execute this command:

    ```
    $ gulp watch
    ```
3. build-production.cmd will execute the production build, which lints, concatenates, and minifies files..  On Mac OS, execute this command:

    ```
    $ gulp production
    ```
