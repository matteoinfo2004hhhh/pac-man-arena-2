var myGamePiece;
//potenziamenti
var pall1 = [];
var pall2 = [];
var pall3 = [];
var frutta1 = [];
var frutta2 = [];
var frutta3 = [];
var frutta4 = [];
var frutta5 = [];
var frutta6 = [];
var frutta7 = [];
var frutta8 = [];
var frutta9 = [];
var frutta10 = [];
var frutta11 = [];
var frutta12 = [];
//nemici
var fantasmi = [];
var fantasmi2 = [];
var fantasmi3 = [];
var fantasmi4 = [];
var fantasmi5 = [];
var fantasmi6 = [];
var fantasmi7 = [];
var fantasmi8 = [];
var fantasmi9 = [];
var fantasmi10 = [];
var fantasmi11 = [];
var fantasmi12 = [];
var fantasmi13 = [];
var fantasmi1g = [];
var fantasmi2g = [];
var fantasmi3g = [];
//compomenti del gioco
var myScore;
var myWrite;
var myWrite2;
var mySuono;
var mySuono2;
var mySuono3;
var mySuono4;
var mySuono5;
var mySuono6;
var Musica;
var p=document.getElementById('pp');
var punto=0;

function dd(){
    var divDaNascondere2 = document.getElementById("jj");
    divDaNascondere2.style.display = "none";
}

function startGame() {
    myGamePiece = new component(50, 50, "idle1.png", 900, 420, "image");
    myScore = new component("70px", "Consolas", "white", 6, 60, "text");
    myWrite = new component("100px", "Consolas", "red", 780,200, "text");
    myWrite2 = new component("50px", "Consolas", "blue", 1341,40, "text");
    mySuono = new sound("pacit.mp3");
    mySuono2 = new sound("wa.wav");
    mySuono3 = new sound("morte.wav");
    mySuono4 = new sound("mangiafa.wav");
    mySuono5 = new sound("cc.wav");
    mySuono6 = new sound("mangiaf.wav");
    Musica = new sound("mgame.mp3");
    myGameArea.start();
    var divDaNascondere = document.getElementById("mm");
    divDaNascondere.style.display = "none";
  
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 960;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.frameNo2= 0;
        this.frameNog = 0;
        this.frameNog2 = 0;
        this.frameNot = 0;
        this.frameNot2 = 0;
        this.frameNogameover = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

setInterval(displayHello, 40);
function displayHello() {
    numc=Math.floor((Math.random() * 5) + 1);
    if(numc==1){
        myGamePiece.image.src = "pac1.png";
    }
    if(numc==2){
        myGamePiece.image.src = "pac2.png";
    }
    if(numc==3){
        myGamePiece.image.src = "pac3.png";
    }
    if(numc==4){
        myGamePiece.image.src = "pac4.png";
    }
    if (myGameArea.keys && myGameArea.keys[37]){
    if(numc==1){
        myGamePiece.image.src = "pac5.png";
    }
    if(numc==2){
        myGamePiece.image.src = "pac6.png";
    }
    if(numc==3){
        myGamePiece.image.src = "pac7.png";
    }
    if(numc==4){
        myGamePiece.image.src = "pac8.png";
    }
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
           
        }
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    for (i = 0; i < fantasmi.length; i += 1) {
        if (myGameArea.frameNog < 9) {
            if (myGamePiece.crashWith(fantasmi[i])) {
                myWrite.update();
                var divDaNascondere2 = document.getElementById("jj");
                divDaNascondere2.style.display = "block";
                mySuono3.play();
                Musica.stop();
                myGameArea.stop();
            }
        } else {
        }
    }
    
    for (i = 0; i < fantasmi2.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi2[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi4.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi4[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi5.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi5[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi6.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi6[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi7.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi7[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi8.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi8[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi9.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi9[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi10.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi10[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi11.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi11[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    for (i = 0; i < fantasmi12.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi12[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    for (i = 0; i < fantasmi13.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi13[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    for (i = 0; i < fantasmi1g.length; i += 1) {
        if(myGameArea.frameNog2<9){
         if (myGamePiece.crashWith(fantasmi1g[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    for (i = 0; i < fantasmi2g.length; i += 1) {
        if(myGameArea.frameNog2<9){
         if (myGamePiece.crashWith(fantasmi2g[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    for (i = 0; i < fantasmi3g.length; i += 1) {
        if(myGameArea.frameNog2<9){
         if (myGamePiece.crashWith(fantasmi3g[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             Musica.stop();
             myGameArea.stop();
         } 
        }else{
     }
    }

    myGameArea.clear();
    myGameArea.frameNo += 1;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;   

    if(myGameArea.frameNo2==0){
        mySuono.play();
    }

    if(myGameArea.frameNo>120){
        Musica.play();
    }

    if (myGameArea.keys && myGameArea.keys[37]){
        myGamePiece.speedX = -13; 
    }

    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 13;
    }

    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -13; 
    }
    
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 13; 
    }

    if(myGamePiece.x>1960){
        myGamePiece.speedX = -18; 
    }
    if(myGamePiece.x<0){
        myGamePiece.speedX = +18; 
    }
    if(myGamePiece.y<0){
        myGamePiece.speedY = +18; 
    }
    if(myGamePiece.y>920){
        myGamePiece.speedY = -18; 
    }
   //generazioen palline
 
    if (myGameArea.frameNo == 1 || everyinterval(12)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        pall1.push(new component(10, 10, "ball.png", x, y, "image"));
    }

    if(myGameArea.frameNo>1000){
        if (myGameArea.frameNo == 1 || everyinterval(3000)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            pall2.push(new component(30, 30, "ball2.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>4000){
        if (myGameArea.frameNo == 1 || everyinterval(4500)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            pall3.push(new component(30, 30, "ball3.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>100){
        if (myGameArea.frameNo == 1 || everyinterval(600)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta1.push(new component(50, 50, "ciliegia.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>200){
        if (myGameArea.frameNo == 1 || everyinterval(700)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta2.push(new component(50, 50, "fragola.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>300){
        if (myGameArea.frameNo == 1 || everyinterval(800)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta3.push(new component(50, 50, "arancia.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>400){
        if (myGameArea.frameNo == 1 || everyinterval(900)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta4.push(new component(50, 50, "mela.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>40){
        if (myGameArea.frameNo == 1 || everyinterval(1000)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta5.push(new component(50, 50, "mee.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>500){
        if (myGameArea.frameNo == 1 || everyinterval(1200)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta6.push(new component(50, 50, "bananaa.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>600){
        if (myGameArea.frameNo == 1 || everyinterval(1300)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta7.push(new component(50, 50, "pesca.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>700){
        if (myGameArea.frameNo == 1 || everyinterval(1400)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta8.push(new component(50, 50, "panee.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>800){
        if (myGameArea.frameNo == 1 || everyinterval(1500)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta9.push(new component(50, 50, "ascia.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>900){
        if (myGameArea.frameNo == 1 || everyinterval(1600)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta10.push(new component(50, 50, "campana.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>1000){
        if (myGameArea.frameNo == 1 || everyinterval(1700)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta11.push(new component(50, 50, "chiave.png", x, y, "image"));
            mySuono5.play();
        }    
    }

    if(myGameArea.frameNo>1100){
        if (myGameArea.frameNo == 1 || everyinterval(1800)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num2;
            y = myGameArea.canvas.height - num;
            frutta12.push(new component(50, 50, "medaglia.png", x, y, "image"));
            mySuono5.play();
        }    
    }
    //generazione fantasmi
    if(myGameArea.frameNo>120){
        if (myGameArea.frameNo == 1 || everyinterval(200)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -1;
            y = myGameArea.canvas.height - num;
            fantasmi.push(new component(50, 50, "fr.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>520){
        if (myGameArea.frameNo == 1 || everyinterval(1000)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -1;
            y = myGameArea.canvas.height - num;
            fantasmi2.push(new component(50, 50, "fred.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>720){
        if (myGameArea.frameNo == 1 || everyinterval(800)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -1;
            x2 = myGameArea.canvas.width +60;
            x3 = myGameArea.canvas.width +120;
            y = myGameArea.canvas.height - num;
            fantasmi3.push(new component(50, 50, "fred.png", x, y, "image"));
            fantasmi3.push(new component(50, 50, "fred.png", x2, y, "image"));
            fantasmi3.push(new component(50, 50, "fred.png", x3, y, "image"));
        }
    }

    if(myGameArea.frameNo>3000){
        if (myGameArea.frameNo == 1 || everyinterval(300)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -2100;
            y = myGameArea.canvas.height - num;
            fantasmi4.push(new component(50, 50, "frr.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>1000){
        if (myGameArea.frameNo == 1 || everyinterval(800)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -50;
            y = myGameArea.canvas.height - num;
            fantasmi5.push(new component(50, 50, "a.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>1100){
        if (myGameArea.frameNo == 1 || everyinterval(300)) {
            num=Math.floor(Math.random()*950)+10;
            num2=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width -1;
            y = myGameArea.canvas.height - num;
            fantasmi6.push(new component(50, 50, "fg.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>1700){
        if (myGameArea.frameNo == 1 || everyinterval(1000)) {
            num=Math.floor(Math.random()*950)+10;
            x = myGameArea.canvas.width -1;
            y = myGameArea.canvas.height - num;
            fantasmi7.push(new component(50, 50, "fvi.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>1890){
        if (myGameArea.frameNo == 1 || everyinterval(800)) {
            num=Math.floor(Math.random()*950)+10;
            x = myGameArea.canvas.width -60;
            y = myGameArea.canvas.height - num;
            fantasmi8.push(new component(50, 50, "fb.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>2000){
        if (myGameArea.frameNo == 1 || everyinterval(400)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num;
            y = myGameArea.canvas.height ;
            fantasmi9.push(new component(50, 50, "faz.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>2000){
        if (myGameArea.frameNo == 1 || everyinterval(500)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num;
            y = myGameArea.canvas.height - 1000;
            fantasmi10.push(new component(50, 50, "faz5.png", x, y, "image"));
        }
    }

    
    if(myGameArea.frameNo>2300){
        if (myGameArea.frameNo == 1 || everyinterval(500)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num;
            y = myGameArea.canvas.height ;
            fantasmi11.push(new component(50, 50, "fazz.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>2300){
        if (myGameArea.frameNo == 1 || everyinterval(600)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - num;
            y = myGameArea.canvas.height -1000;
            fantasmi12.push(new component(50, 50, "fazz5.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>2670){
        if (myGameArea.frameNo == 1 || everyinterval(300)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width;
            y = myGameArea.canvas.height -num;
            fantasmi13.push(new component(50, 50, "fm.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>3000){
        if (myGameArea.frameNo == 1 || everyinterval(300)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - 1;
            y = myGameArea.canvas.height - num;
            fantasmi1g.push(new component(150, 150, "fvvb.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>3500){
        if (myGameArea.frameNo == 1 || everyinterval(400)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - 1;
            y = myGameArea.canvas.height - num;
            fantasmi2g.push(new component(150, 150, "fgg.png", x, y, "image"));
        }
    }

    if(myGameArea.frameNo>4000){
        if (myGameArea.frameNo == 1 || everyinterval(500)) {
            num=Math.floor(Math.random()*2000)+10;
            x = myGameArea.canvas.width - 1;
            y = myGameArea.canvas.height - num;
            fantasmi3g.push(new component(150, 150, "fggg1.png", x, y, "image"));
        }
    }

    //generazioni potenziamenti

    for(i=0;i<pall1.length; i += 1){
        pall1[i].update();    
        if(myGamePiece.crashWith(pall1[i])){
            myGameArea.frameNo2+=10;
            punto+=10;
            mySuono2.play();
            pall1.splice(i, 1); 
            i--; 
        }
    }  

    for(i=0;i<pall2.length; i += 1){
        pall2[i].update();    
        if(myGamePiece.crashWith(pall2[i])){
            myGameArea.frameNo2+=100;
            myGameArea.frameNog+=10;
            punto+=100;
            mySuono2.play();
            pall2.splice(i, 1); 
            i--; 
        }
    }  


    for(i=0;i<pall3.length; i += 1){
        pall3[i].update();    
        if(myGamePiece.crashWith(pall3[i])){
            myGameArea.frameNo2+=1000;
            myGameArea.frameNog2+=10;
            myGameArea.frameNog+=10;
            punto+=1000;
            mySuono2.play();
            pall3.splice(i, 1); 
            i--; 
        }
    }  

    for(i=0;i<frutta1.length; i += 1){
        frutta1[i].update();    
        if(myGamePiece.crashWith(frutta1[i])){
            myGameArea.frameNo2+=100;
            punto+=100;
            frutta1.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }  

    for(i=0;i<frutta2.length; i += 1){
        frutta2[i].update();    
        if(myGamePiece.crashWith(frutta2[i])){
            myGameArea.frameNo2+=300;
            punto+=300;
            frutta2.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }  
  
    for(i=0;i<frutta3.length; i += 1){
        frutta3[i].update();    
        if(myGamePiece.crashWith(frutta3[i])){
            myGameArea.frameNo2+=500;
            punto+=500;
            frutta3.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta4.length; i += 1){
        frutta4[i].update();    
        if(myGamePiece.crashWith(frutta4[i])){
            myGameArea.frameNo2+=800;
            punto+=800;
            frutta4.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta5.length; i += 1){
        frutta5[i].update();    
        if(myGamePiece.crashWith(frutta5[i])){
            myGameArea.frameNo2+=1000;
            punto+=1000;
            frutta5.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    
    for(i=0;i<frutta6.length; i += 1){
        frutta6[i].update();    
        if(myGamePiece.crashWith(frutta6[i])){
            myGameArea.frameNo2+=2000;
            punto+=2000;
            frutta6.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta7.length; i += 1){
        frutta7[i].update();    
        if(myGamePiece.crashWith(frutta7[i])){
            myGameArea.frameNo2+=2500;
            punto+=2500;
            frutta7.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta8.length; i += 1){
        frutta8[i].update();    
        if(myGamePiece.crashWith(frutta8[i])){
            myGameArea.frameNo2+=3000;
            punto+=3000;
            frutta8.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta9.length; i += 1){
        frutta9[i].update();    
        if(myGamePiece.crashWith(frutta9[i])){
            myGameArea.frameNo2+=4000;
            punto+=4000;
            frutta9.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta10.length; i += 1){
        frutta10[i].update();    
        if(myGamePiece.crashWith(frutta10[i])){
            myGameArea.frameNo2+=5000;
            punto+=5000;
            frutta10.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta11.length; i += 1){
        frutta11[i].update();    
        if(myGamePiece.crashWith(frutta11[i])){
            myGameArea.frameNo2+=7000;
            punto+=7000;
            frutta11.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

    for(i=0;i<frutta12.length; i += 1){
        frutta12[i].update();    
        if(myGamePiece.crashWith(frutta12[i])){
            myGameArea.frameNo2+=10000;
            punto+=10000;
            frutta12.splice(i, 1); 
            mySuono6.play();
            i--; 
        }
    }

//cicli nemici
for (i = 0; i < fantasmi.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi[i].state = 'scared'; 
                fantasmi[i].image.src = "oo.png"; 
                this.fantasmi[i].height=30;
                fantasmi[i].x -= 13;
            }
        } else {
            fantasmi[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi[i].image.src = "fr.png";
        } 
        if (numf == 2) {
            fantasmi[i].image.src = "fr2.png";
        }
        if (numf == 3) {
            fantasmi[i].image.src = "fr4.png";
        }
        if (numf == 4) {
            fantasmi[i].image.src = "fr4.png";
        }
        this.fantasmi[i].height=50;
    }
    fantasmi[i].x -= 1.5;
    fantasmi[i].update();
    if (fantasmi[i].x < -100) {
        fantasmi.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi2.length; i += 1) {
    var speed = 3;
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        speed-=5;
        if (fantasmi2[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi2[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi2[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi2[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi2[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi2[i])) {
                myGameArea.frameNo2 += 400;
                punto += 400;
                num += 3;
                mySuono4.play();
                fantasmi2[i].state = 'scared'; 
                fantasmi2[i].image.src = "oo.png"; 
                this.fantasmi2[i].height=30;
                fantasmi2[i].x -= 13;
            }
        } else {
            fantasmi2[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi2[i].image.src = "fred.png";
        } 
        if (numf == 2) {
            fantasmi2[i].image.src = "fred2.png";
        }
        if (numf == 3) {
            fantasmi2[i].image.src = "fred4.png";
        }
        if (numf == 4) {
            fantasmi2[i].image.src = "fred4.png";
        }
        if(myGamePiece.x>fantasmi2[i].x){
            if (numf == 1) {
                fantasmi2[i].image.src = "fred5.png";
            } 
            if (numf == 2) {
                fantasmi2[i].image.src = "fred6.png";
            }
            if (numf == 3) {
                fantasmi2[i].image.src = "fred7.png";
            }
            if (numf == 4) {
                fantasmi2[i].image.src = "fred8.png";
            }
        }
        this.fantasmi2[i].height=50;
    }
    var deltaX = myGamePiece.x - fantasmi2[i].x;
    var deltaY = myGamePiece.y - fantasmi2[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    fantasmi2[i].x += speed * Math.cos(angle);
    fantasmi2[i].y += speed * Math.sin(angle);
    fantasmi2[i].update();
    if (fantasmi2[i].x < -100) {
        fantasmi2.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi3.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi3[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi3[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi3[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi3[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi3[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi3[i])) {
                myGameArea.frameNo2 += 500;
                punto += 500;
                num += 3;
                mySuono4.play();
                fantasmi3[i].state = 'scared'; 
                fantasmi3[i].image.src = "oo.png"; 
                this.fantasmi3[i].height=30;
                fantasmi3[i].x -= 13;
            }
        } else {
            fantasmi3[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi3[i].image.src = "fv.png";
        } 
        if (numf == 2) {
            fantasmi3[i].image.src = "fv2.png";
        }
        if (numf == 3) {
            fantasmi3[i].image.src = "fv3.png";
        }
        if (numf == 4) {
            fantasmi3[i].image.src = "fv4.png";
        }
        this.fantasmi3[i].height=50;
    }
    fantasmi3[i].x -= 3;
    fantasmi3[i].update();
    if (fantasmi3[i].x < -100) {
        fantasmi3.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi4.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi4[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi4[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi4[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi4[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi4[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi4[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi4[i].state = 'scared'; 
                fantasmi4[i].image.src = "oo.png"; 
                this.fantasmi4[i].height=30;
                fantasmi4[i].x -= 13;
            }
        } else {
            fantasmi4[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi4[i].image.src = "frr.png";
        } 
        if (numf == 2) {
            fantasmi4[i].image.src = "frr2.png";
        }
        if (numf == 3) {
            fantasmi4[i].image.src = "frr3.png";
        }
        if (numf == 4) {
            fantasmi4[i].image.src = "frr4.png";
        }
        this.fantasmi4[i].height=50;
    }
    fantasmi4[i].x += 1.5;
    fantasmi4[i].update();
    if (fantasmi4[i].x > 2100) {
        fantasmi4.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi5.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (typeof fantasmi5[i].directionX === 'undefined') {
        fantasmi5[i].directionX = 1; 
    }
    if (myGameArea.frameNog > 9) {
        if (fantasmi5[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi5[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi5[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi5[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi5[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi5[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi5[i].state = 'scared'; 
                fantasmi5[i].image.src = "oo.png"; 
                this.fantasmi5[i].height=30;
                fantasmi5[i].x -= 13;
            }
        } else {
            fantasmi5[i].x -= 13;
        }
    } else {
        if (fantasmi5[i].directionX === 1) {
            let currentState = fantasmi5[i].state || 0;
            currentState = (currentState + 1) % 4; 
            fantasmi5[i].image.src = "fa" + (currentState + 1) + ".png";
            fantasmi5[i].state = currentState;
        } else {
            let currentState = fantasmi5[i].state || 4;
            currentState = (currentState + 1) % 4 + 5; 
            fantasmi5[i].image.src = "fa" + (currentState) + ".png";
            fantasmi5[i].state = currentState;
        }
        
        this.fantasmi5[i].height=50;
    }

    if (fantasmi5[i].x <= 0 || fantasmi5[i].x + fantasmi5[i].width >= myGameArea.canvas.width) {
        fantasmi5[i].directionX *= -1;
    }
    fantasmi5[i].x += 2 * fantasmi5[i].directionX;
    fantasmi5[i].update();
    if (fantasmi5[i].x < -100) {
        fantasmi5.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi6.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi6[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi6[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi6[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi6[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi6[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi6[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi6[i].state = 'scared'; 
                fantasmi6[i].image.src = "oo.png"; 
                this.fantasmi6[i].height=30;
                fantasmi6[i].x -= 13;
            }
        } else {
            fantasmi6[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi6[i].image.src = "fg.png";
        } 
        if (numf == 2) {
            fantasmi6[i].image.src = "fg2.png";
        }
        if (numf == 3) {
            fantasmi6[i].image.src = "fg3.png";
        }
        if (numf == 4) {
            fantasmi6[i].image.src = "fg4.png";
        }
        this.fantasmi6[i].height=50;
    }
    fantasmi6[i].x -= 8;
    fantasmi6[i].update();
    if (fantasmi6[i].x < -100) {
        fantasmi6.splice(i, 1);
        i--;
    }
} 

for (i = 0; i < fantasmi7.length; i += 1) {
    var speed = 3;
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        speed-=8;
        if (fantasmi7[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi7[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi7[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi7[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi7[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi7[i])) {
                myGameArea.frameNo2 += 400;
                punto += 400;
                num += 3;
                mySuono4.play();
                fantasmi7[i].state = 'scared'; 
                fantasmi7[i].image.src = "oo.png"; 
                this.fantasmi7[i].height=30;
                fantasmi7[i].x -= 15;
            }
        } else {
            fantasmi7[i].x -= 15;
        }
    } else {
        if (numf == 1) {
            fantasmi7[i].image.src = "fvi.png";
        } 
        if (numf == 2) {
            fantasmi7[i].image.src = "fvi2.png";
        }
        if (numf == 3) {
            fantasmi7[i].image.src = "fvi3.png";
        }
        if (numf == 4) {
            fantasmi7[i].image.src = "fvi4.png";
        }
        if(myGamePiece.x>fantasmi7[i].x){
            if (numf == 1) {
                fantasmi7[i].image.src = "fvi5.png";
            } 
            if (numf == 2) {
                fantasmi7[i].image.src = "fvi6.png";
            }
            if (numf == 3) {
                fantasmi7[i].image.src = "fvi7.png";
            }
            if (numf == 4) {
                fantasmi7[i].image.src = "fvi8.png";
            }
        }
        this.fantasmi7[i].height=50;
    }
    var deltaX = myGamePiece.x - fantasmi7[i].x;
    var deltaY = myGamePiece.y - fantasmi7[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    fantasmi7[i].x += speed * Math.cos(angle);
    fantasmi7[i].y += speed * Math.sin(angle);
    fantasmi7[i].update();
    if (fantasmi7[i].x < -100) {
        fantasmi7.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi8.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;

    if (typeof fantasmi8[i].directionX === 'undefined') {
        fantasmi8[i].directionX = 1;
        fantasmi8[i].directionY = 1;
    }

    if (myGameArea.frameNog > 9) {
        if (fantasmi8[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi8[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi8[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi8[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi8[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi8[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi8[i].state = 'scared'; 
                fantasmi8[i].image.src = "oo.png"; 
                fantasmi8[i].height = 30;
                fantasmi8[i].x -= 13;
                fantasmi8[i].directionY *= -1;
            }
            
            if (fantasmi8[i].y <= 0 || fantasmi8[i].y + fantasmi8[i].height >= myGameArea.canvas.height) {
                fantasmi8[i].directionY *= -1; 
            }
        } else {
            fantasmi8[i].x -= 13;
        }
    } else {
        if (fantasmi8[i].directionX === 1) {
            let currentState = fantasmi8[i].state || 4;
            currentState = (currentState + 1) % 4 + 5;
            fantasmi8[i].image.src = "fb" + (currentState) + ".png";
            fantasmi8[i].state = currentState;
        } else {
            let currentState = fantasmi8[i].state || 4;
            currentState = (currentState + 1) % 4 + 1; 
            fantasmi8[i].image.src = "fb" + (currentState) + ".png";
            fantasmi8[i].state = currentState;
        }
        fantasmi8[i].height = 50;
    }
    if (fantasmi8[i].x <= 0 || fantasmi8[i].x + fantasmi8[i].width >= myGameArea.canvas.width) {
        fantasmi8[i].directionX *= -1;
    }
    if (fantasmi8[i].y <= 0 || fantasmi8[i].y + fantasmi8[i].height >= myGameArea.canvas.height) {
        fantasmi8[i].directionY *= -1; 
    }
    fantasmi8[i].x += 2 * fantasmi8[i].directionX;
    fantasmi8[i].y += 2 * fantasmi8[i].directionY;
    fantasmi8[i].update();
    if (fantasmi8[i].x < -100) {
        fantasmi8.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi9.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi9[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi9[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi9[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi9[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi9[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi9[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi9[i].state = 'scared'; 
                fantasmi9[i].image.src = "oo.png"; 
                this.fantasmi9[i].height=30;
                fantasmi9[i].x -= 13;
            }
        } else {
            fantasmi9[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi9[i].image.src = "faz.png";
        } 
        if (numf == 2) {
            fantasmi9[i].image.src = "faz2.png";
        }
        if (numf == 3) {
            fantasmi9[i].image.src = "faz3.png";
        }
        if (numf == 4) {
            fantasmi9[i].image.src = "faz4.png";
        }
        this.fantasmi9[i].height=50;
    }
    fantasmi9[i].y -= 1.5;
    fantasmi9[i].update();
    if (fantasmi9[i].y > 2100) {
        fantasmi9.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi10.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi10[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi10[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi10[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi10[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi10[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi10[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi10[i].state = 'scared'; 
                fantasmi10[i].image.src = "oo.png"; 
                this.fantasmi10[i].height=30;
                fantasmi10[i].x -= 13;
            }
        } else {
            fantasmi10[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi10[i].image.src = "faz5.png";
        } 
        if (numf == 2) {
            fantasmi10[i].image.src = "faz6.png";
        }
        if (numf == 3) {
            fantasmi10[i].image.src = "faz7.png";
        }
        if (numf == 4) {
            fantasmi10[i].image.src = "faz8.png";
        }
        this.fantasmi10[i].height=50;
    }
    fantasmi10[i].y += 1.5;
    fantasmi10[i].update();
    if (fantasmi10[i].y < -100) {
        fantasmi10.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi11.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi11[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi11[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi11[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi11[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi11[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi11[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi11[i].state = 'scared'; 
                fantasmi11[i].image.src = "oo.png"; 
                this.fantasmi11[i].height=30;
                fantasmi11[i].x -= 13;
            }
        } else {
            fantasmi11[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi11[i].image.src = "fazz.png";
        } 
        if (numf == 2) {
            fantasmi11[i].image.src = "fazz2.png";
        }
        if (numf == 3) {
            fantasmi11[i].image.src = "fazz3.png";
        }
        if (numf == 4) {
            fantasmi11[i].image.src = "fazz4.png";
        }
        this.fantasmi11[i].height=50;
    }
    fantasmi11[i].y +=- 4;
    fantasmi11[i].update();
    if (fantasmi11[i].y > 1000) {
        fantasmi11.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi12.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        if (fantasmi12[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi12[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi12[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi12[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi12[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi12[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi12[i].state = 'scared'; 
                fantasmi12[i].image.src = "oo.png"; 
                this.fantasmi12[i].height=30;
                fantasmi12[i].x -= 13;
            }
        } else {
            fantasmi12[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi12[i].image.src = "fazz5.png";
        } 
        if (numf == 2) {
            fantasmi12[i].image.src = "fazz6.png";
        }
        if (numf == 3) {
            fantasmi12[i].image.src = "fazz7.png";
        }
        if (numf == 4) {
            fantasmi12[i].image.src = "fazz8.png";
        }
        this.fantasmi12[i].height=50;
    }
    fantasmi12[i].y += 3;
    fantasmi12[i].update();
    if (fantasmi12[i].y > 2220) {
        fantasmi12.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi13.length; i += 1) {
    var speed = 5;
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog > 9) {
        speed-=13;
        if (fantasmi13[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi13[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi13[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi13[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi13[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi13[i])) {
                myGameArea.frameNo2 += 400;
                punto += 400;
                num += 3;
                mySuono4.play();
                fantasmi13[i].state = 'scared'; 
                fantasmi13[i].image.src = "oo.png"; 
                this.fantasmi13[i].height=30;
                fantasmi13[i].x -= 15;
            }
        } else {
            fantasmi13[i].x -= 15;
        }
    } else {
        if (numf == 1) {
            fantasmi13[i].image.src = "fm.png";
        } 
        if (numf == 2) {
            fantasmi13[i].image.src = "fm2.png";
        }
        if (numf == 3) {
            fantasmi13[i].image.src = "fm3.png";
        }
        if (numf == 4) {
            fantasmi13[i].image.src = "fm4.png";
        }
        if(myGamePiece.x>fantasmi13[i].x){
            if (numf == 1) {
                fantasmi13[i].image.src = "fm5.png";
            } 
            if (numf == 2) {
                fantasmi13[i].image.src = "fm6.png";
            }
            if (numf == 3) {
                fantasmi13[i].image.src = "fm7.png";
            }
            if (numf == 4) {
                fantasmi13[i].image.src = "fm8.png";
            }
        }
        this.fantasmi13[i].height=50;
    }
    var deltaX = myGamePiece.x - fantasmi13[i].x;
    var deltaY = myGamePiece.y - fantasmi13[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    fantasmi13[i].x += speed * Math.cos(angle);
    fantasmi13[i].y += speed * Math.sin(angle);
    fantasmi13[i].update();
    if (fantasmi13[i].x < -100) {
        fantasmi13.splice(i, 1);
        i--;
    }
}


for (i = 0; i < fantasmi1g.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog2 > 9) {
        if (fantasmi1g[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi1g[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi1g[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi1g[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi1g[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi1g[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi1g[i].state = 'scared'; 
                fantasmi1g[i].image.src = "oo.png"; 
                this.fantasmi1g[i].height=60;
                fantasmi1g[i].x -= 13;
            }
        } else {
            fantasmi1g[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi1g[i].image.src = "fvvb.png";
        } 
        if (numf == 2) {
            fantasmi1g[i].image.src = "fvvb2.png";
        }
        if (numf == 3) {
            fantasmi1g[i].image.src = "fvvb3.png";
        }
        if (numf == 4) {
            fantasmi1g[i].image.src = "fvvb4.png";
        }
        this.fantasmi1g[i].height=150;
    }
    fantasmi1g[i].x -= 1.1;
    fantasmi1g[i].update();
    if (fantasmi1g[i].x < -100) {
        fantasmi1g.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi2g.length; i += 1) {
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog2 > 9) {
        if (fantasmi2g[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi2g[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi2g[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi2g[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi2g[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi2g[i])) {
                myGameArea.frameNo2 += 200;
                punto += 200;
                num += 3;
                mySuono4.play();
                fantasmi2g[i].state = 'scared'; 
                fantasmi2g[i].image.src = "oo.png"; 
                this.fantasmi2g[i].height=60;
                fantasmi2g[i].x -= 13;
            }
        } else {
            fantasmi2g[i].x -= 13;
        }
    } else {
        if (numf == 1) {
            fantasmi2g[i].image.src = "fgg.png";
        } 
        if (numf == 2) {
            fantasmi2g[i].image.src = "fgg2.png";
        }
        if (numf == 3) {
            fantasmi2g[i].image.src = "fgg3.png";
        }
        if (numf == 4) {
            fantasmi2g[i].image.src = "fgg4.png";
        }
        this.fantasmi2g[i].height=150;
    }
    fantasmi2g[i].x -= 5;
    fantasmi2g[i].y += 2;
    fantasmi2g[i].update();
    if (fantasmi2g[i].x < -100) {
        fantasmi2g.splice(i, 1);
        i--;
    }
}

for (i = 0; i < fantasmi3g.length; i += 1) {
    var speed = 1;
    numf = Math.floor(Math.random() * 4) + 1;
    if (myGameArea.frameNog2 > 9) {
        speed-=8;
        if (fantasmi3g[i].state !== 'scared') {
            if (numf == 1) {
                fantasmi3g[i].image.src = "scared1.png";
            } 
            if (numf == 2) {
                fantasmi3g[i].image.src = "scared2.png";
            } 
            if (numf == 3) {
                fantasmi3g[i].image.src = "scared3.png";
            } 
            if (numf == 4) {
                fantasmi3g[i].image.src = "scared3.png";
            }
            if (myGamePiece.crashWith(fantasmi3g[i])) {
                myGameArea.frameNo2 += 400;
                punto += 400;
                num += 3;
                mySuono4.play();
                fantasmi3g[i].state = 'scared'; 
                fantasmi3g[i].image.src = "oo.png"; 
                this.fantasmi3g[i].height=60;
                fantasmi3g[i].x -= 15;
            }
        } else {
            fantasmi3g[i].x -= 15;
        }
    } else {
        if (numf == 1) {
            fantasmi3g[i].image.src = "fggg1.png";
        } 
        if (numf == 2) {
            fantasmi3g[i].image.src = "fggg2.png";
        }
        if (numf == 3) {
            fantasmi3g[i].image.src = "fggg3.png";
        }
        if (numf == 4) {
            fantasmi3g[i].image.src = "fggg4.png";
        }
        if(myGamePiece.x>fantasmi3g[i].x){
            if (numf == 1) {
                fantasmi3g[i].image.src = "fggg5.png";
            } 
            if (numf == 2) {
                fantasmi3g[i].image.src = "fggg6.png";
            }
            if (numf == 3) {
                fantasmi3g[i].image.src = "fggg7.png";
            }
            if (numf == 4) {
                fantasmi3g[i].image.src = "fggg8.png";
            }
        }
        this.fantasmi3g[i].height=150;
    }
    var deltaX = myGamePiece.x - fantasmi3g[i].x;
    var deltaY = myGamePiece.y - fantasmi3g[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    fantasmi3g[i].x += speed * Math.cos(angle);
    fantasmi3g[i].y += speed * Math.sin(angle);
    fantasmi3g[i].update();
    if (fantasmi3g[i].x < -100) {
        fantasmi3g.splice(i, 1);
        i--;
    }
}

//i tempi del potenziamento mangia fantasmi
    if(myGameArea.frameNog>9){
      myGameArea.frameNot+=1;
    }

    if(myGameArea.frameNog2>9){
        myGameArea.frameNot2+=1;
        this.myGamePiece.width=200;
        this.myGamePiece.height=200;
        if (myGameArea.keys && myGameArea.keys[37]){
            myGamePiece.speedX = -33; 
        }
    
        if (myGameArea.keys && myGameArea.keys[39]) {
            myGamePiece.speedX = 33;
        }
    
        if (myGameArea.keys && myGameArea.keys[38]) {
            myGamePiece.speedY = -33; 
        }
        
        if (myGameArea.keys && myGameArea.keys[40]) {
            myGamePiece.speedY = 33; 
        }
    }

    if(myGameArea.frameNot>1000){
      myGameArea.frameNog=myGameArea.frameNog==0;
      myGameArea.frameNot=myGameArea.frameNot==0;
    }

    if(myGameArea.frameNot2>1000){
        myGameArea.frameNog2=myGameArea.frameNog2==0;
        myGameArea.frameNot2=myGameArea.frameNot2==0;
        this.myGamePiece.width=50;
        this.myGamePiece.height=50;

    }

    var elemento = document.getElementById('pp');
    var nuovoValore = punto;
    elemento.textContent = nuovoValore;
   
    myScore.text="PUNTEGGIO:" + myGameArea.frameNo2+"";
    myScore.update();
    myWrite.text="GAME OVER";
    myWrite2.text="TFB:" + myGameArea.frameNot+"=1000";
    myWrite2.update();
    myGamePiece.newPos();
    myGamePiece.update();

}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

