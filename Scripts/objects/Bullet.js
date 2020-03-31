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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        //constructor
        function Bullet(firedBy, velocity) {
            if (velocity === void 0) { velocity = 10; }
            var _this = _super.call(this, "./Assets/images/bullets/player.png", firedBy.x, firedBy.y, true) || this;
            _this._firedBy = firedBy;
            _this.rotation = _this._firedBy.rotation;
            _this._velocity = velocity;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        // initialization method
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
            this.x += this._velocity * Math.cos(-this.rotation * (Math.PI / 180));
            this.y -= this._velocity * Math.sin(-this.rotation * (Math.PI / 180));
        };
        Bullet.prototype.Reset = function () {
        };
        // PRIVATE LIFE CYCLE METHODS
        Bullet.prototype._checkBounds = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map