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
    createjs.Touch.enable(this._stage);

    // ロックマン
    this._rockman = new Rockman();
    this._rockman.x = 10;
    this._rockman.y = 194;
    this._stage.addChild(this._rockman);

    // 敵
    this._enemy = new Enemy();
    this._enemy.x = 230;
    this._enemy.y = 180;
    this._stage.addChild(this._enemy);


    // 床
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#CCC");
    shape.graphics.drawRect(0, 0, 256, 224);
    shape.graphics.endFill();
    shape.y = this._rockman.y;
    this._stage.addChild(shape);
    shape.on('mousedown', _.bind(this.shapeClickHandler, this));

    // 弾管理レイヤー
    this._shotLayer = new ShotLayer();
    this._stage.addChild(this._shotLayer);

    // ticker
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", this.tickHandler, this);

    // キーボード入力の監視
    document.onkeydown = _.bind(this.keyDownHandler, this);

    document.getElementById('app').onmousemove = (e) => {

      var pt = this._stage.localToLocal(e.pageX * 2, e.pageY * 2, this._enemy);

      console.info(this._enemy.hitTest(e.pageX, e.pageY));
      console.info('pt.x: ', pt.x);
      console.info('pt.y: ', pt.y);

      if(this._enemy.hitTest(pt.x, pt.y)) {
        this._enemy.hit();
      }
    };

  }

  shapeClickHandler() {
    this._rockman.shot();
  }

  tickHandler() {

    _.each(this._shotLayer.shotList, _.bind(function(shot) {
      var pt = this._stage.localToLocal(shot.x, shot.y, this._enemy);

      console.info('pt.x: ', pt.x);
      console.info('pt.y: ', pt.y);

      if(this._enemy.hitTest(pt.x, pt.y)) {
        this._enemy.hit();
      }
    }, this));
    this._stage.update();
  }

  keyDownHandler(e) {
      if(e.keyCode === 32) { this._rockman.shot(); }
  }

}

var app = new App();
app.start();
