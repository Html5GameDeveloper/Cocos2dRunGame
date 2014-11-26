

cc.game.onStart = function(){
    //控制输出大小
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MenuScene());//首先进入的游戏场景
    }, this);
};
cc.game.run();