//savvy-pics
//vivienne- extra lives + start background

var game = game || {};

game = new Phaser.Game(800, 600, Phaser.AUTO, 'cont');

//Main Menu Code
game.MainMenu = function() {};
//buttonstuff
var button;

//for formatting text
var factstyle = { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

function menutolevelone () {
	game.state.start('LevelZero2LevelOne')
    }

///////////////////////////////////

game.MainMenu = {
    preload: function() {
		this.load.image('button', "assets/images/startbutton.gif")
		this.load.image('startbackground', "assets/images/startbackground.jpg")

   },
    create: function() {
        game.add.tileSprite(0, 0, 800, 600, 'startbackground');
        button = game.add.button(200, 400, 'button', menutolevelone, this, 2, 1, 0);
    },
    update: function() {
    	}
	};


/////////////////////////////////////////////

game.LevelZero2LevelOne = function() {};
var button6;
var factsone = ['1fact1','1fact2','1fact3','1fact4','1fact5','1fact6','1fact7']
var factsonepics = ['threatened', 'bycatch', 'carbon', 'searise', 'species', 'travel', 'leatherback', 'gender']
var randfact1 = Math.floor(Math.random() * factsone.length);

var sentScore = false;
function changefact0tolevelone () {
    game.state.start('LevelOne')
    }
game.LevelZero2LevelOne = {
	preload: function(){
        this.load.image('1fact1', "assets/images/1fact1.png")
    	this.load.image('1fact2', "assets/images/1fact2.png")
    	this.load.image('1fact3', "assets/images/1fact3.png")
    	this.load.image('1fact4', "assets/images/1fact4.png")
    	this.load.image('1fact5', "assets/images/1fact5.png")
    	this.load.image('1fact6', "assets/images/1fact6.png")
    	this.load.image('1fact7', "assets/images/1fact1.png")
    	this.load.image('button6', "assets/images/nextbutton.png")
    	this.load.image('threatened', "assets/images/threatened.png")
    	this.load.image('bycatch', "assets/images/bycatch.png")
    	this.load.image('carbon', "assets/images/carbon.png")
    	this.load.image('searise', "assets/images/searise.png")
    	this.load.image('species', "assets/images/species.jpg")
    	this.load.image('travel', "assets/images/travel.png")
    	this.load.image('leatherback', "assets/images/leatherback.png")
    	this.load.image('gender', "assets/images/gender.png")
	},

    create: function() {
        game.add.tileSprite(0,0,800,600, factsonepics[randfact1]);
        game.add.tileSprite(0, 490, 800, 110, factsone[randfact1]);
        button = game.add.button(310, 400,'button6', changefact0tolevelone, this, 3, 1, 0);

    },
    update: function() {
    	}
	};

/////////////////////////////////////////////
// *==============================================
//    INSERT GAME CODE HERE
//   ==============================================*/

var person = prompt("Please enter your player username", "Doctor Who");
if (person != null) {
	alert("Let's play, " + person + "!")
}
else {
    person = "Anonymous"
	alert("Let's play, Anonymous!")
}

game.LevelOne = function() {};

var ocean;

var backgroundv;

var jellyspeedlist = [];
var jellylist = [];
var baglist = [];
var score = 0;
var livesList = [];
var lives = 5;
var highscore = 0;
var bagspeedlist = []
var globalHighScore = 0;
var moreLivesList = []
var moreLifeSpeedlist = []

var avatar;

game.LevelOne = {
	preload: function(){
		game.load.image('ocean', "assets/images/background.png");
		game.load.image('bag', "assets/images/bag.png")
		game.load.image('heart', "assets/images/heart.png")

		game.load.spritesheet('jellyfish', 'assets/images/jellysprite.png', 41.75, 60, 4);
		game.load.spritesheet('player', 'assets/images/turtlesprite.png', 84, 63, 6);
	},
	create: function(){
		console.log("REACHED MAIN GAME CREATE");
		ocean = game.add.tileSprite(0,0,800,600,'ocean');
		backgroundv  =  2;
		this.physics.startSystem(Phaser.Physics.ARCADE);
		//jelly code
		for (i=0; i<15; i++){
			this.jellydude = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'jellyfish');
			this.jellydude.worldvisible =  true;
			this.jellydude.angle = Math.floor((Math.random() * 30) + 315);
			this.jellydude.visible =  true;
			jellylist.push(this.jellydude);
			this.jellyspeed = Math.floor(Math.random()*5) + 2;
			jellyspeedlist.push(this.jellyspeed);
			this.physics.enable(this.jellydude, Phaser.Physics.ARCADE);
		}
		//bag code
		for (i=0; i<10; i++){
			this.plasticbag = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'bag');
			baglist.push(this.plasticbag);
			this.bagspeed = Math.floor(Math.random()*5) + 2;
			bagspeedlist.push(this.bagspeed);
			this.physics.enable(this.plasticbag, Phaser.Physics.ARCADE);
			console.log("ADDED ONE")
		}
		for (i=0; i<5; i++){
			this.life = this.game.add.sprite(80+30*i,64, 'heart');
			livesList.push(this.life);
		}
		for (i=0; i<1; i++){
            this.morelife = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'heart');
            this.physics.enable(this.morelife, Phaser.Physics.ARCADE);
            this.morelifespeed = Math.floor(Math.random()*5) + 2;
            moreLifeSpeedlist.push(this.morelifespeed);
            moreLivesList.push(this.morelife);
        }
		avatar = game.add.sprite(150, 300, 'player');
		avatar.scale.x *= -1; 
		var walk = avatar.animations.add('walk');
		this.physics.enable(avatar, Phaser.Physics.ARCADE);
		avatar.animations.play('walk', 5, true);
		
		scoreText = this.add.text(16, 16, 'Score: 0', { fontSize
		: '22px', fill: '#000' });
		hiscoreText = this.add.text(16, 40, 'High Score: ' + highscore, { fontSize
		: '22px', fill: '#000' });
		liveText = this.add.text(16, 64, 'Lives: ', {fontSize: '22px', fill: '#000'});
		
	},
	update: function(){
		if (lives == 0){
			game.state.start('END');
		}
		globalHighScore = score;


		if (score > highscore) {                
			localStorage.setItem("highscore", score);   
			hiscoreText.text = 'High Score: ' + localStorage.getItem("highscore");   
		}

		ocean.tilePosition.x -= backgroundv;
		//jelly code
        for (i=0; i<15; i++){
        	jellylist[i].worldvisible = true;
			jellylist[i].visible = true;
			if (this.physics.arcade.collide(jellylist[i], avatar)){
				jellylist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
				jellylist[i].y = Math.floor(Math.random()*580);
				jellyspeedlist[i] = Math.floor(Math.random()*5) + 2;
				score +=1;
				scoreText.text = 'Score: ' + score;
				if (score == 15){
					game.state.start('LevelOne2LevelTwo')
				}
			}

			if (jellylist[i].x < -100){
				jellylist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
				jellylist[i].y = Math.floor(Math.random()*580);
				jellyspeedlist[i] = Math.floor(Math.random()*5) + 2;
			}
			else{
				jellylist[i].x = jellylist[i].x - jellyspeedlist[i];
			}
		}
		//bag code
		for (i=0; i<10; i++){
			if (this.physics.arcade.collide(baglist[i], avatar)){
				baglist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
				baglist[i].y = Math.floor(Math.random()*580);
				bagspeedlist[i] = Math.floor(Math.random()*5) + 2;
				lives -= 1;
				livesList[lives].destroy();
			}

			if (baglist[i].x < -100){
				baglist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
				baglist[i].y = Math.floor(Math.random()*580);
				bagspeedlist[i] = Math.floor(Math.random()*5) + 2;
			}
			else{
				baglist[i].x = baglist[i].x - bagspeedlist[i];
			}
		}
		for (var j = 0; j < moreLivesList.length; j++) {
            moreLivesList[j].x = moreLivesList[j].x - moreLifeSpeedlist[j];

            if (moreLivesList[j].x < -100){
                moreLivesList[j].x = 700 + Math.floor((Math.random() * 500) + 200);
                moreLivesList[j].y = Math.floor(Math.random()*580);
                moreLifeSpeedlist[j] = Math.floor(Math.random()*5) + 2;
            }

            game.physics.arcade.overlap(avatar, moreLivesList[j], function() {
                (moreLivesList[j]).destroy();
                moreLivesList.splice(j, 1);
                newlife = this.game.add.sprite(80+30*lives,64, 'heart');
                livesList.splice(lives, 0, newlife)
                lives += 1;
                moreLifeSpeedlist.splice(j, 1);
                j--;
            } , null, this);
        }
		if ((game.input.keyboard.isDown(Phaser.Keyboard.ENTER) || game.input.keyboard.isDown(Phaser.Keyboard.W)) && avatar.y >= -5){
			avatar.y -= 4
		}
		else if ((game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) || game.input.keyboard.isDown(Phaser.Keyboard.S)) && avatar.y <= 560){
			avatar.y += 4
		}
	}
	};
//FACT AFTER LEVEL ONE TO LEVEL TWO
game.LevelOne2LevelTwo = function() {};

var button4;
var factstwo = ['2fact1', '2fact2', '2fact3', '2fact4', '2fact5', '2fact6', '2fact7']
var factstwopics = ['fast', 'duck', 'condor', 'eagle', 'kakapo', 'kiwi', 'warbler']
var randfact2 = Math.floor(Math.random() * factstwo.length);
var fact2 = factstwo[randfact2]
var pic2 = factstwopics[randfact2]


function changefact1toleveltwo () {
    game.state.start('LevelTwo')
    }

game.LevelOne2LevelTwo = {
    preload: function() {
        this.load.image('2fact1', "assets/images/2fact1.png")
        this.load.image('2fact2', "assets/images/2fact2.png")
        this.load.image('2fact3', "assets/images/2fact3.png")
        this.load.image('2fact4', "assets/images/2fact1.png")
        this.load.image('2fact5', "assets/images/2fact5.png")
        this.load.image('2fact6', "assets/images/2fact6.png")
        this.load.image('2fact7', "assets/images/2fact1.png")
        this.load.image('button4', "assets/images/nextbutton.png")
        this.load.image('fast', "assets/images/fast.png")
        this.load.image('duck', "assets/images/duck.png")
        this.load.image('condor', "assets/images/condor.png")
        this.load.image('eagle', "assets/images/eagle.png")
        this.load.image('kakapo', "assets/images/kakapo.png")
        this.load.image('kiwi', "assets/images/kiwi.png")
        this.load.image('warbler', "assets/images/warbler.png")
    },
    
    create: function() {
        game.add.tileSprite(0,0,800,600, pic2);
        game.add.tileSprite(0, 490, 800, 110, fact2);
        button4 = game.add.button(310, 400, 'button4', changefact1toleveltwo, this, 3, 1, 0);
    },
    update: function() {
    	}
	};
//LEVEL TWO
game.LevelTwo = function() {};

var oceanx;

var backgroundvx;

var jellyspeedlistx = [];
var jellylistx = [];
var baglistx = [];
var highscorex = localStorage.getItem('highscore')
var scorex = 15;
var livesListx = [];
var livesx = 5;
var bagspeedlistx = []
var moreLivesListx = []
var moreLifeSpeedlistx = []

var avatar;

game.LevelTwo = {
    preload: function(){
        game.load.image('ocean', "assets/images/sky.jpg");
        game.load.image('bag', "assets/images/smoke.png")
        game.load.image('heart', "assets/images/heart.png")
        game.load.image('jellyfish', 'assets/images/berry.png');

        game.load.spritesheet('player', 'assets/images/falconsprite.png', 56, 81, 8);
    },
    create: function(){
        console.log("REACHED MAIN GAME CREATE");
        oceanx = game.add.tileSprite(0,0,800,600,'ocean');
        backgroundvx  =  2;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //jelly code
        for (i=0; i<15; i++){
            this.jellydude = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'jellyfish');
            this.jellydude.worldvisible =  true;
            this.jellydude.scale.x *= -1;
            this.jellydude.visible =  true;
            jellylistx.push(this.jellydude);
            this.jellyspeed = Math.floor(Math.random()*7) + 5;
            jellyspeedlistx.push(this.jellyspeed);
            this.physics.enable(this.jellydude, Phaser.Physics.ARCADE);

        }
        //bag code
        for (i=0; i<5; i++){
            this.plasticbag = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'bag');
            baglistx.push(this.plasticbag);
            this.bagspeed = Math.floor(Math.random()*5);
            bagspeedlistx.push(this.bagspeed);
            this.physics.enable(this.plasticbag, Phaser.Physics.ARCADE);
            console.log("ADDED ONE")
        }
        for (i=0; i<5; i++){
            this.life = this.game.add.sprite(80+30*i,64, 'heart');
            livesListx.push(this.life);
        }
        for (i=0; i<2; i++){
            this.morelife = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'heart');
            this.physics.enable(this.morelife, Phaser.Physics.ARCADE);
            this.morelifespeed = Math.floor(Math.random()*5) + 2;
            moreLifeSpeedlistx.push(this.morelifespeed);
            moreLivesListx.push(this.morelife);
        }
        avatar = game.add.sprite(150, 300, 'player');
        avatar.scale.x *= -1; 
        var walk = avatar.animations.add('walk');
        this.physics.enable(avatar, Phaser.Physics.ARCADE);
        avatar.animations.play('walk', 10, true);
        
        scoreText = this.add.text(16, 16, 'Score: ' + scorex, { fontSize
        : '22px', fill: '#000' });
        hiscoreText = this.add.text(16, 40, 'High Score: ' + localStorage.getItem("highscore"), { fontSize
		: '22px', fill: '#000' });
		liveText = this.add.text(16, 64, 'Lives: ', {fontSize: '22px', fill: '#000'});
    },
    update: function(){
        if (livesx == 0){
            game.state.start('END');
        }
        globalHighScore = scorex;

        if (scorex > localStorage.getItem("highscore")) {                
			localStorage.setItem("highscore", scorex);   
			hiscoreText.text = 'High Score: ' + localStorage.getItem("highscore");   
		}

        oceanx.tilePosition.x -= backgroundvx;
        //jelly code
        for (i=0; i<15; i++){
            jellylistx[i].worldvisible = true;
            jellylistx[i].visible = true;
            if (this.physics.arcade.collide(jellylistx[i], avatar)){
                jellylistx[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylistx[i].y =Math.floor(Math.random()*580);
                jellyspeedlistx[i] = Math.floor(Math.random()*7) + 5;
                scorex +=1;
                scoreText.text = 'Score: ' + scorex;
                if (scorex == 100){
            		game.state.start('LevelTwo2LevelThree')
        		}
            }

            if (jellylistx[i].x < -50){
                jellylistx[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylistx[i].y =Math.floor(Math.random()*580);
                jellyspeedlistx[i] = Math.floor(Math.random()*7) + 5;
            }
            else{
                jellylistx[i].x = jellylistx[i].x - jellyspeedlistx[i];
            }
        }
        //bag code
        for (i=0; i<5; i++){
            if (this.physics.arcade.collide(baglistx[i], avatar)){
                baglistx[i].x = 1500 + Math.floor(Math.random() * 500);
                baglistx[i].y = Math.floor(Math.random()*580);
                bagspeedlistx[i] = Math.floor(Math.random()*5) + 1;
                livesx -= 1;
                livesListx[livesx].destroy();
            }

            if (baglistx[i].x < -240){
                baglistx[i].x = 1500 + Math.floor(Math.random() * 500);
                baglistx[i].y = Math.floor(Math.random()*580);
                bagspeedlistx[i] = Math.floor(Math.random()*5) + 1;
            }
            else{
                baglistx[i].x = baglistx[i].x - bagspeedlistx[i];
            }
        }
        for (var j = 0; j < moreLivesListx.length; j++) {
            (moreLivesListx[j]).x = (moreLivesListx[j]).x - moreLifeSpeedlistx[j];

            if (moreLivesListx[j].x < -100){
                moreLivesListx[j].x = 700 + Math.floor((Math.random() * 500) + 200);
                moreLivesListx[j].y = Math.floor(Math.random()*580);
                moreLifeSpeedlistx[j] = Math.floor(Math.random()*5) + 2;
            }

            game.physics.arcade.overlap(avatar, moreLivesListx[j], function() {
                (moreLivesListx[j]).destroy();
                moreLivesListx.splice(j, 1);
                newlife = this.game.add.sprite(80+30*livesx,64, 'heart');
                livesListx.splice(livesx, 0, newlife)
                livesx += 1;
                moreLifeSpeedlistx.splice(j, 1);
                j--;
            } , null, this);
        }
        if ((game.input.keyboard.isDown(Phaser.Keyboard.ENTER) || game.input.keyboard.isDown(Phaser.Keyboard.W)) && avatar.y >= -5){
            avatar.y -= 6
        }
        else if ((game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) || game.input.keyboard.isDown(Phaser.Keyboard.S)) && avatar.y <= 560){
            avatar.y += 6
        }
    }
    };
//FACT AFTER LEVEL TWO TO LEVEL THREE
game.LevelTwo2LevelThree = function() {};

var button5;
var factsthree = ['3fact1', '3fact2', '3fact3', '3fact4', '3fact5', '3fact6', '3fact7']
var factsthreepics = ['wrist', 'bamboo', 'red', 'sumatra', 'gorilla', 'elephant', 'trunk', 'ambush']
var rand3 = [Math.floor(Math.random() * factsthree.length)]
var factthree = factsthree[rand3];
var factpic3 = factsthreepics[rand3];


function changefact2tolevelthree () {
    game.state.start('LevelThree')
    }

game.LevelTwo2LevelThree = {
    preload: function() {
        this.load.image('3fact1', "assets/images/3fact1.png")
        this.load.image('3fact2', "assets/images/3fact2.png")
        this.load.image('3fact3', "assets/images/3fact3.png")
        this.load.image('3fact4', "assets/images/3fact4.png")
        this.load.image('3fact5', "assets/images/3fact5.png")
        this.load.image('3fact6', "assets/images/3fact6.png")
        this.load.image('3fact7', "assets/images/3fact1.png")
        this.load.image('button5', "assets/images/nextbutton.png")
        this.load.image('wrist', "assets/images/wrist.png")
        this.load.image('bamboo', "assets/images/bamboo.png")
        this.load.image('red', "assets/images/red.png")
        this.load.image('sumatra', "assets/images/sumatra.png")
        this.load.image('gorilla', "assets/images/gorilla.png")
        this.load.image('elephant', "assets/images/elephant.png")
        this.load.image('trunk', "assets/images/trunk.png")
        this.load.image('ambush', "assets/images/ambush.png")
    },
    
    create: function() {
        game.add.tileSprite(0,0,800,600, factpic3);
        game.add.tileSprite(0, 490, 800, 110, factthree);
        button5 = game.add.button(310, 400, 'button5', changefact2tolevelthree, this, 3, 1, 0);
    },
    update: function() {
    	}
	};
//LEVEL THREE
game.LevelThree = function() {};

var oceany;

var backgroundvy;

var jellyspeedlisty = [];
var jellylisty = [];
var baglisty = [];
var highscorey = localStorage.getItem('highscore');
var scorey = 100;
var livesListy = [];
var livesy = 5;
var bagspeedlisty = [];
var moreLivesListy = []
var moreLifeSpeedlisty = []


var avatar;

game.LevelThree = {
    preload: function(){
        game.load.image('ocean', "assets/images/forest.png");
        game.load.image('bag', "assets/images/tractor.png")
        game.load.image('heart', "assets/images/heart.png")
        game.load.image('jellyfish', 'assets/images/apple.png');
        game.load.spritesheet('player', 'assets/images/pandasprite.gif', 78.75, 60, 4);
    },
    create: function(){
        oceany = game.add.tileSprite(0,0,800,600,'ocean');
        backgroundvy  =  2;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //jelly code
        for (i=0; i<15; i++){
            this.jellydude = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'jellyfish');
            this.jellydude.worldvisible =  true;
            this.physics.enable(this.jellydude, Phaser.Physics.ARCADE);
            this.jellydude.visible =  true;
            jellylisty.push(this.jellydude);
            this.jellyspeed = Math.floor(Math.random()*7) + 5;
            jellyspeedlisty.push(this.jellyspeed);
            

        }
        //bag code
        for (i=0; i<5; i++){
            this.plasticbag = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'bag');
            baglisty.push(this.plasticbag);
            this.bagspeed = Math.floor(Math.random()*7) + 5;
            bagspeedlisty.push(this.bagspeed);
            this.physics.enable(this.plasticbag, Phaser.Physics.ARCADE);
            console.log("ADDED ONE")
        }
        for (i=0; i<5; i++){
            this.life = this.game.add.sprite(80+30*i,64, 'heart');
            livesListy.push(this.life);
        }
        for (i=0; i<3; i++){
            this.morelife = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'heart');
            this.physics.enable(this.morelife, Phaser.Physics.ARCADE);
            this.morelifespeed = Math.floor(Math.random()*5) + 2;
            this.morelife.body.allowGravity = false;
            moreLifeSpeedlisty.push(this.morelifespeed);
            moreLivesListy.push(this.morelife);
        }
        avatar = game.add.sprite(150, 300, 'player');
        avatar.scale.x *= -1; 
        var walk = avatar.animations.add('walk');
        this.physics.enable(avatar, Phaser.Physics.ARCADE);
        avatar.animations.play('walk', 5, true);
        
        scoreText = this.add.text(16, 16, 'Score: ' + scorey, { fontSize
        : '22px', fill: '#000' });
        hiscoreText = this.add.text(16, 40, 'High Score: ' + localStorage.getItem('highscore'), { fontSize
		: '22px', fill: '#000' });
		liveText = this.add.text(16, 64, 'Lives: ', {fontSize: '22px', fill: '#000'});
    },
    update: function(){
        if (livesy == 0){

            game.state.start('END');
        }
        globalHighScore = scorey;

        if (scorey > localStorage.getItem("highscore")) {                
			localStorage.setItem("highscore", scorey);   
			hiscoreText.text = 'High Score: ' + localStorage.getItem("highscore");   
		}

        oceany.tilePosition.x -= backgroundvy;
        //jelly code
        for (i=0; i<15; i++){
            jellylisty[i].worldvisible = true;
            jellylisty[i].visible = true;
            if (this.physics.arcade.collide(jellylisty[i], avatar)){
                jellylisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylisty[i].y =Math.floor(Math.random()*580);
                jellyspeedlisty[i] = Math.floor(Math.random()*7) + 5;
                scorey +=1;
                scoreText.text = 'Score: ' + scorey;
                if (scorey == 250){
            		game.state.start('END')
        		}

            }

            if (jellylisty[i].x < -100){
                jellylisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylisty[i].y =Math.floor(Math.random()*580);
                jellyspeedlisty[i] = Math.floor(Math.random()*7) + 5;
            }
            else{
                jellylisty[i].x = jellylisty[i].x - jellyspeedlisty[i];

            }
        }
        //bag code
        for (i=0; i<5; i++){
            if (this.physics.arcade.collide(baglisty[i], avatar)){
                baglisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglisty[i].y = Math.floor(Math.random()*580);
                bagspeedlisty[i] = Math.floor(Math.random()*7) + 5;
                livesy -= 1;
                livesListy[livesy].destroy();
            }

            if (baglisty[i].x < -220){
                baglisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglisty[i].y = Math.floor(Math.random()*580);
                bagspeedlisty[i] = Math.floor(Math.random()*7) + 5;
            }
            else{
                baglisty[i].x = baglisty[i].x - bagspeedlisty[i];

            }
        }
        for (var j = 0; j < moreLivesListy.length; j++) {
            moreLivesListy[j].x = moreLivesListy[j].x - moreLifeSpeedlisty[j];

            if (moreLivesListy[j].x < -100){
                moreLivesListy[j].x = 700 + Math.floor((Math.random() * 500) + 200);
                moreLivesListy[j].y = Math.floor(Math.random()*580);
                moreLifeSpeedlist[j] = Math.floor(Math.random()*5) + 2;
            }

            game.physics.arcade.overlap(avatar, moreLivesListy[j], function() {
                (moreLivesListy[j]).destroy();
                moreLivesListy.splice(j, 1);
                newlife = this.game.add.sprite(80+30*livesy,64, 'heart');
                livesListy.splice(livesy, 0, newlife)
                livesy += 1;
                moreLifeSpeedlisty.splice(j, 1);
                j--;
            } , null, this);
        }
        if ((game.input.keyboard.isDown(Phaser.Keyboard.ENTER) || game.input.keyboard.isDown(Phaser.Keyboard.Q)) && avatar.y >= -5){
                avatar.y -= 4;
        }
        else if ((game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) && avatar.y <= 560){
            avatar.y += 4
        }
    }
    };
//GAME END STAGE CODE
game.END = function() {};

var button3;

function gametogame () {
	sentScore =  false;

	game.state.start('LevelZero2LevelOne')
    }

game.END = {
    preload: function() {
		this.load.image('button3', "assets/images/nextbutton.png")
		this.load.image('banner', "assets/images/banner.png")
		this.load.image('end', "assets/images/end.jpg")
	},
	
    create: function() {
        this.game.add.tileSprite(0, 0, 800,600,'end')
        this.playagain = this.game.add.sprite(game.world.centerX, 200, 'banner');
        this.playagain.anchor.setTo(0.5)
        button3 = game.add.button(310, 400, 'button3', gametogame, this, 3, 1, 0);

    },
    update: function() {
    		if (!sentScore) {
				sentScore = true;
			
	    		$.ajax({
				  type: "POST",
				  url: "https://localhost:8000/set/",
				  data: {username: person, scores: globalHighScore},
				  success: function(resp) {
				  	console.log(resp)
				  
				  }
				});
			}
			
    		lives = 5
    		jellylist = []
    		baglist = []
    		livesList = []
    		moreLivesList = []
    		score = 0
    		moreLivesListx = []
    		livesx=5
    		livesListx=[]
    		jellylistx = []
    		baglistx = []
    		scorex = 15
    		livesy=5
    		moreLivesListy = []
    		livesListy =[]
    		jellylisty = []
    		baglisty = []
    		scorey = 100
    		highscore = localStorage.getItem('highscore')
    		randfact1 = Math.floor(Math.random() * factsone.length);
    		rand3 = Math.floor(Math.random() * factsthree.length);
    		randfact2 = Math.floor(Math.random() * factstwo.length);
    		
    	}
	};

game.state.add('MainMenu', game.MainMenu);
game.state.add('LevelZero2LevelOne', game.LevelZero2LevelOne)
game.state.add('LevelOne', game.LevelOne);
game.state.add('LevelOne2LevelTwo', game.LevelOne2LevelTwo)
game.state.add('LevelTwo', game.LevelTwo)
game.state.add('LevelTwo2LevelThree', game.LevelTwo2LevelThree)
game.state.add('LevelThree', game.LevelThree)
game.state.add('END', game.END);
game.state.start('MainMenu');