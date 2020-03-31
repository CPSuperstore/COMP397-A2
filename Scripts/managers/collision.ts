module managers
{
    export class Collision
    {
        public static squaredRadiusCheck(object1:objects.GameObject, object2:objects.GameObject)
        {
            let sqrDistance = objects.Vector2.sqrDistance(object1.position, object2.position);
            let radii = object1.halfWidth + object2.halfWidth;

            if(sqrDistance < (radii * radii))
            {
                if(!object2.isColliding)
                {
                    object2.isColliding = true;
                }
            }
            else
            {
                object2.isColliding = false;
            }
        }

        public static AABBCheck(object1:objects.GameObject, object2:objects.GameObject):boolean{
            let x1 = object1.x;
            let y1 = object1.y;

            let x2 = object2.x;
            let y2 = object2.y;

            if(object1.isCentered){
                x1 -= object1.halfWidth;
                y1 -= object1.halfHeight;
            }

            if(object2.isCentered){
                x2 -= object2.halfWidth;
                y2 -= object2.halfHeight;
            }

            return x1 < x2 + object2.width && x1 + object1.width > x2 && y1 < y2 + object2.height && y1 + object1.height > y2;
        }
    }
}