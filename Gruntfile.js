module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n',
    meta: {
      version: '0.1.0'
    },
    dirs: {
      js_dist: 'js',
      js_src: 'js/_src',
      less: '_less',
      css: 'css',
      node_modules: 'node_modules',
      bs: {
        root: '<%= dirs.node_modules %>/bootstrap',
        js: '<%= dirs.node_modules %>/bootstrap/js',
        less: '<%= dirs.node_modules %>/bootstrap/less',
      },
      fa: '<%= dirs.node_modules %>/font-awesome',
      holderjs: '<%= dirs.node_modules %>/holderjs',
      html5shiv: '<%= dirs.node_modules %>/html5shiv/dist',
      jquery: '<%= dirs.node_modules %>/jquery',
      respond: '<%= dirs.node_modules %>/respond.js',
    },
    // Config Tasks
    init: {
      options: {
        stripBanners: true,
      },
    },
    less: {
      bootstrap: {
        options: {
          stripBanners: true,
          compress: true,
          cleancss: true,
          sourceMap: true,
          yuicompress: true,
          paths: [
            '<%= dirs.bs.less %>',
            '<%= dirs.less %>',
            '<%= dirs.less %>/bootswatch',
          ],
        },
        files: {
          '<%= dirs.css %>/theme-default.css': '<%= dirs.less %>/theme-default.less',
          '<%= dirs.css %>/theme-valve.css': '<%= dirs.less %>/theme-valve.less',
        },
      },
      font_awesome: {
        options: {
          stripBanners: true,
          compress: true,
          cleancss: true,
          sourceMap: true,
          yuicompress: true,
          paths: [
            '<%= dirs.fa %>/less',
          ],
        },
        files: {
          '<%= dirs.css %>/font-awesome.min.css': '<%= dirs.less %>/font-awesome.less',
        },
      },
    },
    concat: {
      options: {
        stripBanners: true,
      },
      bootstrap: {
        src: [
          '<%= dirs.bs.root %>/js/transition.js',
          '<%= dirs.bs.root %>/js/alert.js',
          '<%= dirs.bs.root %>/js/button.js',
          '<%= dirs.bs.root %>/js/carousel.js',
          '<%= dirs.bs.root %>/js/collapse.js',
          '<%= dirs.bs.root %>/js/dropdown.js',
          '<%= dirs.bs.root %>/js/modal.js',
          '<%= dirs.bs.root %>/js/tooltip.js',
          '<%= dirs.bs.root %>/js/popover.js',
          '<%= dirs.bs.root %>/js/scrollspy.js',
          '<%= dirs.bs.root %>/js/tab.js',
          '<%= dirs.bs.root %>/js/affix.js'
        ],
        dest: '<%= dirs.js_dist %>/bootstrap.js',
        nonull: true,
      },
      custom: {
        src: [ '<%= dirs.js_src %>/bootswatch.js', '<%= dirs.js_src %>/seg_resume.js' ],
        dest: '<%= dirs.js_dist %>/seg_resume.js',
        //nonull: true,
      },
    },
    copy: {
      options: {
        stripBanners: true,
      },
      html5shiv: {
        src: '<%= dirs.html5shiv %>/src/html5shiv.js',
        dest: '<%= dirs.js_dist %>/html5shiv.js',
      },
      respond: {
        src: '<%= dirs.respond %>/dest/respond.min.js',
        dest: '<%= dirs.js_dist %>/respond.min.js',
      },
      font_awesome: {
        files: [
          {
            expand: true,
            src: '<%= dirs.fa %>/fonts/*',
            dest: 'font/',
            flatten: true,
            filter: 'isFile',
          },
        ],
      },
    },
    uglify: {
      options: {
        stripBanners: true,
      },
      bootstrap: {
        src: '<%= concat.bootstrap.dest %>',
        dest: '<%= dirs.js_dist %>/bootstrap.min.js',
        nonull: true,
      },
      holderjs: {
        src: ['<%= dirs.holderjs %>/holder.js'],
        dest: '<%= dirs.js_dist %>/holder.min.js',
        nonull: true,
      },
      custom: {
        src: ['<%= concat.custom.dest %>'],
        dest: '<%= dirs.js_dist %>/seg_resume.min.js',
        nonull: true,
      },
    },
    jshint: {
      gruntfile: {
        files: {
          src: ['gruntfile.js']
        }
      },
      concat_before: {
        files: {
          src: ['<%= dirs.js_src %>/**/*.js']
        }
      },
      concat_after: {
        files: {
          src: ['<%= dirs.js_dist %>/seg_resume.js']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      gruntfile: {
        files: [ 'gruntfile.js' ],
        tasks: [ 'jshint:gruntfile' ]
      },
      js: {
        files: [
          '<%= dirs.js_src %>/*.js'
        ],
        tasks: [ 'jshint:concat_before', 'concat:custom', 'jshint:concat_after', 'uglify:custom' ],
      },
      less: {
        files: [
          '<%= dirs.less %>/*.less',
          '<%= dirs.less %>/bootswatch/*.less',
        ],
        tasks: [ 'less' ],
      },
      html: {
        files: [
          'site/**/*.html',
        ],
        tasks: [],
      },
    },
  });

  // Load the plugins for tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Inital Setup Task
  grunt.registerTask('init', [ 'init', 'build']);

  // Build Task
  grunt.registerTask('build', ['concat', 'copy', 'less', 'uglify']);

  // Default task(s).
  grunt.registerTask('default', ['build']);

};
