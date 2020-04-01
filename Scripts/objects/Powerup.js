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
    var Powerup = /** @class */ (function (_super) {
        __extends(Powerup, _super);
        //constructor
        function Powerup() {
            var _this = _super.call(this, undefined, config.Game.SCREEN_W, undefined, true) || this;
            _this._velocity = 1;
            _this.image = new createjs.Bitmap("./Assets/images/powerup/" + (_this.getRandomInt(3) + 1) + ".png").image;
            _this.y = _this.getRandomInt(config.Game.SCREEN_H - 28) + (28 / 2);
            _this.Start();
            return _this;
        }
        Powerup.prototype.ScaleImage = function (factor) {
            this.scaleX = factor;
            this.scaleY = factor;
        };
        // PUBLIC LIFE CYCLE METHODS
        // initialization method
        Powerup.prototype.Start = function () {
        };
        Powerup.prototype.Update = function () {
            this.x -= this._velocity;
        };
        Powerup.prototype.Reset = function () {
        };
        // PRIVATE LIFE CYCLE METHODS
        Powerup.prototype._checkBounds = function () {
        };
        return Powerup;
    }(objects.GameObject));
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=Powerup.js.map