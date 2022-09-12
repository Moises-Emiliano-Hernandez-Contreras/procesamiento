//detecta dibuja los canvass con TS
/*let canvas = <HTMLCanvasElement>document.createElement('canvas');
let ctx = canvas.getContext("2d")!;
canvas.width = 150;
canvas.height = 150;
canvas.style.border = "2px solid blue";

let canvas1 = <HTMLCanvasElement>document.createElement('canvas');
let ctx1 = canvas1.getContext("2d")!;
canvas1.width = 150;
canvas1.height = 150;
canvas1.style.border = "2px solid blue";

document.body.appendChild(canvas);
document.body.appendChild(canvas1)


let ima = new Image();
ima.src = "./edificio.png"
ima.onload = () => {
      ctx.drawImage(ima, 0, 0, canvas.width, canvas.height)
      ctx1.drawImage(ima, 0, 0, canvas1.width, canvas1.height)
      var imageData = ctx.getImageData(0, 0, canvas1.width, canvas1.height);
      var pixels = imageData.data
      var numPixels = imageData.width * imageData.height;

      for (var i = 0; i < numPixels; i++) {
            var r = pixels[i * 4],
                  g = pixels[i * 4 + 1],
                  b = pixels[i * 4 + 2];
            var grey = (r + g + b) / 3;
            pixels[i * 4] = grey;
            pixels[i * 4 + 1] = grey;
            pixels[i * 4 + 2] = grey;

      }
      ctx1.putImageData(imageData, 0, 0);
} */
//Detecta las imagenes cuando ya se suben
/* function previewFile() {
      const preview = document.querySelector('img')! as HTMLImageElement | null;
      const file = document.querySelector('input[type=file]') as HTMLInputElement | null;
      let fi=file?.files![0];
      const reader = new FileReader();
      reader.addEventListener("load", function () {
            preview?.setAttribute("src",reader.result as string)
      }, false);

      if (fi) {
            reader.readAsDataURL(fi);
      }
}
 */
var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 150;
canvas.height = 150;
canvas.style.border = "2px solid blue";
document.body.appendChild(canvas);
function previewFile() {
    var img = new Image();
    var file = document.querySelector('input[type=file]');
    var fi = file === null || file === void 0 ? void 0 : file.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        //preview?.setAttribute("src",reader.result as string)
        img.src = reader.result;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }, false);
    if (fi) {
        reader.readAsDataURL(fi);
    }
}
