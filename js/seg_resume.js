/*
    Seg's Resume - JavaScript
*/

$(document).ready(function() {
    $("#releasedTitlesTable .icon-ok-circle").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Unreleased on this platform.",
    });
    $(".platform-win").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Microsoft Windows<br>Self publish, Steam, &amp; Retail Disc",
    });
    $(".platform-macosx").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Mac OS X<br>Self publish, Steam, &amp; Retail Disc",
    });
    $(".platform-xbox360").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Microsoft Xbox 360<br>XBLA &amp; Retail Disc",
    });
    $(".platform-ps3").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Sony PlayStation 3<br>PSN &amp; Retail Disc",
    });
    $(".platform-wii").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"Nintendo Wii<br>WiiWare &amp; Retail Disc",
    });
    $(".platform-ios").tooltip({
        'placement':'bottom',
        'html':true,
        'title':"iOS<br>iPhone &amp; iPad",
    });
});