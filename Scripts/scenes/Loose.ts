module scenes
{
    export class Loose extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel:objects.Label;
        endButton:objects.Button;
        mouseyJail:createjs.Bitmap;
        backgroundImage:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label("You Failed!", "80px","Arial", "Black", 320, 50, true);
            this.endButton = new objects.Button("./Assets/images/backButton.png", 320, 450, true);
            this.mouseyJail = new objects.Image("./Assets/images/sidekick/mouseyJail.png", config.Game.SCREEN_W / 2, config.Game.SCREEN_H / 2, true);

            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/failed.jpg");    
            this.backgroundImage.scaleX = config.Game.SCREEN_W/1024;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/600;


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
    
            this.endButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });
        }

        
    }
}