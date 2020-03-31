"use strict";
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.squaredRadiusCheck = function (object1, object2) {
            var sqrDistance = objects.Vector2.sqrDistance(object1.position, object2.position);
            var radii = object1.halfWidth + object2.halfWidth;
            if (sqrDistance < (radii * radii)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        Collision.AABBCheck = function (object1, object2) {
            var x1 = object1.x;
            var y1 = object1.y;
            var x2 = object2.x;
            var y2 = object2.y;
            if (object1.isCentered) {
                x1 -= object1.halfWidth;
                y1 -= object1.halfHeight;
            }
            if (object2.isCentered) {
                x2 -= object2.halfWidth;
                y2 -= object2.halfHeight;
            }
            return x1 < x2 + object2.width && x1 + object1.width > x2 && y1 < y2 + object2.height && y1 + object1.height > y2;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map