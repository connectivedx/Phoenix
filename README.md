FED-Template-Engine
===================
The FED Template Engine represents what we use at ISITE Design for the basis of new projects. With a library of patterns ready at our fingertips, a powerful and flexible grid system, and a clean, modular organization, you don't need to reinvent the wheel. And you'll have more time to invent the next wheel.

# Documentation
Full documentation is available at http://isitedesign.github.io/FED-Template-Engine/

# Setup
Once you've cloned or downloaded the project, you'll first need to install NodeJS.  It can be downloaded at http://nodejs.org/download/.  Once Node is installed, builds are done by executing a command file.

1. Navigate to _resources/src
2. The type and name of the command file is dependent on your platform and which build you need.
    * Windows - execute one of the .cmd files.  The builds are listed below.  
    * Mac OS - execute one of the .command files.  The builds are listed below.
    * **NOTE** - if you get an error when executing a build, make sure you have execute privileges on the file.

# Builds

Each of the builds will compile the SCSS under _resources/src/scss and place CSS, images, JavaScript, and fonts into their respective folders under _resources.  These compiled files should never be edited and are ignored by the repository.  **All code editing must take place in _resources/src.**

### Development
The development build includes linting and debugging, but does not minify files so they are readable during development.
* Windows - execute build-dev.cmd.
* Mac OS - execute mac-build-dev.command.

### Watch
The watch build will execute the development build and watch for file changes, automatically compiling your source code and reloading your browser if you have LiveReload installed.
* Windows - execute build-watch.cmd.
* Mac OS - execute mac-build-watch.command.

### Analyze
The analyze build performs linting on your CSS and JavaScript after compiling, giving you statistics and tips to improve your compiled code.
* Windows - execute build-analyze.cmd.
* Mac OS - execute mac-build-analyze.command.

### Production
The production build lints, concatenates, and minifies files.
* Windows - execute build-production.cmd.
* Mac OS - execute mac-build-production.command.
