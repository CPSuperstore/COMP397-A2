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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //constructor
        function Player(x, y) {
            if (x === void 0) { x = 50; }
            if (y === void 0) { y = 100; }
            var _this = _super.call(this, "./Assets/images/player/floofie.png", x, y, true) || this;
            _this._up = false;
            _this._down = false;
            _this._verticalVelocity = 2;
            _this._tilt_factor = 15;
            _this._lastShot = Date.now() / 1000;
            _this._shootDelay = 0.125;
            window.addEventListener('keyup', function (e) {
                switch (e.code) {
                    case "KeyW":
                        _this._up = false;
                        break;
                    case "KeyS":
                        _this._down = false;
                        break;
                }
            });
            window.addEventListener('keydown', function (e) {
                switch (e.code) {
                    case "KeyW":
                        _this._up = true;
                        break;
                    case "KeyS":
                        _this._down = true;
                        break;
                }
            });
            _this.Start();
            return _this;
        }
        Player.prototype.ScaleImage = function (factor) {
            this.scaleX = factor;
            this.scaleY = factor;
        };
        Player.prototype.CanShoot = function () {
            if (Date.now() / 1000 - this._lastShot >= this._shootDelay) {
                this._lastShot = Date.now() / 1000;
                return true;
            }
            return false;
        };
        // PUBLIC METHODS
        // initialization method
        Player.prototype.Start = function () {
        };
        Player.prototype.Update = function () {
            if (this._up && this._down) {
                this.rotation = 0;
            }
            else if (this._up) {
                this.y -= this._verticalVelocity;
                if (this.y < this.halfHeight) {
                    this.y += this._verticalVelocity;
                }
                else {
                    this.rotation = -this._tilt_factor;
                }
            }
            else if (this._down) {
                this.y += this._verticalVelocity;
                if (this.y > config.Game.SCREEN_H - this.halfHeight) {
                    this.y -= this._verticalVelocity;
                }
                else {
                    this.rotation = this._tilt_factor;
                }
            }
            else {
                this.rotation = 0;
            }
        };
        Player.prototype.Reset = function () {
        };
        // PRIVATE LIFE CYCLE METHODS
        Player.prototype._checkBounds = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map