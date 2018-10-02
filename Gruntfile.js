module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'style/style.css': 'sass/style.scss'
                }
            },
            dist: {
                options: {
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    'style/style.css': 'sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('buildcss', ['sass:dist']);
};
