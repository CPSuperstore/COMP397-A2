"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Game() {
            var _this = _super.call(this) || this;
            // initialization
            _this.player = new objects.Player();
            _this.bulletManager = new managers.BulletManager(_this);
            _this.enemyBulletManager = new managers.BulletManager(_this);
            _this.enemyManager = new managers.EnemyManager(_this);
            _this.backgroundImage = new createjs.Bitmap("./Assets/images/background/level1.jpg");
            _this.backgroundImage.scaleX = config.Game.SCREEN_H / 1080;
            _this.backgroundImage.scaleY = config.Game.SCREEN_H / 1080;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Game.prototype.Start = function () {
            this.Main();
        };
        Game.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            this.bulletManager.Update();
            this.enemyBulletManager.Update();
            this.enemyManager.Update();
            if (this.player.CanShoot())
                this.bulletManager.Shoot(this.player);
            this.enemyManager.GetShootableEnemies().forEach(function (enemy) {
                _this.enemyBulletManager.Shoot(enemy);
            });
            this.enemyManager.GetEnemies().forEach(function (enemy) {
                if (_this.bulletManager.IsCollided(enemy)) {
                    _this.enemyManager.RemoveEnemy(enemy);
                }
            });
            if (this.enemyBulletManager.IsCollided(this.player)) {
                console.log("ouch");
            }
        };
        Game.prototype.Main = function () {
            this.addChild(this.backgroundImage);
            this.addChild(this.player);
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=Game.js.map