# [![Banner Zen](https://dl.dropboxusercontent.com/u/86789142/cdn/banner-zen/banner-zen-hero_gitlab.png)](https://github.com/thiagodebastos/banner-zen/archive/master.zip)

## Overview
**Banner Zen** is a Banner Starter Kit is a somewhat opinionated boilerplate for HTML5 Rich Banner Development that takes the stress out and peace in. Included are tools for building across Google AdWords, DoubleClick Studio, DoubleClick Rich Media and Sizmek in the most relaxing, peaceful and heartwarming way possible.

### Features

> Latest Ecmascript [ES6] Features

Practice the basics of ES6 today!

> Multi-platform boilerplate

Although a work in progress, this repo aims to contain a major template from each ad provider as listed above. Just swap out bits and pieces. Currently the repo only includes importable stylesheet includes for various banner sizes.

> Cross-device Synchronisation

Synchronise clicks, scrolls, forms and live-reload across multiple devices on the fly as you code. Powered by [BrowserSync](http://browsersync.io).

> Built in HTTP Server

Test pages easily in your local environment with one command: `gulp`.

> Performance Optimisation with a build process powered by [Gulp](http://gulpjs.com/).

Minify and concatenate JavaScript, CSS, HTML and images to keep your pages lean and your code readable.

> Stylus Support

Compile [Stylus](https://learnboost.github.io/stylus/) into CSS with ease, with support for variables, mixins and more.
Stylus has been chosen for its ability to incorporate syntax of most other preprocessors. This means that if you start to work on a project where the previous developer has used Sass indented syntax, but you like Less syntax, you can do so and it will just work.

Also, performance-wise Stylus performs really well, and it is natively created in NodeJS.

> Local Area Network Sharing

Ever been in a situation where a producer, designer, creative, janitor, Bob, Anthony's cat or your Aunty sends an email asking for `thing x` to be moved to the right by `x pixels`, so you do it, zip up the files, send them over and wait an hour for a response? Well, that just wont do. From now on, send them the external link [ which will look something like http://192.168.130.81:7878/] to your current project, get them on the phone if you have to, make the amends and have them watch it happen from their end. No more emails, no more firebreathing, just zen.


### Quickstart
- Clone or [download](https://gitlab.mcsaatchi.com.au/MAKE/banner-zen/repository/archive.zip) this repository and build on what is included in the `source` directory.
- ` git clone git@gitlab.mcsaatchi.com.au:MAKE/banner-zen.git`
- `cd banner-zen` (or whatever you named the folder)
- `npm install`

And you are ready to go, run with `gulp` to start the built in HTTP server in a new browser page.

### Workflow
- Put on some sound-blocking headphones, and switch to [3 Hours of Healing Zen Music](https://www.youtube.com/watch?v=LGiH6oUDXVg)
- `gulp` will start a HTTP server with browser-sync
- `gulp build` will clean the build directory and then build the project and create an archive of the project ready for dispatch

[I'm working on it!]


### Gulp Tasks
#### `npm run gulp -- build`
Clean `build` dir and rebuild project.

#### `npm run gulp`
Build project and initialise BrowserSync session which will open a new tab and
live reload in that tab.

#### `gulp images`
Minify images with: imagemin-pngquant, imagemin-svgo, imagemin-gifsicle, imagemin-jpegtran

## [GreenSock](http://greensock.com/) Guides
- [Jump Start](https://greensock.com/jump-start-js)
- [Ease Visualizer](http://greensock.com/ease-visualizer)
- [TimeLine Lite Tuts&plus; Guide](http://code.tutsplus.com/tutorials/timelinelite-ultimate-starter-guide-working-with-labels--active-10240)

### Ad Platform Build Guides & Spec Sheets
- [DoubleClick](https://support.google.com/richmedia/answer/3369501?hl=en&ref_topic=3369390&rd=1)
  - [How to prepare HTML5 assets for DCM] (https://support.google.com/dcm/partner/answer/3145300?hl=en&vid=1-635790097211926859-3253088437#1&2&2a&3&4&5&6&7&8&9&10&11&12&13&14&15&16&17)
  - [Hosted libraries](https://support.google.com/richmedia/answer/6307288?hl=en)

- [AdWords](https://support.google.com/adwordspolicy/answer/176108)
- [Sizmek](https://support.sizmek.com/hc/en-us/categories/200103329-Creating-HTML5-Ads)
  - Specifically [this link](https://support.sizmek.com/hc/en-us/articles/202732315-HTML5-Formats-and-Features)
- [AdRoll](https://help.adroll.com/hc/en-us/articles/201975690-Creative-Guidelines)
