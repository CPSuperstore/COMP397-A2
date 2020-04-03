module scenes
{
    export class Start extends objects.Scene
    {
        play:objects.Button;
        instructions:objects.Button;
        exit:objects.Button;
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
            this.play = new objects.Button("./Assets/images/gui/start.png", 320, 180, true);     
            this.instructions = new objects.Button("./Assets/images/gui/instructions.png", 320, 240, true);                
            this.exit = new objects.Button("./Assets/images/gui/exit.png", 320, 300, true);                
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
            this.addChild(this.instructions);
            this.addChild(this.exit);

            setTimeout(() => {
                if (!config.Game.BACKGROUND_MUSIC){
                    this.PlaySound("soundtrack", 0.5, -1)
                    config.Game.BACKGROUND_MUSIC = true;
                }
            }, 1000);
    
            this.play.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.GAME;
            });  
    
            this.instructions.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.INSTRUCTIONS;
            });  

            this.exit.on("click", function() {
                (<Window>open(window.location.href, '_self')).close();
            });     
        }        
    }
}