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
            _this.clawMin = 180;
            _this.clawMax = 450;
            _this.clawVelocity = 3;
            _this.clawVVelocity = 3;
            _this.clawMoving = true;
            _this.instructionLabel = new objects.Label("Break Mousey Out Of Jail By Picking The Lock", "20px", "Arial", "White", config.Game.SCREEN_W / 2, 30, true);
            _this.mouseyJail = new objects.Image("./Assets/images/sidekick/mouseyJail.png", config.Game.SCREEN_W / 2, 175, true);
            _this.lockBackground = new objects.Image("./Assets/images/lock/background.png", config.Game.SCREEN_W / 2, 390, true);
            _this.lockPins = [
                new objects.LockPin(192, 310),
                new objects.LockPin(264.5, 310),
                new objects.LockPin(337, 310),
                new objects.LockPin(409, 310)
            ];
            _this.claw = new objects.Image("./Assets/images/player/claw.png", 300, 400, false);
            _this.backgroundImage = new createjs.Bitmap("./Assets/images/background/lockPick.jpg");
            _this.backgroundImage.scaleX = config.Game.SCREEN_W / 1600;
            _this.backgroundImage.scaleY = config.Game.SCREEN_H / 900;
            window.addEventListener('keyup', function (e) {
                switch (e.code) {
                    case "Space":
                        _this.clawMoving = false;
                        break;
                }
            });
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        LockPick.prototype.Start = function () {
            this.Main();
        };
        LockPick.prototype.Update = function () {
            var _this = this;
            if (this.clawMoving)
                this.claw.x += this.clawVelocity;
            else {
                this.claw.y -= this.clawVVelocity;
                if (this.clawVVelocity > 0 && this.claw.y < 375) {
                    this.lockPins.forEach(function (pin) {
                        if (pin.x - pin.halfWidth < _this.claw.x && _this.claw.x < pin.x + pin.halfWidth) {
                            pin.y -= _this.clawVVelocity;
                        }
                    });
                }
                if (this.claw.y <= 340) {
                    this.clawVVelocity *= -1;
                }
                else if (this.claw.y > 400) {
                    this.clawVVelocity *= -1;
                    this.claw.y = 400;
                    this.clawMoving = true;
                    this.lockPins.forEach(function (pin) {
                        if (pin.x - pin.halfWidth < _this.claw.x && _this.claw.x < pin.x + pin.halfWidth) {
                            _this.lockPins.splice(_this.lockPins.indexOf(pin), 1);
                            var multiplier = 1;
                            if (_this.clawVelocity < 0) {
                                multiplier = -1;
                            }
                            _this.clawVelocity += 1 * multiplier;
                        }
                    });
                    if (this.lockPins.length == 0) {
                        config.Game.SCENE_STATE = scenes.State.END;
                    }
                }
            }
            if (this.claw.x <= this.clawMin || this.claw.x >= this.clawMax) {
                this.clawVelocity *= -1;
            }
        };
        LockPick.prototype.Main = function () {
            var _this = this;
            this.addChild(this.backgroundImage);
            this.addChild(this.mouseyJail);
            this.addChild(this.lockBackground);
            this.lockPins.forEach(function (pin) {
                _this.addChild(pin);
            });
            //this.addChild(new objects.Rectangle(158, 240, 324, 70, "white"))
            this.addChild(this.instructionLabel);
            this.addChild(this.claw);
        };
        return LockPick;
    }(objects.Scene));
    scenes.LockPick = LockPick;
})(scenes || (scenes = {}));
//# sourceMappingURL=LockPick.js.map