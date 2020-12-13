// to canvas
$('.toCanvas').click(function(e) {
  html2canvas(test).then(function(canvas) {
    // canvas width
    var canvasWidth = canvas.width;
    // canvas height
    var canvasHeight = canvas.height;
    // render canvas
    $('.toCanvas').after(canvas);
    // show 'to image' button
    $('.toPic').show(1000);
    // convert canvas to image
    $('.toPic').click(function(e) {
      var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
      // render image
      $(".toPic").after(img);
      // save
      $('#save').click(function(e) {
        let type = $('#sel').val(); // image type
        let w = $('#imgW').val(); // image width
        let h = $('#imgH').val(); // image height
        let f = $('#imgFileName').val(); // file name
        w = (w === '') ? canvasWidth : w;
        h = (h === '') ? canvasHeight : h;
        // save as image
        Canvas2Image.saveAsImage(canvas, w, h, type, f);
      });
    });
  });
});
