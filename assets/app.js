$(document).ready(function() {

      var resizeText = function () {
          // Standard height, for which the body font size is correct
          var preferredFontSize = 180; // %
          var preferredSize = 1024 * 768;
  
          var currentSize = $(window).width() * $(window).height();
          var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
          var newFontSize = preferredFontSize * scalePercentage;
          $(".resize").css("font-size", newFontSize + '%');
          $(".resize2").css("font-size", newFontSize + 95 + '%');
      };
  
      $(window).bind('resize', function() {
          resizeText();
      }).trigger('resize');
  
  });