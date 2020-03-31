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
            this.player.Update();
            this.bulletManager.Update();
            if (this.player.CanShoot())
                this.bulletManager.Shoot(this.player);
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