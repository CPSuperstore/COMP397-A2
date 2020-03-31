module objects{
    export class HealthBar extends GameObject{
        private _player:objects.Player;
       
        //constructor
        constructor(player:objects.Player){
            super("./Assets/images/player/healthbar.png", player.x + player.halfWidth, 10, true);
            this._player = player;

            this.Start();
        }
        // PUBLIC METHODS

        public UpdateWidth(){
            this.scaleX = this._player.HP / this._player.MaxHP
        }

        // initialization method
        public Start():void{
        }

        public Update():void{
            this.UpdateWidth();
            this.y = this._player.y + this._player.halfHeight + 10
        }

        public Reset():void{

        }

        // PRIVATE LIFE CYCLE METHODS
        protected _checkBounds():void{

        }
    }
}