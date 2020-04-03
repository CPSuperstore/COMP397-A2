module objects
{
    export abstract class Scene extends createjs.Container
    {
        private isActive = false;

        constructor()
        {
            super();
            //this.Start();
        }

        // Life Cycle Functions

        /**
         * Initialization Method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Start():void;

        /**
         * Updates all Game objects attached to the scene
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Update():void;

        /**
         * Scene functionality happens in this method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Main():void;

        public get IsActive():boolean{
            return this.isActive;
        }
        public set IsActive(state:boolean){
            this.isActive = state;
        }

        public PlaySound(id:string, volume:number=0.7, loops=1){
            var instance = createjs.Sound.play(id,  {loop:loops});
            instance.volume = volume;  
        }
    }
}