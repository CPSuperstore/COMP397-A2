module managers
{
    export class EnemyManager{
        private _enemies:objects.Enemy[] = [];
        private _stage:objects.Scene;
        private _enemyCap:number=3;

        constructor(stage:objects.Scene){
            this._stage = stage;
        }

        public SpawnEnemy(y:number=-1) {
            let e:objects.Enemy = new objects.Enemy(y);
            this._stage.addChild(e);
            this._enemies.push(e);
        }

        public RemoveEnemy(e:objects.Enemy){
            this._stage.removeChild(e);
            this._enemies.splice(this._enemies.indexOf(e), 1);
        }

        public Update(){
            while(this._enemies.length < this._enemyCap){
                this.SpawnEnemy();
            }
            this._enemies.forEach(enemy => {
                enemy.Update();
            });
        }

        public GetShootableEnemies():objects.Enemy[]{
            let list:objects.Enemy[] = []
            this._enemies.forEach(enemy => {
                if(enemy.CanShoot())
                    list.push(enemy)
            });
            return list;
        }

        public GetEnemies():objects.Enemy[]{
            return this._enemies;
        }
    }
}