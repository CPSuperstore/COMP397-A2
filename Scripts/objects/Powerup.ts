module objects{
    export class Powerup extends GameObject{
        private _velocity=1;

        //constructor
        constructor(){
            super(undefined, config.Game.SCREEN_W, undefined, true);
            this.image = new createjs.Bitmap("./Assets/images/powerup/" + (this.getRandomInt(3) + 1) + ".png").image;
            this.y = this.getRandomInt(config.Game.SCREEN_H - 28) + (28 / 2);
            
            this.Start();
        }

        public ScaleImage(factor:number){
            this.scaleX = factor;
            this.scaleY = factor;
        }
        // PUBLIC LIFE CYCLE METHODS

        // initialization method
        public Start():void{

        }

        public Update():void{
            this.x -= this._velocity;

        }

        public Reset():void{

        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void{

        }

    }
}