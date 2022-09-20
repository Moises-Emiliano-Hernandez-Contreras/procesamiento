var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
canvas.style.border = "2px solid blue";
document.body.appendChild(canvas);
var canvas2 = document.createElement('canvas');
var ctx2 = canvas2.getContext("2d");
canvas2.style.marginLeft = '20px';
canvas2.width = 400;
canvas2.height = 400;
canvas2.style.border = "2px solid blue";
document.body.appendChild(canvas2);
var grises = document.getElementById("grises");
var limp = document.getElementById("limpiar");
var inv = document.getElementById("inv");
var sep = document.getElementById("sepia");
var tri = document.getElementById("tri");
function previewFile() {
    var img = new Image();
    var file = document.querySelector('input[type=file]');
    var fi = file === null || file === void 0 ? void 0 : file.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        img.src = reader.result;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            limp.addEventListener("click", limpiar);
            grises.addEventListener("click", function () { gris(img); });
            inv.addEventListener("click", function () { invertir(img); });
            sep.addEventListener("click", function () { sepia(img); });
            tri.addEventListener("click", function () { triColor(img); });
        };
    }, false);
    if (fi) {
        reader.readAsDataURL(fi);
    }
}
var triColor = function (img) {
    ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    var imageData = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
    var pixels = imageData.data;
    var numPixels = imageData.width * imageData.height;
    numPixels = Math.ceil(numPixels / 3);
    for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 0;
        pixels[i * 4 + 1] = pixels[i * 4 + 1];
        pixels[i * 4 + 2] = 0;
    }
    for (var j = numPixels; j < numPixels * 2; j++) {
        var grey = (pixels[j * 4] + pixels[j * 4 + 1] + pixels[j * 4 + 2]) / 3;
        pixels[j * 4] = grey;
        pixels[j * 4 + 1] = grey;
        pixels[j * 4 + 2] = grey;
    }
    for (var k = numPixels * 2; k < numPixels * 3; k++) {
        pixels[k * 4] = pixels[k * 4];
        pixels[k * 4 + 1] = 0;
        pixels[k * 4 + 2] = 0;
    }
    ctx2.putImageData(imageData, 0, 0);
};
var gris = function (img) {
    ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    var imageData = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
    var pixels = imageData.data;
    var numPixels = imageData.width * imageData.height;
    for (var i = 0; i < numPixels; i++) {
        var r = pixels[i * 4], g = pixels[i * 4 + 1], b = pixels[i * 4 + 2];
        var grey = (r + g + b) / 3;
        pixels[i * 4] = grey;
        pixels[i * 4 + 1] = grey;
        pixels[i * 4 + 2] = grey;
    }
    ctx2.putImageData(imageData, 0, 0);
};
var invertir = function (img) {
    ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    var imageData = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
    var pixels = imageData.data;
    var numPixels = imageData.width * imageData.height;
    for (var i = 0; i < numPixels; i++) {
        var r = pixels[i * 4], g = pixels[i * 4 + 1], b = pixels[i * 4 + 2];
        pixels[i * 4] = 255 - r;
        pixels[i * 4 + 1] = 255 - g;
        pixels[i * 4 + 2] = 255 - b;
    }
    ctx2.putImageData(imageData, 0, 0);
};
var sepia = function (img) {
    ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    var imageData = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
    var pixels = imageData.data;
    var numPixels = imageData.width * imageData.height;
    for (var i = 0; i < numPixels; i++) {
        var r = pixels[i * 4], g = pixels[i * 4 + 1], b = pixels[i * 4 + 2];
        pixels[i * 4] = 255 - r;
        pixels[i * 4 + 1] = 255 - g;
        pixels[i * 4 + 2] = 255 - b;
        pixels[i * 4] = (r * .393) + (g * .769) + (b * .189);
        pixels[i * 4 + 1] = (r * .349) + (g * .686) + (b * .168);
        pixels[i * 4 + 2] = (r * .272) + (g * .534) + (b * .131);
    }
    ctx2.putImageData(imageData, 0, 0);
};
var limpiar = function () {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
};
