module objects{
    export class Bullet extends GameObject{

        private _firedBy:objects.GameObject;
        private _velocity:number;
       
        //constructor
        constructor(firedBy:objects.GameObject, velocity:number=10){
            super("./Assets/images/bullets/player.png", firedBy.x, firedBy.y, true);
            this._firedBy = firedBy;
            this.rotation = this._firedBy.rotation;
            this._velocity = velocity;
            this.Start();
        }
        // PUBLIC METHODS

        // initialization method
        public Start():void{
        }

        public Update():void{
            this.x += this._velocity * Math.cos(-this.rotation * (Math.PI / 180));
            this.y -= this._velocity * Math.sin(-this.rotation * (Math.PI / 180));
        }

        public Reset():void{

        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void{

        }
    }
}