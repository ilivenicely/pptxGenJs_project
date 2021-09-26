let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide(); 
  let opts = {
    x: "55%",
    y: "20%",
    w: 4.0,
    h: 4.0,
    align: 'center',
    fontSize: 24,
    color: '0088CC',
    fill: 'F1F1F1',
    rounding:true
  };
  
  
  slide.addImage({ path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg", x:  "4%", y: "20%", w: 4.0, h: 4.0 });
  
  slide.addText(
    'BONJOUR - 你好',
    opts
  );
  pptx.writeFile();
}
