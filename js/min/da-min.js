jQuery(document).ready(function($){if($(".loader-item").delay(500).fadeOut(),$("#pageloader").delay(1e3).fadeOut("slow"),$("#navigation").sticky({topSpacing:0}),$(".homeslider").flexslider({animation:"fade",easing:"linear",controlNav:!1,directionNav:!0,slideshowSpeed:6e3}),"function"==typeof MobileDetect){var e=new MobileDetect(window.navigator.userAgent);e.mobile()||$.stellar()}var t=$(".product-row .product");imagesLoaded(t[0],function(){t.equalHeight()})}),function($){"use strict";$(".page-scroll a[href^='#']").on("click",function(e){e.preventDefault();var t=this.hash;$("html, body").stop().animate({scrollTop:$(t).offset().top},2e3,"easeOutExpo")})}(jQuery),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},2e3),!1});var map=L.map("map",{}).setView([32,-100],3);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{detectRetina:!0,maxNativeZoom:17}).addTo(map);var pruneCluster=new PruneClusterForLeaflet;$.getJSON("https://spreadsheets.google.com/feeds/list/1a8lGTpeX33RB9I0xj2GdpvoQpuaHywCOAKsxf87iKrA/od6/public/values?alt=json",function(e){for(var t=e.feed.entry,o=t.length-1;o>=0;o--){var a=t[o].gsx$latitude.$t,l=t[o].gsx$longitude.$t,r=new PruneCluster.Marker(a,l);pruneCluster.RegisterMarker(r)}map.addLayer(pruneCluster)}),map.on("zoomend",function(){window.console.log("something zoomed"),pruneCluster.ProcessView()});