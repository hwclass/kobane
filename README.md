Kobane
============
###Gulp - Bower - Require - Angular - Jade - Sass Project Workflow Boilerplate
============

A project workflow using Gulp, Bower, Require, Angular, Jade and Sass workflow boilerplate. This boilerplate is named regards to the current massacre of religios murders in <a href="http://en.wikipedia.org/wiki/Ayn_al-Arab" target="_blank">Kobane</a>.

This project is an application skeleton for a [AngularJS](http://angularjs.org/) / [RequireJS](http://requirejs.org/) web app.
It is based on an earlier AngularJS seed project which can be found [here](https://github.com/cdimascio/ya-angular-requirejs-seed). [Firebase](https://firebase.io) and [AngularFire](https://angularfire.com) are used as a BaaS system to retrieve data.

This seed is differentiates itself from the previous AngularJS seed project in two distinct ways:

1. This seed includes RequireJS to manage module loading
2. This seed separates the implementation logic for each each AngularJS component into separate RequireJS module files.
This helps to create an environment conducive to large scale application development.

### Prerequisites

Node Package Manager (npm) - use npm to install project dependencies including bower and http-server. You can get npm [here](http://nodejs.org/)

### Install Dependencies

After cloning the repository, you firstly need install Node Package Manager:

```
sudo apt-get install npm
```

Then the next step is installing the packages:

```
npm install -g
```

We have two kinds of dependencies in this project: tools and angular framework code.

* We get the tools we depend upon via `npm`, the [node package manager](http://nodejs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).

```
npm install bower -g
cd app
bower install
```

Bower will install all client dependencies into  the following folder in your project.

* `app/libs` - contains the angular framework files

* Note, we configure the `.bowerrc` file to install all client dependencies in `app/libs`.

###Install SASS Gem (Neeeded Ruby installed already.)

```
gem install sass
```

###Install Gulp and Gulp Dependencies

* create a file called 'gulpfile.js'. Then execute the following lines,

```
npm install gulp -g
npm install gulp-ruby-sass
npm install gulp-minify-css
npm install gulp-watch
```

###Install Jade

```
npm install jade -g
```

### Run the Application

To run the application, we first install a simple lightweight http server, then start it.

```
npm install http-server -g
http-server ./app
```

Now browse to the app at `http://localhost:8080`.