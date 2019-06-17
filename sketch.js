// Funciona bem, mas só com o clique do
//usuário
let speech;
let i = 0;
function setup() {
  createCanvas(50,50);
  speech = new p5.Speech(); 
  speech.onLoad = voiceReady;
  
  
  function voiceReady(){
     console.log(speech.voices);
     console.log(i++);
  }
}

function mousePressed() {

  speech.setPitch(random(0.2,1));
  speech.speak('Favor avisar o professor Bonelli,se ouviu essa mensagem.');
  speech.speak('Obrigada.');
}
function draw(){
  background(111);
}
