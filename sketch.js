var speech;
let palavra = " favor começar.  números de 0 a 9, esquerda, direita, cima, baixo, em Inglês";
let conf;
console.log('ml5 version: ', ml5.version)

let soundClassifier;

function preload() {
  let prob = {
    probabilityThreshold: 0.9999
  }
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', prob);
}


function setup() {
  let botao = createButton('clique aqui, para iniciar ou mudar de voz');
  createP('Diga, em Inglês, números de 0 a 9 ou as palavras up, down, left, right, yes, no, stop, com um intervalo entre elas de 1 a dois segundos...Ao lado da palavra reconhecida, aparece o grau de confiança no reconhecimento da máquina.');

  soundClassifier.classify(gotResults);

  speech = new p5.Speech();

  //speech.onStart = voiceReady();
    botao.mousePressed(voiceReady);
}

function gotResults(error, results) {
  if (error) {
    console.log('erro : ', error);
  }
  palavra = results[0].label;
  conf = results[0].confidence;
  console.log(palavra, conf);
  createP(palavra);
  createP('confiança: ' + conf);
  if (palavra == 'two') {
    palavra = 'dois';
  } 
  
  if (palavra == 'up') {
    palavra = 'para cima';
  }

if (palavra == 'yes') {
    palavra = 'sim';
  }
if (palavra == 'no') {
    palavra = 'nãooo';
  }
  speech.speak(palavra);
}

function voiceReady() {

  console.log(speech.voices);
                                 
  speech.setPitch(random(0.5,1));

  speech.setLang('pt-BR');

  speech.speak(palavra);

  console.log(speech.voices);
}
