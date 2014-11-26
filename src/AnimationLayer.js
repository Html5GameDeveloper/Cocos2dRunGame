/**
 * Created by asus on 2014/11/26.
 */
var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,
    runningAction:null,
    sprite:null,


    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this._super();
        //创建精灵运动表
        cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
        this.spriteSheet = new cc.SpriteBatchNode(res.runner_png);
        this.addChild(this.spriteSheet);


        //建立动画数组
        //共有8帧作为动画
        var animFrame =[];
        for(var i=0;i<8;i++){
            var str = "runner"+i+".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrame.push(frame);
        }

        //动画每隔0.1秒播放一次
        var animation = new cc.Animation(animFrame,0.1);
        this.runningAction = new cc.repeatForever(new cc.Animate(animation));
        this.sprite = cc.Sprite.create("#runner0.png");
        this.sprite.attr({x:80,y:85});

       //播放动画
        this.sprite.runAction(this.runningAction);
        this.spriteSheet.addChild(this.sprite);
    }

});