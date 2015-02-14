
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "sample": [ "src/**/*.js" ]
        },
        traceur: {
            options: {
                includeRuntime: false,
                traceurOptions: "--experimental --source-maps inline"
            },
            "sample": {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: "src",
                    src: "**/*.js",
                    dest: "dst"
                }]
            }
        },
        clean: {
            clean:     [ "dst" ],
            distclean: [ "node_modules" ]
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadTasks("../tasks");
    grunt.registerTask("default", [ "jshint", "traceur" ]);
};

