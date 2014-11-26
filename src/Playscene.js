/**
 * Created by asus on 2014/11/26.
 */



var Playscene = cc.Scene.extend({

    space:null,

    initPhysics:function(){
        this.space = new cp.Space();
        this.space.gravity = cp.v(0,-350);
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0,g_groundHeight),//起始点
            cp.v(4294967295,g_groundHeight),//终止点
            0);
            this.space.addStaticShape(wallBottom);
    },


    onEnter:function(){
        this._super();
        this.initPhysics();



        this.addChild(new BackGroundLayer());
        this.addChild(new AnimationLayer(this.space));
        this.addChild(new StatusLayer());


        this.scheduleUpdate();//每帧刷新，需要重写update函数
    },
    update:function (dt) {
        // chipmunk step
        this.space.step(dt);
    }

});