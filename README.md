FED-Template-Engine
===================
The FED Template Engine represents what we use at ISITE Design for the basis of new projects. With a library of patterns ready at our fingertips, a powerful and flexible grid system, and a clean, modular organization, you don't need to reinvent the wheel. And you'll have more time to invent the next wheel.

# Documentation
Full documentation is available at http://isitedesign.github.io/FED-Template-Engine/

# Setup
Once you've cloned or downloaded the project, you'll first need to install NodeJS.  It can be downloaded at http://nodejs.org/download/.  Once Node is installed, setup is dependent on platform.

### Windows
1. Navigate to _resources/src
2. Execute one of the .cmd files, depending on which build you need.  The builds are listed below.

### Mac OS
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

### Development
The development build include linting and debugging, but does not minify files so they are readable during development.
* Windows - execute build-dev.cmd.
* Mac OS - execute this command in a Terminal window under _resources/src

    ```
    $ gulp
    ```

### Watch
The watch build will execute the development build and watch for file changes, automatically reloading your browser if you have LiveReload installed.
* Windows - execute build-watch.cmd.
* Mac OS - execute this command in a Terminal window under _resources/src

    ```
    $ gulp watch
    ```

### Production
The production build lints, concatenates, and minifies files.
* Windows - execute build-production.cmd.
* Mac OS - execute this command in a Terminal window under _resources/src

    ```
    $ gulp production
    ```
