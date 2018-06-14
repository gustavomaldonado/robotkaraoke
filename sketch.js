/*
 *
 * HEADER visualizador musical
 * TITULO (10/06/2018)
 * NOMBRE gustavo maldonado sánchez(staav)
 * 
 *
 * URL www.gstaav.com  (en construcción)
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var mic;
var level = [];
var c;
var capture;
var holaP;



var spot = {   //OBJETO
     x : 100,
    y :  50
};

var col = {
    r : 248,
    g : 0,
    b : 51
    
};

function setup() {
 
  createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();
	level.push(mic.getLevel());
	capture = createCapture(VIDEO)
	capture.hide();
	img = loadImage("data/robot.png");  
	//holaP = select("#holaP");
	//holaP.position(680, 50);
	//holaP.textSize(12 + (mouseX / width)*72);
  //.text("Attention, please.", 50, 200);
	
}

function draw() {
  
  fill(30,30,30,40);
  background(0);
  drawCircles();
  image(img, 200, 0);
  image(capture, 0, 0); 
	
	
	noFill();
	stroke(0);
	level.push(mic.getLevel());
	    
  /*
 *****************************************
 *****************************************
 * visualizacion audio
 *****************************************
 *****************************************
 */		
	
	stroke(255, 200, 60);
	line(0, map(level[level.length - 1], 0, 1, windowHeight, windowHeight - height), width, 
	map(level[level.length - 1], 0, 1, windowHeight, windowHeight - height));
	
  
	beginShape();
	
	
	stroke(50, 200, 60);
	for (var i = 0; i < level.length; i++) {
    c =vertex(i, map(level[i], 0, 1, windowHeight, windowHeight - height));
    
		
  }
  

	endShape();
	
  if (level.length > width) {
    level.splice(0, 1);
  }
  /*
 *****************************************
 *****************************************
 * robot
 *****************************************
 *****************************************
 */
		if(true) {
		noStroke();
		fill(map(mic.getLevel(), 0, 10, 0, 255), 30, 50);
		ellipse(330, 320, mic.getLevel() * 700, mic.getLevel() * 300);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 200, 50);
		ellipse(330,320, mic.getLevel() * 400, mic.getLevel()  *  50);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 10, 36);
		ellipse(330, 320, mic.getLevel() * 100, mic.getLevel() *  50);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 10, 36);
		ellipse(300, 220, mic.getLevel() * 200, mic.getLevel() * 200);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 10, 36);
		ellipse(380, 220, mic.getLevel() * 200, mic.getLevel() * 200);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 125, 36);
		ellipse(300, 220, mic.getLevel() * 100, mic.getLevel() * 100);
		fill(map(mic.getLevel(), 0, 10, 0, 255), 125, 36);
		ellipse(380, 220, mic.getLevel() * 100, mic.getLevel() * 100);
				
		fill(160, 240, 21);
		ellipse(330, 320, 10, 10);
    
		
	}


/*
 *****************************************
 *****************************************
 * funciones
 *****************************************
 *****************************************
 */
}

function keyReleased() {
	if(key == ' ') {
		saveCanvas(c, 'roboto', 'png');
	}
}


  
  

function drawCircles() {
    
  print('drawCircles');
    spot.x = random(0, width);
    spot.y = random(0, height);
    noStroke();
    fill(col.r, col.g, col.b);
    ellipse(spot.x, spot.y, mic.getLevel() * 100,mic.getLevel() * 100);
    

}


	