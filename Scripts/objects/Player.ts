module objects{
    export class Player extends GameObject{

        private _up:boolean=false;
        private _down:boolean=false;
        private _verticalVelocity:number = 2;
        private _tilt_factor:number = 15;
        private _lastShot:number = Date.now() / 1000;
        private _shootDelay:number=0.125;

        //constructor
        constructor(x:number = 50, y:number = 100){
            super("./Assets/images/player/floofie.png", x, y, true);

            window.addEventListener('keyup', (e) => {
                switch(e.code) {
                    case "KeyW":
                        this._up = false;
                        break;
                    case "KeyS":
                        this._down = false;
                        break;
                }
            });
            window.addEventListener('keydown', (e) => {
                switch(e.code) {
                    case "KeyW":
                        this._up = true;
                        break;
                    case "KeyS":
                        this._down = true;
                        break;
                }
            });
            this.Start();
        }

        public ScaleImage(factor:number){
            this.scaleX = factor;
            this.scaleY = factor;
        }

        public CanShoot():boolean{
            if (Date.now() / 1000 - this._lastShot >= this._shootDelay){
                this._lastShot = Date.now() / 1000;
                return true;
            }
            return false;
        }

        // PUBLIC METHODS

        // initialization method
        public Start():void{
        }

        public Update():void{
            if(this._up && this._down){
                this.rotation = 0;
            } else if(this._up){
                this.y -= this._verticalVelocity;
                if (this.y < this.halfHeight){
                    this.y += this._verticalVelocity;
                } else {
                    this.rotation = -this._tilt_factor;
                }
            } else if(this._down){
                this.y += this._verticalVelocity;
                if (this.y > config.Game.SCREEN_H - this.halfHeight){
                    this.y -= this._verticalVelocity;
                } else {
                    this.rotation = this._tilt_factor;
                }
            } else {
                this.rotation = 0;
            }
        }

        public Reset():void{

        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void{

        }
    }
}