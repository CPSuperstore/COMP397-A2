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
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super.call(this) || this;
            _this.isActive = false;
            return _this;
            //this.Start();
        }
        Object.defineProperty(Scene.prototype, "IsActive", {
            get: function () {
                return this.isActive;
            },
            set: function (state) {
                this.isActive = state;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.PlaySound = function (id, volume) {
            if (volume === void 0) { volume = 0.9; }
            var instance = createjs.Sound.play(id);
            instance.volume = volume;
            createjs.Sound.on("fileload", function (event) {
                // var instance = createjs.Sound.play(id);
                // instance.volume = volume;        
            }, this);
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=Scene.js.map