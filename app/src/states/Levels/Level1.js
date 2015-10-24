var Level1 = function(game) {
    this.hero = null;
    this.enemies = [];

    this.settings = {
        facing: "right",
        jumpTimer: 750
    };

    this.cursors = null;
    this.jumpButton = null;
};

Level1.prototype = {
    preload: function() {
        this.game.load.image("background", "assets/dark_background.png");
        this.game.load.spritesheet("llama", "assets/llamahero_spritesheet.png", 226, 214);
        this.game.load.spritesheet("enemy", "assets/enemy_spritesheet.png", 250, 250);
<<<<<<< HEAD

=======
>>>>>>> 06b749dfebbb970016f93760a6a3c6f72a7af897
    },
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        var bg = this.game.add.sprite(0,0,"background");
        bg.width = this.game.width;
        bg.height = this.game.height;

        this.hero = this.game.add.sprite(40, 100, "llama");
        this.hero.animations.add("fly");
        this.hero.animations.play("fly", 150, true);

        this.hero.scale.setTo(0.5, 0.5);
        this.hero.anchor.setTo(.5, 1);

        this.game.physics.arcade.gravity.y = 250;

        this.enemy = this.game.add.sprite(500, 400, "enemy");
        this.enemy.animations.add("idle");
        this.enemy.animations.play("idle", 5000, true);
        
        
        this.game.physics.enable( [ this.hero, this.enemy], Phaser.Physics.ARCADE);
        
        this.hero.body.bounce.y = 0.2;
        this.hero.body.collideWorldBounds = true;
<<<<<<< HEAD
        this.enemy.body.allowGravity = false;
        this.enemy.animations.getAnimation('idle').delay = 500
=======

        this.enemies.push(new Enemy(this.game));
>>>>>>> 06b749dfebbb970016f93760a6a3c6f72a7af897

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
};

Level1.prototype.update = function() {
    this.hero.body.velocity.x = 0;
    
    this.enemies.forEach(function(enemy) {
        enemy.updateDirection();
    });

    if (this.cursors.left.isDown) {
        this.hero.body.velocity.x = -150;

        if (this.settings.facing != 'left') {
            this.settings.facing = "left";
            this.hero.scale.x *= -1;
        }
    } else if (this.cursors.right.isDown) {
        this.hero.body.velocity.x = 150;

        if (this.settings.facing != 'right') {
            this.settings.facing = "right";
            this.hero.scale.x *= -1;
        }
    }

    if (this.jumpButton.isDown) {
        this.hero.body.velocity.y = -100;
<<<<<<< HEAD
        this.jumpTimer = this.game.time.now + 750;
=======
>>>>>>> 06b749dfebbb970016f93760a6a3c6f72a7af897
    }
};