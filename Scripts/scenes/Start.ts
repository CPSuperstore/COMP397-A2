module scenes
{
    export class Start extends objects.Scene
    {
        play:objects.Button;
        backgroundImage:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/menu.png");    
            this.backgroundImage.scaleX = config.Game.SCREEN_W/1500;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/1125;
            this.play = new objects.Button("./Assets/images/startButton.png", 320, 240, true);     
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
            this.addChild(this.play);
    
            this.play.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.LOOSE;
            });  
        }        
    }
}