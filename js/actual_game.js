//kim

// var swag = new Phaser.Game(800, 600, Phaser.AUTO, 'cont');

var swag = game || {}

swag.AGame = function() {};

var ocean;

var backgroundv;

var jellylist = []
//vivienne

var avatar;

swag.AGame = {
	preload: function(){
		game.load.image('jellyfish', "assets/images/jellyfish.png")
		game.load.image('player', "assets/images/player.gif")
		game.load.image('ocean', "assets/images/background.png");
	},
	create: function(){
		ocean = game.add.tileSprite(0,0,800,600,'ocean');
		backgroundv  =  2;
		for (i=0; i<10; i++){
		this.jellydude = this.game.add.sprite(Math.floor((Math.random() * 500) + 200), Math.floor((Math.random() * 100) + (i*75)), 'jellyfish');
			jellylist.push(this.jellydude);
		}
		avatar = this.game.add.sprite(75,200, 'player');
		avatar.anchor.set(0.5);
		avatar.scale.x *= -1; 
	},
	update: function(){
		ocean.tilePosition.x -= backgroundv;
        for (i=0; i<jellylist.length; i++){
			if (jellylist[i].x > 10){
			jellylist[i].x = jellylist[i].x - 5;
			}
			else{
				jellylist[i].x = 700 + Math.floor((Math.random() * 100) + 75);
				jellylist[i].y = Math.floor((Math.random() * 100) + (i*75));
			}
		}
		
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			avatar.y -= 3
		}
		else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			avatar.y += 3
		}
	},
};

