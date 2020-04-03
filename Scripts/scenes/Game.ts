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
        scoreCounter:objects.Label;
        powerUps:objects.Powerup[] = [];
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
            this.scoreCounter = new objects.Label(undefined, undefined, undefined, "white", 5, 5);

            config.Game.SCORE = 0;

            this.Start();
        }

        public SpawnPowerup(){
            let pu = new objects.Powerup()
            this.addChild(pu);
            this.powerUps.push(pu)
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

            this.powerUps.forEach(pu => {
                pu.Update();
                if (managers.Collision.AABBCheck(pu, this.player)){
                    this.player.HP += 10;

                    this.PlaySound("characterPowerup", 1)

                    if (this.player.HP > this.player.MaxHP)
                        this.player.HP = this.player.MaxHP
                    
                    this.removeChild(pu);
                    this.powerUps.splice(this.powerUps.indexOf(pu), 1);
                }
            });

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
                        this.PlaySound("enemyDie");
                        config.Game.SCORE++;
                        if (config.Game.SCORE % 8 == 0){
                            this.enemyManager.EnemyCap += 1;
                            this.SpawnPowerup();
                        }
                        if (config.Game.SCORE >= 50){
                            config.Game.SCENE_STATE = scenes.State.LOCK_PICK;
                        }
                    }
                }
            });
            if (this.enemyBulletManager.IsCollided(this.player)){
                this.player.HP -= 1;
                this.PlaySound("characterDamage")
            }
            this.scoreCounter.text = "Score: " + config.Game.SCORE;
        }
        
        public Main(): void {    
            // this.addChild(this.backgroundImage);       
            this.addChild(this.player);
            this.addChild(this.playerHealthIndicator)
            this.addChild(this.scoreCounter)

            if (!config.Game.BACKGROUND_MUSIC){
                this.PlaySound("soundtrack", 0.5, -1)
                config.Game.BACKGROUND_MUSIC = true;
            }
        }
    }
}