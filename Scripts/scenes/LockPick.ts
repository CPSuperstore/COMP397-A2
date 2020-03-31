module scenes
{
    export class LockPick extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        instructionLabel:objects.Label;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.instructionLabel = new objects.Label();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.instructionLabel = new objects.Label("Break Mousey Out Of Jail Py Picking The Lock", "20px","Arial", "Black", 320, 50, true);
            this.Main();
        }        
        
        public Update(): void {
        
        }
        
        public Main(): void {
            this.addChild(this.instructionLabel);
        }

        
    }
}