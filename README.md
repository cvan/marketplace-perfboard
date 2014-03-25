# marketplace-perfboard

Simple dashboards generated from PhantomJS.


# Installation

We use [grunt](http://gruntjs.com/):

    npm install grunt-cli -g

Then install our dependencies:

    npm install


# Usage

To generate reports for [dev](https://marketplace-dev.allizom.org/):

    grunt --server=dev

For [stage](https://marketplace.allizom.org/):

    grunt --server=stage

For [prod](https://marketplace.firefox.com/):

    grunt --server=prod

To generate all:

    grunt --server=dev && grunt --server=stage && grunt --server=prod && grunt --server=example
