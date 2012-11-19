module.exports = function(grunt) {
    grunt.initConfig({
        lint: {
            all: ["grunt.js", "src/*.js"]
        },
        jshint: {
            options: {
		indent: 4,
		browser: true,
		jquery: true,
		quotmark: "double",
		smarttabs: true,
		trailing: true,
		undef: true,
		unused: true
            }
        },
        jasmine: {
            src: "src/*.js",
            specs: "tests/*.js"
        }
    });

    grunt.loadNpmTasks("grunt-jasmine-runner");
//    grunt.registerTask("default", "lint jasmine");
};
