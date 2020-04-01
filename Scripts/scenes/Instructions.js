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
            var text = "\n            Floofie's Adventure!\n            \n            Read the story in the panel on the right side of the screen\n            which has conveniently labeled \"Story\"\n\n            In the first level, use W and D to move up and down\n            Shoot enemies to kill them\n            Collect cat treats to regain some health\n\n            In the seccond level, use the space bar to pick the lock\n            Push each lock pin to break the lock and rescue mousey\n\n            Starting My Girlfriend's Cat as Queen Floofie!  \n            ";
            _this.titleLabel = new objects.Label("Instructions", "80px", "Arial", "Black", 320, 50, true);
            _this.body = new objects.Label(text.replace("\t", ""), "20px", "Arial", "Black", 320, 100, true);
            _this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 425, true);
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
            this.addChild(this.body);
            this.endButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instructions.js.map