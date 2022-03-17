


//change background color
var h = 200;
var s = 4;
var b = 95;

//change text color
var h2 = 160;
var s2 = 80;
var b2 = 40;




//fonts
var fonts = ["Viaoda Libre", "Inknut Antiqua", "mon-nicolette-toscane", "kepler-std-extended-display", "orpheuspro", "mencken-std-head-compress", "moret", "jaf-lapture"];
var index;


//text
//A [1 adjective a] [2 plant], [3 verbing adjective] [4adverbly]. Its [5 appendage] [6 verb] in the [7 verb noun] [8 atmosphere noun]. It [9 verb combination] [10 feeling verb noun].

var word1 = ["TALL", "SHORT", "STOUT", "ROUND", "RECTANGULAR", "PYRAMIDAL", "HEXAGONAL", "TRAPEZOID", "TRIANGULAR", "GROTESQUE", "FORMLESS", "PRIMORDIAL"];

var word2 = ["TREE", "SHRUB", "POTTED PLANT", "BUSH", "CACTUS"];

var word3 = ["TWISTING", "BLOSSOMING", "SPROUTING", "CLIMBING", "BLOOMING", "GROWING", "RIPENING", "TAKING ROOT", "WITHERING", "RUNNING", "CONTORTING", "CURVING", ];

var word4 = ["GENTLY", "TENDERLY", "ANGRILY", "BEAUTIFULLY", "FIERCELY", "FURIOUSLY", "SERENELY", "FORCEFULLY", "FAST", "SLOW", "ELEGANTLY"];

var word5 = ["LEAVES", "BRANCHES", "BUDS", "FRUITS", "TENDRILS", "BERRIES", "FLOWERS", "FRONDS", "VEINS", "VINES", "EYES", "ROOTS", "PETALS", "STALKS", "STEMS"];

var word6 = ["MURMUR", "WHISPER", "SHIVER", "FLUTTER", "WEIGH", "DROOP", "BLINK", "BREATHE", "SWAY", "QUIVER", "RUSTLE", "SIGH", "TWITCH"];

var word7 = ["DARKENING", "SOFTENING", "LIGHTENING", "DEEPENING", "TRANSLUCENT", "CRISP", "COLD", "WARM", "DARK", "PULSATING", "PRISTINE", "FOREBODING"];

var word8 = ["SKY", "FOG", "AIR", "ETHER", "AURA", "STILLNESS", "SILENCE", "SUNRISE", "SUNSET", "DUSK", "NIGHT", "EVENING LIGHT", "MORNING LIGHT", "GLOOM",];

var word9 = ["FILLS YOU WITH", "MAKES YOU REMEMBER DAYS OF", "MAKES YOU FEEL HEAVY WITH", "MAKES YOU FEEL LIGHT WITH", "STIRS", "AWAKENS", "IGNITES", "SPARKS", "EXUDES", "EMITS", "RADIATES"];

var word10 = ["HAPPINESS", "SORROW", "MELANCHOLY", "LONGING", "DELIGHT", "WONDER", "UNCERTAINTY", "UNEASE", "CALM", "ENCHANTMENT", "BLISS", "ANXIETY", "DISQUIET", "APPREHENSION", "TENSION"];


var sentence = ["Two paths diverge.", "A fork in the road.", "Where should I go?", "A forking path.", "Left or right?", "Two choices ahead."]

var against = ["AGAINST THE", "IN THE"]


function preload() {
  sound = loadSound('assets/Birds Loop.mp3'); 
}




function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
 h=random(200);
 h2=random(55,160);

  
  
//button = createButton('🡤');
 // button.position(windowWidth/2-150, windowHeight/2-315);
//  button.mousePressed(randomize);
//    button.style('font-size', '20px');
//  button.style('color', h2, s2, b2);
//  button.style('background-color', 'transparent');
//  button.style('border', 'none');
  
  
//  button = createButton('🡥');
//  button.position(windowWidth/2+110, windowHeight/2-315);
//  button.mousePressed(randomize);
//  button.style('font-size', '20px');
//  button.style('color', '#000');
//  button.style('background-color', 'transparent');
// button.style('border', 'none');
  
  
  
  
  
  
fontindex = round(random(0, 7));

  index1 = round(random(0,11))
  index2 = round(random(0,4))
  index3 = round(random(0,11))
  index4 = round(random(0,10))
  index5 = round(random(0,14))
  index6 = round(random(0,12))
  index7 = round(random(0,11))
  index8 = round(random(0,13))
  index9 = round(random(0,10))
  index10 = round(random(0,14))
  
sindex = round(random(0,5))  
aindex = round(random(0,1))  
}





function draw() {
  
 
 if(mouseX>width/2-170 && mouseX<width/2-150 && mouseY> windowHeight/4-10 && mouseY<windowHeight/4+10){
 cursor(HAND);
}
  else if(mouseX<width/2+155 && mouseX>width/2+135 && mouseY> windowHeight/4-10 && mouseY<windowHeight/4+10){
 cursor(HAND);
}
  else {cursor(CROSS);}
  
  
  
  
  
  colorMode(HSB);
  background(h,s,b);
  fill(h2,s2,b2);
  
  textFont(fonts[fontindex]);
  
  textSize(40);
  textAlign(CENTER, CENTER);
  
  textWrap(WORD);
  
  //Displaying the text
  text(
    "A " 
    + word1[index1] 
    + " " 
    + word2[index2] 
    + ", " 
    + word3[index3]
    + " "
    + word4[index4]
    +". ITS "
    + word5[index5]
    + " "
    + word6[index6]
    + " "
    + against[aindex]
    + " "
    + word7[index7]
    + " "
    + word8[index8]
    + ". IT "
    + word9[index9]
    + " "
    + word10[index10]
    + "."
    , windowWidth/3
  , windowHeight/3, windowWidth/3);
  
 
  textSize(16);
  textFont("Space Mono");
  text(sentence[sindex], windowWidth/3, windowHeight/4, windowWidth/3);
  text("🡤                              🡥", windowWidth/3, windowHeight/4, windowWidth/3);

  

  
}







function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas('infinitegarden.png');}


function mousePressed() {
if(mouseX>width/2-170 && mouseX<width/2-150 && mouseY> windowHeight/4-10 && mouseY<windowHeight/4+10){
  fontindex = round(random(0, 7));
  index1 = round(random(0,11));
  index2 = round(random(0,4));
  index3 = round(random(0,11));
  index4 = round(random(0,10));
  index5 = round(random(0,14));
  index6 = round(random(0,12));
  index7 = round(random(0,11));
  index8 = round(random(0,13));
  index9 = round(random(0,10));
  index10 = round(random(0,14));
  
  aindex = round(random(0,1))
  sindex = round(random(0,5))
  h=random(200);
 h2=random(55,160);
}
  else if(mouseX<width/2+1550 && mouseX>width/2+135 && mouseY> windowHeight/4-10 && mouseY<windowHeight/4+10){
  fontindex = round(random(0, 7));
  index1 = round(random(0,11));
  index2 = round(random(0,4));
  index3 = round(random(0,11));
  index4 = round(random(0,10));
  index5 = round(random(0,14));
  index6 = round(random(0,12));
  index7 = round(random(0,11));
  index8 = round(random(0,13));
  index9 = round(random(0,10));
  index10 = round(random(0,14));
  
  aindex = round(random(0,1))
  sindex = round(random(0,5))
  h=random(200);
 h2=random(55,160);
}
  
  if (sound.isPlaying()) {} else {
    sound.loop();
}}
  
 




