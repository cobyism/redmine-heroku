 if (window.jQuery) {
  $(window).load(function(){
    if (window.devicePixelRatio > 1) {
      var images = findImagesByRegexp('contacts_thumbnail', document);

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        old_size = lowres.match(/\/(\d*)$/)[1]
        var highres = lowres.replace(/\/(\d*)$/, "/" + String(old_size*2));
        images[i].src = highres;
      }

      var images = findImagesByRegexp(/gravatar.com\/avatar.*size=\d+/, document)

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        old_size = lowres.match(/size=(\d+)/)[1]
        var highres = lowres.replace(/size=(\d+)/, "size=" + String(old_size*2));
        images[i].src = highres;
        images[i].height = old_size;
        images[i].width = old_size;
      }

      var images = findImagesByRegexp(/\/attachments\/thumbnail\/\d+$/, document)

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        var height = images[i].height
        var width = images[i].width
        var highres = lowres + "?size=" + Math.max(height, width)*2;
        if (Math.max(height, width) > 0) {
          images[i].src = highres;
          images[i].height = height;
          images[i].width = width;
        }
      }

// Sized thumbnails
      var images = findImagesByRegexp(/\/attachments\/thumbnail\/\d+\/\d+$/, document)
      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        var height = images[i].height
        var width = images[i].width
        old_size = lowres.match(/\/(\d*)$/)[1]
        var highres = lowres.replace(/\/(\d*)$/, "/" + String(old_size*2));
        images[i].src = highres;
        if (Math.max(height, width) > 0) {
          images[i].src = highres;
          images[i].height = height;
          images[i].width = width;
        }
      }

// People avatars
      var images = findImagesByRegexp(/people\/avatar.*size=\d+$/, document)

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        old_size = lowres.match(/size=(\d+)$/)[1]
        var highres = lowres.replace(/size=(\d+)$/, "size=" + String(old_size*2));
        images[i].src = highres;
      }


    }
  });
} else {
  document.observe("dom:loaded", function() {
    if (window.devicePixelRatio > 1) {
      var images = findImagesByRegexp('thumbnail', document);

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        old_size = lowres.match(/size=(\d*)$/)[1]
        var highres = lowres.replace(/size=(\d*)$/, "size=" + String(old_size*2));
        images[i].src = highres;
      }

      var images = findImagesByRegexp(/gravatar.com\/avatar.*size=\d+/, document)

      for(var i = 0; i < images.length; i++) {
        var lowres = images[i].src;
        old_size = lowres.match(/size=(\d+)/)[1]
        var highres = lowres.replace(/size=(\d+)/, "size=" + String(old_size*2));
        images[i].src = highres;
        images[i].height = old_size;
        images[i].width = old_size;
      }
    }

  });
}

function findImagesByRegexp(regexp, parentNode) {
   var images = Array.prototype.slice.call((parentNode || document).getElementsByTagName('img'));
   var length = images.length;
   var ret = [];
   for(var i = 0; i < length; ++i) {
      if(images[i].src.search(regexp) != -1) {
         ret.push(images[i]);
      }
   }
   return ret;
};
