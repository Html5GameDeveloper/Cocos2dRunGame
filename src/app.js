var Menulayer = cc.Layer.extend({
	ctor:function(){
		this._super();//构造函数，调用父类
	},
	init:function(){
        //用于初始化图层
		this._super();
		var winsize = cc.director.getWinSize();
		var centerpos = cc.p(winsize.width/2,winsize.height/2);
		
		var spritebg = cc.Sprite.create(res.helloBG_png);
		spritebg.setPosition(centerpos);
		this.addChild(spritebg);
		
		cc.MenuItemFont.setFontSize(60);
		//设置按钮样式，并设置其调用的函数
		var menuItemPlay = cc.MenuItemSprite.create(
			cc.Sprite.create(res.start_n_png),//点击前的样式
			cc.Sprite.create(res.start_s_png),//点击后的样式
			this.onPlay,this);
		//创建这个按钮
		var menu=cc.Menu.create(menuItemPlay);
		menu.setPosition(centerpos);
		this.addChild(menu);	
	},
	onPlay:function(){
		cc.log("==onplay clicked");
        cc.director.runScene(new Playscene());
	}
	
});

var MenuScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new Menulayer();
		layer.init();//初始化游戏图层
		this.addChild(layer);
	}
});





