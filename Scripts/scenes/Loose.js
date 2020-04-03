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
    var Loose = /** @class */ (function (_super) {
        __extends(Loose, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Loose() {
            var _this = _super.call(this) || this;
            // initialization
            _this.endLabel = new objects.Label("You Failed!", "80px", "Arial", "Black", 320, 50, true);
            _this.endButton = new objects.Button("./Assets/images/gui/back.png", 320, 450, true);
            _this.mouseyJail = new objects.Image("./Assets/images/sidekick/mouseyJail.png", config.Game.SCREEN_W / 2, config.Game.SCREEN_H / 2, true);
            _this.play = new objects.Button("./Assets/images/gui/start.png", 320, 390, true);
            _this.backgroundImage = new createjs.Bitmap("./Assets/images/background/failed.jpg");
            _this.backgroundImage.scaleX = config.Game.SCREEN_W / 1024;
            _this.backgroundImage.scaleY = config.Game.SCREEN_H / 600;
            _this.scoreCounter = new objects.Label("Final Score: " + config.Game.SCORE, undefined, undefined, "white", 320, 100, true);
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Loose.prototype.Start = function () {
            this.Main();
        };
        Loose.prototype.Update = function () {
        };
        Loose.prototype.Main = function () {
            this.addChild(this.backgroundImage);
            this.addChild(this.endLabel);
            this.addChild(this.mouseyJail);
            this.addChild(this.endButton);
            this.addChild(this.scoreCounter);
            this.addChild(this.play);
            this.PlaySound("characterDamage");
            this.endButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
            this.play.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.GAME;
            });
        };
        return Loose;
    }(objects.Scene));
    scenes.Loose = Loose;
})(scenes || (scenes = {}));
//# sourceMappingURL=Loose.js.map