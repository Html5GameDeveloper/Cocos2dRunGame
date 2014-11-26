/**
 * Created by asus on 2014/11/26.
 */
var BackGroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        this._super();
        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width/2,winsize.height/2);
        var spriteBG = cc.Sprite.create(res.PlayBG_png);
        spriteBG.setPosition (centerpos);
        this.addChild(spriteBG);
    }
});