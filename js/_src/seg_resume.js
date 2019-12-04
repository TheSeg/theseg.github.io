// Seg Resume - JavaScript
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
    var scrollTo = null;
    if ($.attr(this, 'href') === '#introduction') {
      scrollTo = ($('#navigation').offset().top) + 10;
    } else if ($.attr(this, 'href') === '#top') {
      scrollTo = 0;
    } else if ($.attr(this, 'href').charAt(0) === '#') {
      scrollTo = (($($.attr(this, 'href')).offset().top) - 30);
    }
    if (scrollTo) {
      $('html, body').animate({
        scrollTop: scrollTo
      }, 500);
      return false;
    }
  });

});
