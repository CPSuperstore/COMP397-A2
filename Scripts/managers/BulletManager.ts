module managers
{
    export class BulletManager{
        private _bullets:objects.Bullet[] = [];
        private _stage:objects.Scene;

        constructor(stage:objects.Scene){
            this._stage = stage;
        }

        public Shoot(firedBy:objects.GameObject) {
            let b:objects.Bullet = new objects.Bullet(firedBy);
            this._stage.addChild(b);
            this._bullets.push(b);
        }

        public RemoveBullet(b:objects.Bullet){
            this._stage.removeChild(b);
            this._bullets.splice(this._bullets.indexOf(b), 1);
        }

        public Update(){
            this._bullets.forEach(bullet => {
                bullet.Update();
                if(bullet.x > config.Game.SCREEN_W){
                    this.RemoveBullet(bullet);
                }
            });
        }
    }
}