module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {

        banner: '/*\n <%= pkg.name %> <%= pkg.version %>\n (c) ZURB, inc. <%= grunt.template.today("yyyy") %>\n License: MIT\n*/\n',
        mangle: false
      },
      my_target: {
        files: {
          'build/ui-foundation.min.js': ['src/ui-foundation.js']
        }
      }
    },
    watch: {
      files: 'src/**/*.js',
      tasks: ['uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify']);
};