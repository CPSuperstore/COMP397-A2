module objects{
    export class Enemy extends objects.GameObject{
        private _inPlace = false;
        private _final_x:number=1;
        private _lateralVelocity=3;
        private _lastShot:number = Date.now() / 1000;
        private _shootDelay:number=0.17;

        protected _checkBounds(): void {
        }
        public Start(): void {
        }
        public Update(): void {
            if (!this._inPlace){
                this.x -= this._lateralVelocity;
                if(this.x <= this._final_x){
                    this._inPlace = true;
                }
            }
        }
        public Reset(): void {
        }
        constructor(y:number=-1){
            super("./Assets/images/enemy/minion.png", 0, y, false);
            if (this.y == -1){
                this.y = this.getRandomInt(config.Game.SCREEN_H);
            }
            this.x = config.Game.SCREEN_W;
            this._final_x = config.Game.SCREEN_W - this.getRandomInt(100) - 64;
            this._inPlace = false;
            this.rotation = 180;
        }
        public CanShoot():boolean{
            if (Date.now() / 1000 - this._lastShot >= this._shootDelay){
                this._lastShot = Date.now() / 1000;
                return true;
            }
            return false;
        }
    }
}