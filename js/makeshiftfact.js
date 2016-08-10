game.LevelOne2LevelTwo = function() {};

var button4;

function changefact1toleveltwo () {
	game.state.start('LevelTwo')
    }

game.LevelOne2LevelTwo = {
    preload: function() {
	},
	
    create: function() {
        game.stage.backgroundColor = '#000000';
        button4 = game.add.button(300, 400, 'button3', changefact1toleveltwo, this, 2, 1, 0);
    },
    update: function() {
    	}
	};

game.LevelTwo = function() {};

var ocean;

var backgroundv;

var jellyspeedlist = [];
var jellylist = [];
var baglist = [];
var score = 0;
var livesList = [];
var lives = 5;
var bagspeedlist = []

var avatar;

game.LevelTwo = {
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
            this.jellydude = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor((Math.random() * 100) + (i*100)), 'jellyfish');
            this.jellydude.worldvisible =  true;
            this.jellydude.visible =  true;
            jellylist.push(this.jellydude);
            this.jellyspeed = Math.floor(Math.random()*15);
            jellyspeedlist.push(this.jellyspeed);
            this.physics.enable(this.jellydude, Phaser.Physics.ARCADE);

        }
        //bag code
        for (i=0; i<10; i++){
            this.plasticbag = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor((Math.random() * 100) + (i*75)), 'bag');
            baglist.push(this.plasticbag);
            this.bagspeed = Math.floor(Math.random()*15);
            bagspeedlist.push(this.bagspeed);
            this.physics.enable(this.plasticbag, Phaser.Physics.ARCADE);
            console.log("ADDED ONE")
        }
        for (i=0; i<5; i++){
            this.life = this.game.add.sprite(80+30*i,40, 'heart');
            livesList.push(this.life);
        }
        avatar = game.add.sprite(150, 300, 'player');
        avatar.scale.x *= -1; 
        var walk = avatar.animations.add('walk');
        this.physics.enable(avatar, Phaser.Physics.ARCADE);
        avatar.animations.play('walk', 5, true);
        
        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize
        : '22px', fill: '#000' });
        liveText = this.add.text(16, 40, 'Lives: ', {fontSize: '22px', fill: '#000'});
    },
    update: function(){
        if (lives == 0){
            game.state.start('END');
        }

        if (score == 35){
            game.state.start('LevelOne2LevelTwo')
        }
        ocean.tilePosition.x -= backgroundv;
        //jelly code
        for (i=0; i<15; i++){
            jellylist[i].worldvisible = true;
            jellylist[i].visible = true;
            if (this.physics.arcade.collide(jellylist[i], avatar)){
                jellylist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylist[i].y = Math.floor(Math.random()*600);
                jellyspeedlist[i] = Math.floor(Math.random()*15);
                score +=1;
                scoreText.text = 'Score: ' + score;
            }

            if (jellylist[i].x < -100){
                jellylist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylist[i].y = Math.floor(Math.random()*600);
                jellyspeedlist[i] = Math.floor(Math.random()*15);
            }
            else{
                jellylist[i].x = jellylist[i].x - jellyspeedlist[i];
            }
        }
        //bag code
        for (i=0; i<10; i++){
            if (this.physics.arcade.collide(baglist[i], avatar)){
                baglist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglist[i].y = Math.floor(Math.random()*600);
                bagspeedlist[i] = Math.floor(Math.random()*15);
                lives -= 1;
                livesList[lives].destroy();
            }

            if (baglist[i].x < -100){
                baglist[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglist[i].y = Math.floor(Math.random()*600);
                bagspeedlist[i] = Math.floor(Math.random()*15);
            }
            else{
                baglist[i].x = baglist[i].x - bagspeedlist[i];
            }
        }
        if ((game.input.keyboard.isDown(Phaser.Keyboard.ENTER) || game.input.keyboard.isDown(Phaser.Keyboard.Q)) && avatar.y >= 5){
            avatar.y -= 4
        }
        else if ((game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) && avatar.y <= 597){
            avatar.y += 4
        }
    }
    };