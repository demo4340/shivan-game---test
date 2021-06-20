class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');
        this.charInput = createInput('Your Character');

        

        this.kit1 = createButton("KIT1");
        this.kit2 = createButton("KIT2");
        this.kit3 = createButton("KIT3");

        this.text1 = createElement('h2');
        this.goalText = createElement('h2');

        this.kits = createElement('h2');

        this.playButton = createButton('Play');

        this.greeting = createElement('h1');

        this.playerButton = createButton('Player');
        this.hunter1Button = createButton('Hunter1');
        this.hunter2Button = createButton('Hunter2');
        this.hunter3Button = createButton('Hunter3');

        this.character = createElement('h2');
        

        this.start = createButton('Start');


    }

    hide(){

        this.kit1.hide();
        this.kit2.hide();
        this.kit3.hide();
        this.playButton.hide();
        this.greeting.hide();
        this.playerButton.hide();
        this.hunter1Button.hide();
        this.hunter2Button.hide();
        this.hunter3Button.hide();
        this.kits.hide();
        this.text1.hide();
        this.goalText.hide();
        this.nameInput.hide();

    }

    display(){
        
        strokeWeight(1);
        stroke("white");
       
        this.text1.html("Please enter your name : ");
        this.text1.style('color', "white");
        this.text1.position(150, 100);
        
        this.nameInput.position(420, 125);
        this.nameInput.style('background-color', "pink");
        
        //text("Goal : ", dWidth/2 - 200, dHeight/2 - 100);
        //this.goalText.html("Goal : ");
        //this.goalText.style('color', "white");
        //this.goalText.position(dWidth/2 - 200, dHeight/2 - 100);
        //text(" Abcefghijklmno", dWidth - 100, dHeight/2 - 100);

        this.playButton.position(displayWidth/2, displayHeight-200);

        
        this.kits.html("Kits : ");
        this.kits.style('color', "white");
        this.kits.position(150, 300);

        this.kit1.position(230, 325);
        this.kit1.style('background-color', "lightgreen");

        this.kit2.position(280, 325);
        this.kit2.style('background-color', "lightgreen");

        this.kit3.position(330, 325);
        this.kit3.style('background-color', "lightgreen");

        this.kit1.mousePressed(()=>{

            player.choosenKit = "Kit1";
            player.update(player.choosenKit);

        })

        this.kit2.mousePressed(()=>{

            player.choosenKit = "Kit2";
            player.update(player.choosenKit);
        })

        this.kit3.mousePressed(()=>{

            player.choosenKit = "Kit3";
            player.update(player.choosenKit);
        })

        this.playerButton.mousePressed(()=>{

            player.type = "Player";
            player.update(player.type);
            this.playerButton.style('baclkground-color', "red");

        })

        this.hunter1Button.mousePressed(()=>{

            player.type = "Hunter1";
            player.update(player.type);

        })

        this.hunter2Button.mousePressed(()=>{

            player.type = "Hunter2";
            player.update(player.type);

        })

        this.hunter3Button.mousePressed(()=>{

            player.type = "Hunter3";
            player.update(player.type);

        })

        this.character.html("Please choose your character : " );
        this.character.position(150, 200);
        this.character.style("color", "white");

            
        this.playerButton.position(480, 225);
        this.playerButton.style('background-color', "yellow");

        this.hunter1Button.position(580, 225);
        this.hunter1Button.style('background-color', "yellow");

        this.hunter2Button.position(680, 225);
        this.hunter2Button.style('background-color', "yellow");

        this.hunter3Button.position(780, 225);
        this.hunter3Button.style('background-color', "yellow");


        this.playButton.mousePressed(()=>{

            this.nameInput.hide();
            this.playButton.hide();
            this.kit1.hide();
            this.kit2.hide();
            this.kit3.hide();
            this.goalText.hide();
            this.text1.hide();
            this.kits.hide();
            this.playerButton.hide();
            this.hunter1Button.hide();
            this.hunter2Button.hide();
            this.hunter3Button.hide();
            this.character.hide();
            
            player.name = this.nameInput.value();
            playerCount+=1;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name + " to Dungeon Escape !");
            this.greeting.style("color", "white");
            this.greeting.position(displayWidth/2 - 250, 30);

        })

        

    }

}
