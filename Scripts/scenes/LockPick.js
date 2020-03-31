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
    var LockPick = /** @class */ (function (_super) {
        __extends(LockPick, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function LockPick() {
            var _this = _super.call(this) || this;
            // initialization
            _this.instructionLabel = new objects.Label();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        LockPick.prototype.Start = function () {
            this.instructionLabel = new objects.Label("Break Mousey Out Of Jail Py Picking The Lock", "20px", "Arial", "Black", 320, 50, true);
            this.Main();
        };
        LockPick.prototype.Update = function () {
        };
        LockPick.prototype.Main = function () {
            this.addChild(this.instructionLabel);
        };
        return LockPick;
    }(objects.Scene));
    scenes.LockPick = LockPick;
})(scenes || (scenes = {}));
//# sourceMappingURL=LockPick.js.map