module objects{
    export class LockPin extends GameObject{

        //constructor
        constructor(x:number = 0, y:number = 0){
            super("./Assets/images/lock/pin.png", x, y, false);
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

        }

        public Reset():void{

        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void{

        }

    }
}