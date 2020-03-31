module scenes
{
    export class Game extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        player:objects.Player;
        bulletManager:managers.BulletManager;
        enemyBulletManager:managers.BulletManager;
        backgroundImage:createjs.Bitmap;
        enemyManager:managers.EnemyManager;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.player = new objects.Player();
            this.bulletManager = new managers.BulletManager(this);
            this.enemyBulletManager = new managers.BulletManager(this);
            this.enemyManager = new managers.EnemyManager(this);
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
            this.enemyBulletManager.Update();
            this.enemyManager.Update();

            if (this.player.CanShoot())
                this.bulletManager.Shoot(this.player);

            this.enemyManager.GetShootableEnemies().forEach(enemy => {
                this.enemyBulletManager.Shoot(enemy);
            });
            this.enemyManager.GetEnemies().forEach(enemy => {
                if (this.bulletManager.IsCollided(enemy)){
                    this.enemyManager.RemoveEnemy(enemy)
                }
            });
            if (this.enemyBulletManager.IsCollided(this.player)){
                console.log("ouch")
            }
        }
        
        public Main(): void {    
            this.addChild(this.backgroundImage);       
            this.addChild(this.player);
        }

        
    }
}