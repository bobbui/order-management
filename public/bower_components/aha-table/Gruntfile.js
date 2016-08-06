module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    hostname: '*',
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/aha-table'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/aha-table/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('build',  ['replace']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
    grunt.registerTask('server', ['build', 'connect']);

};
