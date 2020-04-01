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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.titleLabel = new objects.Label("Instructions", "80px", "Arial", "Black", 320, 50, true);
            _this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 450, true);
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Instructions.prototype.Start = function () {
            this.Main();
        };
        Instructions.prototype.Update = function () {
        };
        Instructions.prototype.Main = function () {
            this.addChild(this.titleLabel);
            this.addChild(this.endButton);
            this.endButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instructions.js.map