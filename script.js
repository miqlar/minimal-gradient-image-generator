var fs = require("fs");
const { createCanvas } = require('canvas')

var args = process.argv.slice(2);

console.log(args.length)

// Check N of arguments
if (args.length<5){
    return console.log('Error: Parameters missing: width(px) height(px) color1(hex) color2(hex) angle(º)')
}

// Sets parameters
const size = [parseInt(args[0]), parseInt(args[1])]
const colors = [args[2], args[3]]
const angle = parseInt(args[4])

// Degrees to radians
function toRadians (angle) {
  return angle * (Math.PI / 180);
}

// Returns coordinates of two lines that define the gradient line
function gradientLineXY (width, height, angle) {
    var sin_angle = Math.sin(toRadians(angle));
    var cos_angle = Math.cos(toRadians(angle));
    var lineLength = Math.abs((width * sin_angle) + Math.abs(height * cos_angle));
    var xy_center = [width/2, height/2];
    return [xy_center[0]-cos_angle*0.51*lineLength, xy_center[1]-sin_angle*0.51*lineLength, xy_center[0]+cos_angle*0.51*lineLength, xy_center[1]+sin_angle*0.51*lineLength]
}

var canvas = createCanvas(...size, "png");

var ctx = canvas.getContext("2d");

// x0, y0, x1, y1
const grd = ctx.createLinearGradient(...gradientLineXY(...size, angle))

grd.addColorStop(0, colors[0]);
grd.addColorStop(1, colors[1]);

ctx.fillStyle = grd

ctx.fillRect(0, 0, ...size);

var buf = canvas.toBuffer();
fs.writeFileSync( colors[0]+'_'+colors[1]+'_'+(angle)+".png", buf);