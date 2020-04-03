module scenes
{
    export class Loose extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel:objects.Label;
        endButton:objects.Button;
        mouseyJail:createjs.Bitmap;
        backgroundImage:createjs.Bitmap;
        scoreCounter:objects.Label;
        play:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label("You Failed!", "80px","Arial", "Black", 320, 50, true);
            this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 450, true);
            this.mouseyJail = new objects.Image("./Assets/images/sidekick/mouseyJail.png", config.Game.SCREEN_W / 2, config.Game.SCREEN_H / 2, true);
            this.play = new objects.Button("./Assets/images/gui/start.png", 320, 390, true);     

            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/failed.jpg");    
            this.backgroundImage.scaleX = config.Game.SCREEN_W/1024;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/600;
            this.scoreCounter = new objects.Label("Final Score: " + config.Game.SCORE, undefined, undefined, "white", 320, 100, true);

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
        
        }
        
        public Main(): void {
            this.addChild(this.backgroundImage)
            this.addChild(this.endLabel);
            this.addChild(this.mouseyJail)
            this.addChild(this.endButton);
            this.addChild(this.scoreCounter);
            this.addChild(this.play);

            this.PlaySound("characterDamage");
    
            this.endButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });

            this.play.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.GAME;
            });  
        }

        
    }
}