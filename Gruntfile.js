module.exports = function(grunt) {

  grunt.initConfig({

    /** uglify */
    uglify: {
      my_target: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        }
      } //my_target
    }, 

    /** compass */
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      } //dev
    }, 

    /** watch */
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    }
    
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', 'watch');
} //exports