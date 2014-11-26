/**
 * Created by asus on 2014/11/26.
 */
var Playscene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new BackGroundLayer());
    }

});