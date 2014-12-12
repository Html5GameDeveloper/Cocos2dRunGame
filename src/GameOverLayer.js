var GameOverLayer = cc.LayerColor.extend({
    // 构造函数
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super(cc.color(0, 0, 0, 180));
        var winSize = cc.director.getWinSize();

        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
        cc.MenuItemFont.setFontSize(30);
        var menuItemRestart = new cc.MenuItemSprite(
        	new cc.Sprite(res.restart_n_png),
        	new cc.Sprite(res.restart_s_png),
            this.onRestart, this);
        var menu = new cc.Menu(menuItemRestart);
        menu.setPosition( cc.p(winSize.width / 2, (winSize.height / 2)+50));
        this.addChild(menu);

        var returngame = new cc.MenuItemSprite(
            new cc.Sprite(res.restart_n_png),
            new cc.Sprite(res.restart_s_png),
            this.rePlay, this);
        var menu2 = new cc.Menu(returngame);
        menu2.setPosition( cc.p(winSize.width / 2, (winSize.height / 2)-50));
        this.addChild(menu2);

    },
    rePlay:function(){
     cc.log("hello ");
    },
    onRestart:function (sender) {
        cc.director.resume();
        cc.director.runScene(new PlayScene());
    }
});