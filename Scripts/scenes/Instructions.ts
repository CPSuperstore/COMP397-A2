module scenes
{
    export class Instructions extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        titleLabel:objects.Label;
        endButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.titleLabel = new objects.Label("Instructions", "80px","Arial", "Black", 320, 50, true);
            this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 450, true);

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
            this.addChild(this.titleLabel);
            this.addChild(this.endButton);
    
            this.endButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });
        }        
    }
}