module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  src: {
		  js: ['src/app/**/*.js'],
		  specs: ['test/**/*.spec.js'],
		  html: ['src/**/*.html']
	  },
	  jshint: {
		  options: {
			  jshintrc: '.jshintrc'
		  },
		  files: ['Gruntfile.js', '<%= src.js %>', '<%= src.specs %>']
	  },
	  karma: {
		  unit: {
			  configFile: 'test/config/karma.conf.js',
			  background: true
		  }
	  },
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
      js: {
	      files: ['<%= src.js %>', '<%= src.specs %>'],
	      tasks: ['jshint', 'karma:unit:run']
      }
    }
  });

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

  
  grunt.registerTask('default', ['uglify']);

	grunt.registerTask('test', ['karma:unit']);

	grunt.registerTask('develop', ['jshint', 'karma:unit', 'watch']);
};