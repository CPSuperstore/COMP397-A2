module scenes
{
    export class Game extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        gameLabel:objects.Label;
        nextButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.gameLabel = new objects.Label();
            this.nextButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.gameLabel = new objects.Label("The Game", "80px","Arial", "Black", 320, 200, true);
            this.nextButton = new objects.Button("./Assets/images/nextButton.png", 320, 400, true);
            this.Main();
        }        
        
        public Update(): void {
        
        }
        
        public Main(): void {           
            this.addChild(this.gameLabel);
    
            this.addChild(this.nextButton);
    
            this.nextButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.END;
            });
        }

        
    }
}