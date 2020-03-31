"use strict";
var managers;
(function (managers) {
    var BulletManager = /** @class */ (function () {
        function BulletManager(stage) {
            this._bullets = [];
            this._stage = stage;
        }
        BulletManager.prototype.Shoot = function (firedBy) {
            var b = new objects.Bullet(firedBy);
            this._stage.addChild(b);
            this._bullets.push(b);
        };
        BulletManager.prototype.RemoveBullet = function (b) {
            this._stage.removeChild(b);
            this._bullets.splice(this._bullets.indexOf(b), 1);
        };
        BulletManager.prototype.IsCollided = function (other) {
            var _this = this;
            var returnValue = false;
            this._bullets.forEach(function (bullet) {
                if (managers.Collision.AABBCheck(bullet, other)) {
                    returnValue = true;
                    _this.RemoveBullet(bullet);
                    returnValue = true;
                }
            });
            return returnValue;
        };
        BulletManager.prototype.Update = function () {
            var _this = this;
            this._bullets.forEach(function (bullet) {
                bullet.Update();
                if (bullet.x > config.Game.SCREEN_W || bullet.x < 0) {
                    _this.RemoveBullet(bullet);
                }
            });
        };
        return BulletManager;
    }());
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=BulletManager.js.map