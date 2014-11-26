/**
 * Created by asus on 2014/11/26.
 */
var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,
    runningAction:null,
    sprite:null,
    shape:null,
    space:null,
    body:null,



    ctor:function(space){
        this._super();
        this.space=space;
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
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));


        //通过物理引擎来创建sprite
        /*
        this.sprite = cc.Sprite.create("#runner0.png");
        this.sprite.attr({x:80,y:85});
        */
        //create runner through physic engine
        this.sprite = new cc.PhysicsSprite("#runner0.png");
        var contentSize = this.sprite.getContentSize();
        // init body
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.body.p = cc.p(g_runnerStartX, g_groundHeight + contentSize.height / 2);
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        this.space.addBody(this.body);
        //init shape
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        this.space.addShape(this.shape);

        this.sprite.setBody(this.body);
        this.sprite.runAction(this.runningAction);

        this.spriteSheet.addChild(this.sprite);
    }

});