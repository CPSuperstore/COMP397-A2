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
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy(y, hp) {
            if (y === void 0) { y = -1; }
            if (hp === void 0) { hp = -1; }
            var _this = _super.call(this, "./Assets/images/enemy/minion.png", 0, y, true) || this;
            _this._inPlace = false;
            _this._final_x = 1;
            _this._lateralVelocity = 3;
            _this._lastShot = Date.now() / 1000;
            _this._shootDelay = 0.17;
            if (_this.y == -1) {
                _this.y = _this.getRandomInt(config.Game.SCREEN_H - 64) + 32;
            }
            if (hp == -1) {
                hp = _this.getRandomInt(2) + 3;
            }
            _this._hp = hp;
            _this.x = config.Game.SCREEN_W;
            _this._final_x = config.Game.SCREEN_W - _this.getRandomInt(100) - 64;
            _this._inPlace = false;
            _this.rotation = 180;
            return _this;
        }
        Enemy.prototype._checkBounds = function () {
        };
        Enemy.prototype.Start = function () {
        };
        Enemy.prototype.Update = function () {
            if (!this._inPlace) {
                this.x -= this._lateralVelocity;
                if (this.x <= this._final_x) {
                    this._inPlace = true;
                }
            }
        };
        Enemy.prototype.Reset = function () {
        };
        Enemy.prototype.CanShoot = function () {
            if (Date.now() / 1000 - this._lastShot >= this._shootDelay) {
                this._lastShot = Date.now() / 1000;
                return true;
            }
            return false;
        };
        Object.defineProperty(Enemy.prototype, "HP", {
            get: function () {
                return this._hp;
            },
            set: function (hp) {
                this._hp = hp;
            },
            enumerable: true,
            configurable: true
        });
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=Enemy.js.map