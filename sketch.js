let capture;
let img;
let angle = 0;


function preload() {
  font = loadFont("nimbusmono-bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  noCursor();

  textFont(font);
  textSize(20);
  textWrap(CHAR);
  frameRate(9);
  
  capture = createCapture(VIDEO);
  capture.size(width/2, height/2);
  capture.hide();
  
  img = createGraphics(width/2, height/2);
}

function draw() {
 
  background(0);
  orbitControl();
  
  angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);
  
  img.image(capture, 0, 0);
  img.filter(THRESHOLD);
  
  push();

   rotateY(angle);

  if (cos(angle) < 0) {
    texture(img);
      filter(INVERT);
    img.filter(INVERT);
  } else {
    texture(img);
  }
  
  noStroke();
  plane(width/2, height/2);

  pop();
  
  {
push();
translate(0, 0, -200 + angle * 100);
noStroke();
    fill(255);

for (let i = 0; i < 80; i++) {

  let x = map(noise(i, frameCount * 0.02), 0, 1, -width, width);
  let y = map(noise(i + 1000, frameCount * 0.02), 0, 1, -height, height);
  let w = map(noise(i + 2000), 0, 1, 10, 200);
  let h = map(noise(i + 3000), 0, 1, 1, 5);

  rect(x, y, w, h);
}
pop();
  }
  
  fill(0);
  translate(0, 0, -300 + angle * 20);
  text('let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);', -720, -290, 1300, 800);
  fill(80);
  translate(150, -50, -800 + angle * 100);
  rotateY(angle/10);
  text('let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);', -360, -600, 700, 2000);
  
  fill(30);
  translate(-750, 50, -1000 + angle * 120);
  rotateY(-angle/25);
  text('let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);img.image(capture, 0, 0)img.filter(THRESHOLD);push();rotateY(angle);if (cos(angle) < 0) {texture(img);filter(INVERT);img.filter(INVERT);} else {texture(img);}noStroke();plane(360, 200);pop();}function mousePressed() {if (isLooping()) {noLoop();} else {loop();}}let capture;let img;let angle = 0;let font1;let font2;function preload() {font = loadFont("nimbusmono-bold.otf");}function setup() {createCanvas(720, 400, WEBGL);textFont(font);textSize(12);frameRate(12)capture = createCapture(VIDEO);capture.size(360, 200);capture.hide();img = createGraphics(360, 200);}function draw() {background(0);angle = lerp(angle, map(mouseX, 0, width, -PI, PI), 0.1);', -860, 100, 3500, 200);
 

}


 
