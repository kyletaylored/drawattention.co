jQuery(document).ready(function($){if($(".loader-item").delay(500).fadeOut(),$("#pageloader").delay(1e3).fadeOut("slow"),$("#navigation").sticky({topSpacing:0}),$(".homeslider").flexslider({animation:"fade",easing:"linear",controlNav:!1,directionNav:!0,slideshowSpeed:6e3}),"function"==typeof MobileDetect){var e=new MobileDetect(window.navigator.userAgent);e.mobile()||$.stellar()}var o=$(".product-row .product");imagesLoaded(o[0],function(){o.equalHeight()})}),function($){"use strict";$(".page-scroll a[href^='#']").on("click",function(e){e.preventDefault();var o=this.hash;$("html, body").stop().animate({scrollTop:$(o).offset().top},2e3,"easeOutExpo")})}(jQuery),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},2e3),!1});
//# sourceMappingURL=./da-min.js.map