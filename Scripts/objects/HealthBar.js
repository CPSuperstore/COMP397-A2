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
    var HealthBar = /** @class */ (function (_super) {
        __extends(HealthBar, _super);
        //constructor
        function HealthBar(player) {
            var _this = _super.call(this, "./Assets/images/player/healthbar.png", player.x + player.halfWidth, 10, true) || this;
            _this._player = player;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        HealthBar.prototype.UpdateWidth = function () {
            this.scaleX = this._player.HP / this._player.MaxHP;
        };
        // initialization method
        HealthBar.prototype.Start = function () {
        };
        HealthBar.prototype.Update = function () {
            this.UpdateWidth();
            this.y = this._player.y + this._player.halfHeight + 10;
        };
        HealthBar.prototype.Reset = function () {
        };
        // PRIVATE LIFE CYCLE METHODS
        HealthBar.prototype._checkBounds = function () {
        };
        return HealthBar;
    }(objects.GameObject));
    objects.HealthBar = HealthBar;
})(objects || (objects = {}));
//# sourceMappingURL=HealthBar.js.map