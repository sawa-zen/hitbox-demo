import Rockman from './view/Rockman.js';
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
    createjs.Touch.enable(this._stage);

    // ロックマン
    this._rockman = new Rockman();
    this._rockman.x = 10;
    this._rockman.y = 194;
    this._stage.addChild(this._rockman);

    // 床
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#CCC");
    shape.graphics.drawRect(0, 0, 256, 224);
    shape.graphics.endFill();
    shape.y = this._rockman.y;
    this._stage.addChild(shape);
    shape.on('mousedown', _.bind(this.shapeClickHandler, this));

    // 弾管理レイヤー
    var shotLayer = new ShotLayer();
    this._stage.addChild(shotLayer);

    // ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", _.bind(this.tickHandler, this));

    // キーボード入力の監視
    document.onkeydown = _.bind(this.keyDownHandler, this);

  }

  shapeClickHandler() {
    this._rockman.shot();
  }

  tickHandler() {
    this._stage.update();
  }

  keyDownHandler(e) {
      if(e.keyCode === 32) { this._rockman.shot(); }
  }

}

var app = new App();
app.start();
