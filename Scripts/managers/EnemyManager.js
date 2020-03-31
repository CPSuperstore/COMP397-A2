"use strict";
var managers;
(function (managers) {
    var EnemyManager = /** @class */ (function () {
        function EnemyManager(stage) {
            this._enemies = [];
            this._enemyCap = 3;
            this._stage = stage;
        }
        EnemyManager.prototype.SpawnEnemy = function (y) {
            if (y === void 0) { y = -1; }
            var e = new objects.Enemy(y);
            this._stage.addChild(e);
            this._enemies.push(e);
        };
        EnemyManager.prototype.RemoveEnemy = function (e) {
            this._stage.removeChild(e);
            this._enemies.splice(this._enemies.indexOf(e), 1);
        };
        EnemyManager.prototype.Update = function () {
            while (this._enemies.length < this._enemyCap) {
                this.SpawnEnemy();
            }
            this._enemies.forEach(function (enemy) {
                enemy.Update();
            });
        };
        EnemyManager.prototype.GetShootableEnemies = function () {
            var list = [];
            this._enemies.forEach(function (enemy) {
                if (enemy.CanShoot())
                    list.push(enemy);
            });
            return list;
        };
        EnemyManager.prototype.GetEnemies = function () {
            return this._enemies;
        };
        return EnemyManager;
    }());
    managers.EnemyManager = EnemyManager;
})(managers || (managers = {}));
//# sourceMappingURL=EnemyManager.js.map