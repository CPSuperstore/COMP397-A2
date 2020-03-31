module objects{
    export class Image extends GameObject{

        //constructor
        constructor(imagePath:string = "./Assets/images/placeholder.png", x:number = 0, y:number = 0, isCentered:boolean = true){
            super(imagePath, x, y, isCentered);
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