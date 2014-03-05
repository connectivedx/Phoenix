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

Each of the builds will compile the SCSS under _resources/src/scss and place CSS, images, JavaScript, and fonts into their respective folders under _resources.  These compiled files should never be edited and are ignored by the repository.  **All code editing must take place in _resources/src.**

1. Development
    * Windows - build-dev.cmd will execute the development build, which includes linting and debugging and does not minify files.
    * Mac OS - execute this command in a Terminal window under _resources/src

        ```
        $ gulp
        ```
2. Watch
    * Windows - build-watch.cmd will execute the development build and watch for file changes, automatically reloading your browser if you have LiveReload installed.
    * Mac OS - execute this command in a Terminal window under _resources/src

        ```
        $ gulp watch
        ```
3. Production
    * Windows - build-production.cmd will execute the production build, which lints, concatenates, and minifies files.
    * Mac OS - execute this command in a Terminal window under _resources/src

        ```
        $ gulp production
        ```

# Documentation
Full documentation is available at http://isitedesign.github.io/FED-Template-Engine/
