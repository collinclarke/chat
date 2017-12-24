module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            development: {
                files: {
                    'src/css/main.css': 'scss/main.scss'
                }
            }
        }
    });

//  Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

//  Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('compile-sass', ['sass']);

};
