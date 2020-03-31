"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["GAME"] = 1] = "GAME";
        State[State["END"] = 2] = "END";
        State[State["LOOSE"] = 3] = "LOOSE";
        State[State["LOCK_PICK"] = 4] = "LOCK_PICK";
        State[State["NUM_OF_SCENES"] = 5] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map