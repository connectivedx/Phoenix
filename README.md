![Phoenix](Assets/src/img/content/logo-placeholder.png)
===================
Phoenix represents what we use at Connective DX for the basis of new projects. With a library of patterns ready at our fingertips, a powerful and flexible grid system, and a clean, modular organization, you don't need to reinvent the wheel. And you'll have more time to invent the next wheel.

# Documentation
Full documentation is available in the documentation directory.  It will require the setup and build processes below to be followed; additional instructions can be found on the documentation page once loaded.

# Setup
Once you've cloned or downloaded the project, you'll first need to install NodeJS.  It can be downloaded at http://nodejs.org/download/.  Once Node is installed, builds are done by executing a command file.

1. Navigate to Assets/src
2. The type and name of the command file is dependent on your platform and which build you need.
    * Windows - execute one of the .cmd files.  The builds are listed below.  
    * Mac OS - execute one of the .command files.  The builds are listed below.
    * **NOTE** - if you get an error when executing a build, make sure you have execute privileges on the file as well as the base build file in Assets/src/build.

# Builds

Each of the builds will compile the SCSS under Assets/src/css and place CSS, images, JavaScript, fonts, and markup templates into their respective folders under Assets/dist (or the root for markup templates).  These compiled files should never be edited and are ignored by the repository.  **All code editing must take place in Assets/src.**

### Development
The development build includes linting and debugging, but does not minify files so they are readable during development.
* Windows - execute build-dev.cmd.
* Mac OS - execute build-dev.command.

### Watch
The watch build will execute the development build and watch for file changes, automatically compiling your source code and reloading your browser if you have LiveReload installed.
* Windows - execute build-watch.cmd.
* Mac OS - execute build-watch.command.

### Production
The production build lints, concatenates, and minifies files.
* Windows - execute build-production.cmd.
* Mac OS - execute build-production.command.

# Special Thanks
This project would not be possible without contributions from these open-source projects:
* [Gulp](https://github.com/gulpjs/gulp/)
* [Gumby Framework](https://github.com/GumbyFramework/Gumby) - our grid system began as a fork of Gumby's grid system and has since morphed into the mobile-first grid system it is today
* [Responsive Tabs](https://github.com/petelove666/Responsive-Tabs)
* [Tipsy](https://github.com/jaz303/tipsy)
* [Fancybox](https://github.com/fancyapps/fancyBox)

# License
## Phoenix
Phoenix is licensed under The MIT License (MIT), unless otherwise noted below.

Copyright (c) 2015 Connective DX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Fancybox
Fancybox is protected by a [Creative Commons Attribution-NonCommercial 3.0](http://creativecommons.org/licenses/by-nc/3.0/) license.  You are free to use it for non-commercial purposes and may pay a license fee to use it on commercial sites.  For more information, please visit http://www.fancyapps.com/fancybox/#license.
