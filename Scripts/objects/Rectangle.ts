module objects{
    export class Rectangle extends createjs.Shape{
        /**
         *Creates an instance of the solid colored Rectangle
         * @param {number} x - the x position of the rectangle
         * @param {number} y - the y position of the rectangle
         * @param {number} w - the width of the rectangle
         * @param {number} h - the height of the rectangle
         * @param {string} color - the color of the rectangle
         * @memberof Rectangle
         */
        private _w: number;
        private _h: number;
        private _color:string;

        constructor(x:number, y:number, w:number, h:number, color:string){
            super();
            this.graphics.beginFill(color);
            this.graphics.drawRect(x, y, w, h);
            this.graphics.endFill();

            this._w = w;
            this._h = h;
            this._color = color;
        }

        public set Width(val:number){
            this.graphics.beginFill(this._color);
            this.graphics.drawRect(this.x, this.y, val, this._h);
            this.graphics.endFill();
        }
    }
}