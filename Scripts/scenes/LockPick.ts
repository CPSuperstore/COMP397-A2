module scenes
{
    export class LockPick extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        instructionLabel:objects.Label;
        mouseyJail:objects.Image;
        lockBackground:objects.Image;
        lockPins:objects.LockPin[];
        claw:objects.Image;
        clawMin=180;
        clawMax=450;
        clawVelocity=3;
        clawVVelocity = 3;
        clawMoving = true;
        backgroundImage:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.instructionLabel = new objects.Label("Break Mousey Out Of Jail By Picking The Lock", "20px","Arial", "White", config.Game.SCREEN_W / 2, 30, true);
            this.mouseyJail = new objects.Image("./Assets/images/sidekick/mouseyJail.png", config.Game.SCREEN_W / 2, 175, true);
            this.lockBackground = new objects.Image("./Assets/images/lock/background.png", config.Game.SCREEN_W / 2, 390, true);
            this.lockPins = [
                new objects.LockPin(192, 310),
                new objects.LockPin(264.5, 310),
                new objects.LockPin(337, 310),
                new objects.LockPin(409, 310)
            ]
            this.claw = new objects.Image("./Assets/images/player/claw.png", 300, 400, false);

            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/lockPick.jpg");    
            this.backgroundImage.scaleX = config.Game.SCREEN_W/1600;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/900;

            window.addEventListener('keyup', (e) => {
                switch(e.code) {
                    case "Space":
                        this.clawMoving = false;
                        break;
                }
            });

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
            if(this.clawMoving)
                this.claw.x += this.clawVelocity;
            else{
                this.claw.y -= this.clawVVelocity;
                if (this.clawVVelocity > 0 && this.claw.y < 375){
                    this.lockPins.forEach(pin => {
                        if(pin.x - pin.halfWidth < this.claw.x && this.claw.x < pin.x + pin.halfWidth){
                            pin.y -= this.clawVVelocity;
                        }
                    });
                }
                if(this.claw.y <= 340){
                    this.clawVVelocity *= -1;

                } else if (this.claw.y > 400){
                    this.clawVVelocity *= -1;
                    this.claw.y = 400;
                    this.clawMoving = true;
                    this.lockPins.forEach(pin => {
                        if(pin.x - pin.halfWidth < this.claw.x && this.claw.x < pin.x + pin.halfWidth){
                            this.lockPins.splice(this.lockPins.indexOf(pin), 1);
                            let multiplier = 1;
                            if (this.clawVelocity < 0){
                                multiplier = -1;
                            }
                            this.clawVelocity += 1 * multiplier;
                        }
                    });
                    if (this.lockPins.length == 0){
                        config.Game.SCENE_STATE = scenes.State.END;
                    }
                }
            }
            if (this.claw.x <= this.clawMin || this.claw.x >= this.clawMax){
                this.clawVelocity *= -1;
            }
        
        }
        
        public Main(): void {
            this.addChild(this.backgroundImage)
            this.addChild(this.mouseyJail);

            this.addChild(this.lockBackground)
            this.lockPins.forEach(pin => {
                this.addChild(pin);
            });
            //this.addChild(new objects.Rectangle(158, 240, 324, 70, "white"))
            this.addChild(this.instructionLabel);
            this.addChild(this.claw);
        }

        
    }
}