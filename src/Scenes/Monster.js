class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 70, this.bodyY + 90, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 70, this.bodyY + 90, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg.angle = -39;
        my.sprite.leftLeg.angle = 39;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenB.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX + 150, this.bodyY, "monsterParts", "arm_redA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 150, this.bodyY, "monsterParts", "arm_redA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm.angle = -45;
        my.sprite.leftArm.angle = 45;
        my.sprite.rightEye = this.add.sprite(this.bodyX + 40, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX - 40, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthI.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthF.png");
        my.sprite.rightEar = this.add.sprite(this.bodyX + 60, this.bodyY - 100, "monsterParts", "detail_green_ear.png");
        my.sprite.rightEar.angle = -20;
        my.sprite.rightEar.scale = 2;
        my.sprite.leftEar = this.add.sprite(this.bodyX - 60, this.bodyY - 100, "monsterParts", "detail_green_ear.png");
        my.sprite.leftEar.angle = 20;
        my.sprite.leftEar.scale = 2;
        my.sprite.leftEar.flipX = true;

        my.sprite.mouthFangs.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.aKey.isDown)
        {
            for(let part in my.sprite)
            {
                my.sprite[part].x -= 1;
            }
        }
        if(this.dKey.isDown)
        {
            for(let part in my.sprite)
            {
                my.sprite[part].x += 1;
            }
        }

        this.input.keyboard.on('keydown-F', (event) =>
        {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFangs.visible = true;
        });
        this.input.keyboard.on('keydown-S', (event) =>
        {
            my.sprite.mouthFangs.visible = false;
            my.sprite.mouthSmile.visible = true;
        });


    }
}