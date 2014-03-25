module.exports = function (grunt) {

  var server = grunt.option('server');

  var serverURLs = {
    dev: 'https://marketplace-dev.allizom.org/',
    prod: 'https://marketplace.firefox.com/',
    stage: 'https://marketplace.allizom.org/'
  };

  if (!(server in serverURLs)) {
    return console.error('Invalid server choice (valid choices: ' +
                         Object.keys(serverURLs).join(', ') + ')');
  }

  console.log('Loading ' + server + ' <' + serverURLs[server] + '>\n');

  grunt.initConfig({
    phantomas: {
      gruntSite: {
        options: {
          indexPath: './' + server + '/',
          options: {
            'phone': true,
            'post-load-delay': 5
          },
          url: serverURLs[server]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-phantomas');

  grunt.registerTask('default', ['phantomas']);
};
