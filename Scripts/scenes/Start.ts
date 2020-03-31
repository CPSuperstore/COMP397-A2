module scenes
{
    export class Start extends objects.Scene
    {
        play:objects.Button;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.play = new objects.Button();
            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.play = new objects.Button("./Assets/images/startButton.png", 320, 240, true);           
            this.Main();
        }        
        
        public Update(): void {
            
        }
        
        public Main(): void {
            this.addChild(this.play);
    
            this.play.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.GAME;
            });  
        }        
    }
}