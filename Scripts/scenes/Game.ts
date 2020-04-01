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
        playerHealthIndicator:objects.HealthBar;
        spawned:boolean = false;
        backgroundManager:managers.BackgroundManager;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.backgroundManager = new managers.BackgroundManager(
                [
                    new createjs.Bitmap("./Assets/images/background/game1.png"), new createjs.Bitmap("./Assets/images/background/game2.png")
                ], this
            );
            this.player = new objects.Player();
            this.bulletManager = new managers.BulletManager(this);
            this.enemyBulletManager = new managers.BulletManager(this);
            this.enemyManager = new managers.EnemyManager(this);
            this.backgroundImage = new createjs.Bitmap("./Assets/images/background/level1.jpg");
            this.backgroundImage.scaleX = config.Game.SCREEN_H/1080;
            this.backgroundImage.scaleY = config.Game.SCREEN_H/1080;
            this.playerHealthIndicator = new objects.HealthBar(this.player);

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.Main();
        }        
        
        public Update(): void {
            this.backgroundManager.Update();
            this.player.Update();
            this.bulletManager.Update();
            this.enemyBulletManager.Update();
            this.enemyManager.Update();
            this.playerHealthIndicator.Update();

            if (this.player.CanShoot())
                this.bulletManager.Shoot(this.player);

            this.enemyManager.GetShootableEnemies().forEach(enemy => {
                this.enemyBulletManager.Shoot(enemy);
            });
            this.enemyManager.GetEnemies().forEach(enemy => {
                if (this.bulletManager.IsCollided(enemy)){
                    enemy.HP -= 1;
                    if(enemy.HP <= 0){
                        this.enemyManager.RemoveEnemy(enemy);
                        config.Game.SCORE++;
                        if (config.Game.SCORE % 5 == 0){
                            this.enemyManager.EnemyCap += 1;
                        }
                        if (config.Game.SCORE >= 20){
                            config.Game.SCENE_STATE = scenes.State.LOCK_PICK;
                        }
                    }
                }
            });
            if (this.enemyBulletManager.IsCollided(this.player)){
                this.player.HP -= 1;
            }
        }
        
        public Main(): void {    
            // this.addChild(this.backgroundImage);       
            this.addChild(this.player);
            this.addChild(this.playerHealthIndicator)
        }

        
    }
}