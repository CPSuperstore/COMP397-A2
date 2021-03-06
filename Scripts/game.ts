//IIFE - Imediately Invoked Function Expression
//Means: is an anonymous self-executing function
let game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;

    let currentSceneState:scenes.State;
    let currentScene:objects.Scene;
   

    /**
     * Perform Initialization in the Start function
     *
     */
    function Start():void
    {
        stage = new createjs.Stage(canvas);
        stage.name = "Main Stage";
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }

    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update():void
    {
        if(currentSceneState != config.Game.SCENE_STATE)
        {
            Main();
        }

        currentScene.Update();
        stage.update();
    }

    /**
     * This function is the main function of the game
     *
     */
    function Main():void
    {
        // Clean Up
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        //console.log("Switched to level: " + scenes.State[config.Game.SCENE_STATE])
        // State Machine
        switch(config.Game.SCENE_STATE)
        {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.GAME:
                currentScene = new scenes.Game();
                break;
            case scenes.State.LOCK_PICK:
                currentScene = new scenes.LockPick();
                break;
            case scenes.State.END:
                currentScene = new scenes.End();
                break;
            case scenes.State.LOOSE:
                currentScene = new scenes.Loose();
                break;
            case scenes.State.INSTRUCTIONS:
                currentScene = new scenes.Instructions();
                break;
        }
        // add the scene to the stage and setup the current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;
    }

    window.addEventListener("load", Start);
})();