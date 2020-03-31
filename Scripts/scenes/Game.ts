module scenes
{
    export class Game extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        player:objects.Player;
        bulletManager:managers.BulletManager;
        backgroundImage:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.player = new objects.Player();
            this.bulletManager = new managers.BulletManager(this);
            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/level1.jpg");
            this.backgroundImage.scaleX = config.Game.SCREEN_H/1080;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/1080;

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
            this.player.Update();
            this.bulletManager.Update();

            if (this.player.CanShoot())
                this.bulletManager.Shoot(this.player);
        
        }
        
        public Main(): void {    
            this.addChild(this.backgroundImage);       
            this.addChild(this.player);
        }

        
    }
}