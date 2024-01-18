let colorTheme = window.prompt('Please choose a color theme by typing a basic color name in lowercase letters', 'red')

function setup() {
  createCanvas(2000, 1000);
  background(10, 160, 245);
}

function draw() {
  //background
  //trees
  stroke(0);
  strokeJoin(ROUND);
  fill(50, 225, 100);
  triangle(-30, 650, 30, 650, 0, 500);
  triangle(60, 650, 180, 650, 120, 470);
  triangle(160, 650, 240, 650, 200, 500);
  triangle(60, 650, 180, 650, 120, 470);
  fill(30, 175, 75);
  triangle(0, 650, 90, 650, 45, 430);
  triangle(220, 650, 320, 650, 270, 512);
  fill(50, 225, 100);
  triangle(300, 650, 400, 660, 350, 525);
  //snow
  fill(255);
  strokeWeight(5);
  strokeCap(SQUARE);
  beginShape();
  curveVertex(0, 630);
  curveVertex(850, 680);
  curveVertex(2000, 620);
  curveVertex(2000, 1000);
  curveVertex(0, 1000);
  endShape(CLOSE);
  //house
  fill(130, 95, 20);
  quad(1600, 700, 1950, 630, 1950, 430, 1600, 300);
  fill(150, 115, 40); 
  quad(1600, 700, 1600, 300, 1200, 350, 1200, 650);
  triangle(1605, 300, 1200, 350, 1390, 200);
  fill(255); 
  quad(1390, 200, 1800, 350, 1950, 430, 1620, 335);
  fill(100, 70, 10);
  quad(1800, 660, 1900, 640, 1900, 540, 1800, 530);

  //scarf -base layer
  fill(colorTheme)
  beginShape();
  curveVertex(1100, 405);
  curveVertex(1125, 485);
  curveVertex(1225, 640);
  curveVertex(1150, 662);
  curveVertex(1060, 458);
  curveVertex(1105, 418);
  endShape(CLOSE);

  //shadow
  fill(230);
  noStroke();
  ellipse(1013, 820, 330, 155);

  //arms
  stroke(0);
  strokeWeight(12);
  strokeCap(ROUND);
  line(890, 460, 700, 400);
  line(1110, 442, 1300, 390);
  line(890, 465, 700, 400);
  line(1110, 448, 1300, 390);
  strokeWeight(10);
  line(733, 456, 763, 419);
  line(733, 456, 771, 420);
  line(720, 350, 782, 422);
  line(720, 350, 788, 426);
  line(1289, 456, 1245, 412);
  line(1289, 456, 1241, 413);
  line(1277, 350, 1215, 416);
  line(1277, 350, 1213, 416);

  //hat -base layer
  stroke(0);
  strokeWeight(5);
  fill(0);
  ellipse(1000, 250, 300, 100);
  quad(910, 230, 1075, 230, 1080, 140, 900, 138);
  ellipse(990, 136, 180, 60);

  //snow man
  stroke(0);
  strokeWeight(5);
  fill(255);
  circle(1000, 700, 300);
  circle(1000, 500, 250);
  circle(1000, 300, 200);

  //face
  fill(0)
  circle(960, 278, 30);
  circle(1040, 278, 30);
  fill(255);
  circle(956, 274, 15);
  circle(1036, 274, 15);
  fill(250, 200, 15);
  strokeJoin(ROUND);
  triangle(981, 305, 1019, 305, 1000, 350);
  arc(1000, 301, 38, 40, PI - 0.5,  QUARTER_PI);
  noStroke();
  circle(1000, 305, 22);
  noFill();
  stroke(0);
  strokeWeight(5);
  strokeCap(ROUND);
  arc(1000, 330, 100, 80, 0.5, HALF_PI, OPEN);

  //buttons
  fill(0);
  circle(1000, 500, 20); 
  circle(1000, 550, 20); 
  
  //hat -front layer
  stroke(0);
  strokeWeight(5);
  fill(0);
  ellipse(1000, 228, 250, 50);

  //hat band
  fill(colorTheme);
  beginShape();
  curveVertex(908, 215);
  curveVertex(1000, 217);
  curveVertex(1080, 215);
  curveVertex(1082, 195);
  curveVertex(1000, 185);
  curveVertex(908, 195);
  endShape(CLOSE);

  //scarf -front layer
  fill(colorTheme);
  beginShape();
  curveVertex(940, 388);
  curveVertex(1000, 400);
  curveVertex(1070, 388);
  curveVertex(1073, 408);
  curveVertex(1000, 428);
  curveVertex(908, 408);
  endShape(CLOSE);
  
  beginShape();
  curveVertex(1100, 405);
  curveVertex(1100, 485);
  curveVertex(1110, 650);
  curveVertex(1035, 662);
  curveVertex(1060, 428);
  curveVertex(1100, 408);
  endShape(CLOSE);

  circle(1080, 410, 55)
}





