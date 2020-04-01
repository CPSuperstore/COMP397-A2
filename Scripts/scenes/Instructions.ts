module scenes
{
    export class Instructions extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        titleLabel:objects.Label;
        body:objects.Label;
        endButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            let text = `
            Floofie's Adventure!
            
            Read the story in the panel on the right side of the screen
            which has conveniently labeled "Story"

            In the first level, use W and D to move up and down
            Shoot enemies to kill them
            Collect cat treats to regain some health

            In the seccond level, use the space bar to pick the lock
            Push each lock pin to break the lock and rescue mousey

            Starting My Girlfriend's Cat as Queen Floofie!  
            `;

            this.titleLabel = new objects.Label("Instructions", "80px","Arial", "Black", 320, 50, true);
            this.body = new objects.Label(text.replace("\t", ""), "20px","Arial", "Black", 320, 100, true);
            this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 425, true);

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
            this.addChild(this.body)
    
            this.endButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.START;
            });
        }        
    }
}