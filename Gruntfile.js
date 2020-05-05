module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //browserSync

        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/index.css': 'css/less/index.less'
                }
            }
        },

        concat: {
            dist: {
                src: ['js/classes/class.city.js', 'js/classes/class.hotel.js'],
                dest: 'js/classes/classes.js',
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['css/index.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },


        uglify: {
            my_target: {
                files: {
                    'js/main.min': ['js/main.js'],
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js', 'js/classes/*.js', 'js/core/*.js', 'js/views/.*js', 'js/vendor/.*js'],
                tasks: ['concat', 'uglify-es'],
            },
            styles: {
                files: ['css/less/*.less'],
                tasks: ['less', 'cssmin'],
            },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/less/*.less', 'js/*.js', 'js/classes/*.js', 'js/core/*.js', 'js/views/.*js', 'js/vendor/.*js']
                },
                options: {
                    watchTask: true,
                    proxy: "localhost:63342/AFT"
                }
            }
        },

        zip: {
            'zip/files.zip': ['js/classes/class.city.js', 'js/classes/class.hotel.js']
        },

        htmllint: {
            all: ['index.html']
        },

        jsbeautifier: {
            "default": {
                src : ["js/main.js"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-less');
    // Default task(s).
    grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('serve', ['default','browserSync', 'watch']);
};