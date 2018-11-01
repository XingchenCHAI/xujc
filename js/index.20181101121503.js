(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/la-xian-490.jpg' : 'images/la-xian-245.jpg');
var a='data-src'; if($('.js-2').hasAttr('src')) { a='src'; } $('.js-2').attr(a, (dpi>1) ? 'images/xilog-744.png' : 'images/xilog-372.png');
$('.js-3').attr('src', (dpi>1) ? 'images/la-xian-490.jpg' : 'images/la-xian-245.jpg');
var a='data-src'; if($('.js-7').hasAttr('src')) { a='src'; } $('.js-7').attr(a, (dpi>1) ? 'images/shi-wu-zhou-nianpng-574.png' : 'images/shi-wu-zhou-nianpng-287.png');
var a='data-src'; if($('.js-11').hasAttr('src')) { a='src'; } $('.js-11').attr(a, (dpi>1) ? 'images/xia-hua-tou-ming-lan-2400.png' : 'images/xia-hua-tou-ming-lan-1200.png');
var a='data-src'; if($('.js-12').hasAttr('src')) { a='src'; } $('.js-12').attr(a, (dpi>1) ? 'images/xia-hua-tou-ming-lan-biao-zhi-62.png' : 'images/xia-hua-tou-ming-lan-biao-zhi-31.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-2').unveil(50);
$('.js-13 source').unveil(50);
$('.js-7').unveil(50);
$('.js-14 source').unveil(50);
$('.js-11').unveil(50);
$('.js-15 source').unveil(50);
$('.js-12').unveil(50);
$('.js-16 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.50s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});