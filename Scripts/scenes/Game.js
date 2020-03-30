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
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Game() {
            var _this = _super.call(this) || this;
            // initialization
            _this.gameLabel = new objects.Label();
            _this.nextButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Game.prototype.Start = function () {
            this.gameLabel = new objects.Label("The Game", "80px", "Arial", "Black", 320, 200, true);
            this.nextButton = new objects.Button("./Assets/images/nextButton.png", 320, 400, true);
            this.Main();
        };
        Game.prototype.Update = function () {
        };
        Game.prototype.Main = function () {
            this.addChild(this.gameLabel);
            this.addChild(this.nextButton);
            this.nextButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.END;
            });
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=Game.js.map