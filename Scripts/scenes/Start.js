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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            // initialization
            _this.backgroundImage = new createjs.Bitmap("./Assets/images/background/menu.png");
            _this.backgroundImage.scaleX = config.Game.SCREEN_W / 1500;
            _this.backgroundImage.scaleY = config.Game.SCREEN_H / 1125;
            _this.play = new objects.Button("./Assets/images/gui/start.png", 320, 180, true);
            _this.instructions = new objects.Button("./Assets/images/gui/instructions.png", 320, 240, true);
            _this.exit = new objects.Button("./Assets/images/gui/exit.png", 320, 300, true);
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            var _this = this;
            this.addChild(this.backgroundImage);
            this.addChild(this.play);
            this.addChild(this.instructions);
            this.addChild(this.exit);
            setTimeout(function () { _this.PlaySound("soundtrack", 0.5, -1); }, 1000);
            var that = this;
            this.play.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.GAME;
            });
            this.instructions.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.INSTRUCTIONS;
            });
            this.exit.on("click", function () {
                open(window.location.href, '_self').close();
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map