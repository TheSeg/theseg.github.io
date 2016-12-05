// Seg Resume - JavaScript
function load_Facebook() {
  // Facebook
  var fb_appid = $('meta[property=\'fb:app_id\']').attr('content');
  if (fb_appid > 0) {
    (
      function (d, s, id) {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/all.js#xfbml=1&appId=' + fb_appid;
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
    );
  } else {
    console.log('Facebook failed to load: No App ID.');
  }
}

function load_GooglePlus() {
  // Google +
  var publisherID = $('link[rel=\'publisher\']').attr('href').replace('https://plus.google.com/', '').replace('/', '');
  var po = document.createElement('script');
  po.type = 'text/javascript'; po.async = true;
  if (publisherID > 0) {
    po.src = 'https://apis.google.com/js/plusone.js?publisherid=' + publisherID;
  } else {
    po.src = 'https://apis.google.com/js/plusone.js';
  }
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
}

function load_Twitter() {
  // Twitter
  (
    function (d, s, id) {
        var js;
        var fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = 'https://platform.twitter.com/widgets.js';
          fjs.parentNode.insertBefore(js, fjs);
        }
      }
  )(document, 'script', 'twitter-wjs');
}

function load_LinkedIn() {
  // LinkedIn
  (
    function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = '//platform.linkedin.com/in.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
  )(document, 'script', 'linkedin-wjs');
}

$(document).ready(function () {
  $('.platform-wii.platform-unreleased').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Developed for but not released on Nintendo Wii.',
  });
  $('.platform-win:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Microsoft Windows<br>Self publish, Steam, &amp; Retail Disc',
  });
  $('.platform-macosx:not(.platform-not), .platform-mac:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Mac OS X<br>Self publish, Steam, &amp; Retail Disc',
  });
  $('.platform-xbox360:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Microsoft Xbox 360<br>XBLA &amp; Retail Disc',
  });
  $('.platform-ps3:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Sony PlayStation 3<br>PSN &amp; Retail Disc',
  });
  $('.platform-wii:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Nintendo Wii<br>WiiWare &amp; Retail Disc',
  });
  $('.platform-ios:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'iOS<br>iPhone &amp; iPad',
  });
  $('.platform-steam:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Steam &amp; Steamworks<br>for Windows &amp; Mac OS X',
  });
  $('.platform-android:not(.platform-not)').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Android &amp; Google Play',
  });
  $('.note-local').tooltip({
    'placement': 'bottom',
    'html': true,
    'title': 'Includes localizations and/or ports developed after initial release.',
  });
  // Do tooltips for each title.
  $('.title-image').each(function () {
    $(this).tooltip({
      'placement': 'right',
      'html': true,
    });
  });

  $('.navbar-nav a, .toTop').click(function () {
    var scrollTo = 0;
    if ($.attr(this, 'href') === '#introduction') {
      scrollTo = ($('#navigation').offset().top) + 10;
    } else if ($.attr(this, 'href') === '#top') {
      scrollTo = 0;
    } else {
      scrollTo = (($($.attr(this, 'href')).offset().top) - 30);
    }
    $('html, body').animate({
      scrollTop: scrollTo
    }, 500);
    return false;
  });

  load_Twitter();
  load_GooglePlus();
  load_Facebook();
  load_LinkedIn();

});
