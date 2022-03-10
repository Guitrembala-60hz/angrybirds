const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variaveis
var engine, world;
var box1, pig1, platform;
var slingshot, gamestate = "onSling";
var bgImg = "sprites/bg.png";
var backgroundimg;
var score = 0;


function preload(){
    //chamando a função que verifica o horario e determina a imagem de fundo
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    //inicia o mecanismo de fisica e cria o mundo
    engine = Engine.create();
    world = engine.world;

    //inicia os objetos de solo, base, as caixas, os pigs e o passaro
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //e a conexao entre o passaro e o estilingue
    slingshot = new SlingShot(bird.body, {x:200,y:50});

}

function draw(){

//carrega a imagem do background
if(backgroundimg) {
    background(backgroundimg);
}

//texto da pontuação
noStroke();
fill("white");
textSize(35);
text("score: "+ score, width-300, 50); 
    
    //atualiza os mecanismos
    Engine.update(engine);

    //mostrando os objetos
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    slingshot.display();
}

//função chamada quando ha um click no mouse
function mouseDragged() {
    //quando segura o mouse o bird segue o mouse
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    //quando solto o mouse o bird desconecta do estilingue e depois  muda o gamestate
    slingshot.fly();
    gamestate = "launched";
}

function keyPressed() {
    //quando aperto a tecla espaço a trajetoria do bird desaparece,
    // o bird volta a sua posição inicial e prende ele de novo no estilingue
    if(keyCode === 32 ) {
        bird.trajetoria = [];
        Matter.Body.setPosition(bird.body, {x:200, y:50});
        slingshot.attach(bird.body);
    }
}

//cria uma função assicrona(o programa espera por ela)
async function getBackground(){
    //esta acotecendo uma pesquisa na internet e guardando dados na variavel resposta
    var resposta = await fetch("https://worldtimeapi.org/api/timezone/America/Cuiaba");
    var respostaJSON = await resposta.json();

    //tiramos da vriavel resposta apenas o datatime(a hora do dia)
    var datatime = respostaJSON.datetime;
    var hora = datatime.slice(11,13);
    console.log(hora);

    //escolhe a imagem de acordo com o horario
    if(hora>=06 && hora<=19) {
        bgImg = "sprites/bg.png";
    }
    else{
        bgImg = "sprites/bg2.jpg";
    }

    //carrega a imagem escolhida acima
    backgroundimg = loadImage(bgImg);
}