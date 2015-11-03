import Rockman from './view/Rockman.js';
import Enemy from './view/Enemy';
import ShotLayer from './ShotLayer.js';

class App {

  /**
   * エントリポイント
   */
  constructor() {
    this.FPS = 60;
  }

  start() {

    // stageのセット
    this._stage = new createjs.Stage('app');

    // ロックマン
    this._rockman = new Rockman();
    this._rockman.x = 10;
    this._rockman.y = 194;
    this._stage.addChild(this._rockman);

    // 敵
    this._enemy = new Enemy();
    this._enemy.x = 230;
    this._enemy.y = 194;
    this._stage.addChild(this._enemy);


    // 床
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#CCC");
    shape.graphics.drawRect(0, 0, 256, 224);
    shape.graphics.endFill();
    shape.y = this._rockman.y;
    this._stage.addChild(shape);
    shape.on('click', this.shapeClickHandler, this);

    // 弾管理レイヤー
    this._shotLayer = new ShotLayer();
    this._stage.addChild(this._shotLayer);

    // ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", this.tickHandler, this);

    // キーボード入力の監視
    document.onkeydown = _.bind(this.keyDownHandler, this);

  }

  shapeClickHandler() {
    this._rockman.shot();
  }

  tickHandler() {

    _.each(this._shotLayer.shotList, _.bind(function(shot) {
      var pt = this._stage.localToLocal(shot.x, shot.y, this._enemy);
      if(this._enemy.hitTest(pt.x, pt.y)) {
        this._enemy.hit();
        this._shotLayer.removeShot(shot);
      }
    }, this));
    this._stage.update();
  }

  keyDownHandler(e) {
      if(e.keyCode === 76) { this._rockman.shot(); }
      if(e.keyCode === 32) { this._rockman.jump(); }
  }

}

var app = new App();
app.start();
