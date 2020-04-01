"use strict";
var managers;
(function (managers) {
    var BackgroundManager = /** @class */ (function () {
        function BackgroundManager(images, stage) {
            var _this = this;
            this._images = [];
            this._velocity = 1;
            this._images = images;
            this._stage = stage;
            var x = 0;
            this._images.forEach(function (img) {
                _this._stage.addChild(img);
                img.x = x;
                x += img.getBounds().width;
            });
        }
        BackgroundManager.prototype.Update = function () {
            var _this = this;
            this._images.forEach(function (img) {
                img.x -= _this._velocity;
                if (img.x + img.getBounds().width <= 0) {
                    var lastItem = _this._images[_this._images.length - 1];
                    img.x = lastItem.x + lastItem.getBounds().width;
                    _this._images.push(_this._images.shift());
                }
            });
        };
        return BackgroundManager;
    }());
    managers.BackgroundManager = BackgroundManager;
})(managers || (managers = {}));
//# sourceMappingURL=BackgroundManager.js.map