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
    var LockPin = /** @class */ (function (_super) {
        __extends(LockPin, _super);
        //constructor
        function LockPin(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, "./Assets/images/lock/pin.png", x, y, false) || this;
            _this.Start();
            return _this;
        }
        LockPin.prototype.ScaleImage = function (factor) {
            this.scaleX = factor;
            this.scaleY = factor;
        };
        // PUBLIC LIFE CYCLE METHODS
        // initialization method
        LockPin.prototype.Start = function () {
        };
        LockPin.prototype.Update = function () {
        };
        LockPin.prototype.Reset = function () {
        };
        // PRIVATE LIFE CYCLE METHODS
        LockPin.prototype._checkBounds = function () {
        };
        return LockPin;
    }(objects.GameObject));
    objects.LockPin = LockPin;
})(objects || (objects = {}));
//# sourceMappingURL=LockPin.js.map