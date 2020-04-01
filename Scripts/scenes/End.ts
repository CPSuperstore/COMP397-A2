module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endButton:objects.Button;
        backgroundImage:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endButton = new objects.Button("./Assets/images/backButton.png", 320, 400, true);

            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/win.png");    
            this.backgroundImage.scaleX = config.Game.SCREEN_W/1500;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/1125;

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
            this.addChild(this.backgroundImage);
    
            this.addChild(this.endButton);
    
            this.endButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });
        }

        
    }
}