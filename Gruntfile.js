module.exports = function(grunt) {
    
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                // global
                '<%= pkg.envPath %>sites/library/global/js/fas-form.js',
                // SP
                '<%= pkg.envPath %>sites/library/global/js/tou-banner.js',
                '<%= pkg.envPath %>sites/www.scholarshippoints.com/public/js/*.js',
                '!<%= pkg.envPath %>sites/www.scholarshippoints.com/public/js/*.min.js',
                // PSL
                '<%= pkg.envPath %>sites/www.privatestudentloans.com/public/calculator/*.js',
                '<%= pkg.envPath %>sites/www.privatestudentloans.com/public/js/*.js',
                // SLC
                '<%= pkg.envPath %>sites/www.studentloanconsolidator.com/public/js/calculator.js'
            ]
        },
        
        uglify: {
            build: {
                files: {
                    '<%= pkg.envPath %>sites/library/global/js/dist/typeahead.min.js' : [
                        '<%= pkg.envPath %>sites/library/global/js/bootstrap.typeahead.js',
                        '<%= pkg.envPath %>sites/library/global/js/typeahead.js'
                    ],
                    '<%= pkg.envPath %>sites/library/global/js/dist/formvalidation.min.js' : [
                        '<%= pkg.envPath %>sites/library/global/js/fas-form.js',
                        '<%= pkg.envPath %>sites/library/global/assets/formvalidation/dist/js/formvalidation.min.js',
                        '<%= pkg.envPath %>sites/library/global/assets/formvalidation/dist/js/framework/bootstrap.min.js'
                    ],
                    '<%= pkg.envPath %>sites/www.scholarshippoints.com/public/js/scholarshippoints.min.js' : [
                        '<%= pkg.envPath %>sites/www.scholarshippoints.com/public/js/scholarshippoints.js'
                    ]
                }
            }
        },

        less: {
            development: {
                files: {
                    "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/privatestudentloans.css" : "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/privatestudentloans.less",
                    "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/fastweb.css" : "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/fastweb.less",
                    "<%= pkg.envPath %>sites/www.scholarshippoints.com/public/css/scholarshippoints.css" : "<%= pkg.envPath %>sites/www.scholarshippoints.com/public/css/scholarshippoints.less"
                }
            }
        },
        
        cssmin: {
            target: {
                files: {
                    // global
                    '<%= pkg.envPath %>sites/library/global/css/animate.min.css' : ['<%= pkg.envPath %>sites/library/global/css/animate.css'],
                    // PSL
                    '<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/privatestudentloans.min.css' : ['<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/privatestudentloans.css'],
                    '<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/fastweb.min.css' : ['<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/fastweb.css'],
                    // SP
                    '<%= pkg.envPath %>sites/www.scholarshippoints.com/public/css/scholarshippoints.min.css' : ['<%= pkg.envPath %>sites/www.scholarshippoints.com/public/css/scholarshippoints.css']
                }
            }
        },
        
        watch: {
            js: {
                files: [
                    "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/js/*.js",
                    "<%= pkg.envPath %>sites/www.scholarshippoints.com/public/js/*.js",
                    "<%= pkg.envPath %>sites/library/global/js/*.js",
                    "!<%= pkg.envPath %>sites/**/*min.js"
                ],
                tasks: ['buildJS']
            },
            less: {
                files: [
                    "<%= pkg.envPath %>sites/www.privatestudentloans.com/public/css/*.less",
                    "<%= pkg.envPath %>sites/www.scholarshippoints.com/public/css/*.less"
                ],
                tasks: ['buildCSS']
            }
        }
                
    });

    // Default task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('buildJS', ['jshint','uglify']);
    grunt.registerTask('buildCSS', ['less','cssmin']);

};
