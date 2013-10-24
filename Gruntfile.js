module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n',
    meta: {
      version: '0.1.0'
    },
    dirs: {
      javascript_dist: "js",
      javascript_src: "js/_src",
      less_src: "_less",
      css_dist: "css",
      bower_components: "_bower_components",
      bs: {
        root: "<%= dirs.bower_components %>/bootstrap",
        js: "<%= dirs.bs.root %>/js",
        less: "<%= dirs.bs.root %>/less",
      },
      fa: "<%= dirs.bower_components %>/font-awesome",
      holderjs: "<%= dirs.bower_components %>/holderjs",
      html5shiv: "<%= dirs.bower_components %>/html5shiv/dist",
      jquery: "<%= dirs.bower_components %>/jquery",
      respond: "<%= dirs.brower_components %>/respond",
    },
    // Config Tasks
    init: {
      options: {
        stripBanners: true,
      },
    },
    less: {
      options: {
        banner: '/*! <%= pkg.name %> - LESS - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        stripBanners: true,
        yuicompress: true,
      },
      files: {
        "<%= dirs.css_dist %>/bootstrap.css": "<%= dirs.bs.root %>/less/bootstrap.less",
        "<%= dirs.css_dist %>/theme.css": "<%= dirs.bs.root %>/less/theme.less",
      }
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - Concat - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
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
        dest:"<%= dirs.javascript_dist %>/bootstrap.js",
        nonull: true,
      },
      custom: {
        src: [ '<%= dirs.javascript_src %>/bootswatch.js' , '<%= dirs.javascript_src %>/seg_resume.js' ],
        dest: '<%= dirs.javascript_dist %>/seg_resume.js',
        //nonull: true,
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - Uglify - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        stripBanners: true,
      },
      bootstrap: {
        src: '<%= concat.bootstrap.dest %>',
        dest: '<%= dirs.javascript_dist %>/bootstrap.min.js',
        nonull: true,
      },
      custom: {
        src: ['<%= concat.custom.dest %>'],
        dest: '<%= dirs.javascript_dist %>/seg_resume.min.js',
        nonull: true,
      },
    },
  });
  
  // Load the plugins for tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  // Inital Setup Task
  grunt.registerTask( 'init', [ 'init' , 'build' ] );
  
  // Build Task
  grunt.registerTask( 'build' , [ 'less' , 'concat' , 'uglify' ] );

  // Default task(s).
  grunt.registerTask( 'default' , ['build'] );
  
};