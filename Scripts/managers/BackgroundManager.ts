module managers
{
    export class BackgroundManager{
        private _images:createjs.Bitmap[] = [];
        private _stage:objects.Scene;
        private _velocity = 1;

        constructor(images:createjs.Bitmap[], stage:objects.Scene){
            this._images = images;
            this._stage = stage;
            let x=0;
            this._images.forEach(img => {
                this._stage.addChild(img)
                img.x = x;
                x += img.getBounds().width;
            });
        }

        public Update(){
            this._images.forEach(img => {
                img.x -= this._velocity;
                if (img.x + img.getBounds().width <= 0){
                    let lastItem = this._images[this._images.length-1];
                    img.x = lastItem.x + lastItem.getBounds().width
                    this._images.push(<createjs.Bitmap> this._images.shift()); 
                }
            });
            
        }
    }
}