import Shot from './Shot';
import ShotLayer from '../ShotLayer';

export default class Rockman extends createjs.Sprite {

  constructor() {
    super();

    //オーディオファイルを登録
    createjs.Sound.registerSound({
      id: "shot", src: "sound/shot.mp3"
    });

    // スプライトシート作成
    var spriteSheet = new createjs.SpriteSheet({
      "framerate": 24,
      "images": ['/img/rockman.png'],
      "frames": [
        [1, 1, 30, 36, 0, 0, 0],
        [32, 1, 31, 36, 0, 0, 0],
        [64, 1, 30, 36, 0, 0, 0]
      ],
      "animations": {
        "shot": {
          "frames": [1, 2, 2],
          "next": "normal",
          "speed": 0.24
        },
        "normal": {
          "frames": [0]
        }
      }
    });

    this.initialize(spriteSheet, 'normal');
    this.regY = 36;
    this.isJumping = false;
    this.play();
  }

  culcShotStartPos() {
    return {x: this.x + 33, y: this.y - 20};
  }

  shot() {
    this.gotoAndPlay('shot');

    // shot音を再生
    var shotSound = createjs.Sound.createInstance('shot');
    shotSound.volume = 0.2;
    shotSound.play();

    // 手ブレ
    var shotShake = Math.floor( Math.random() * (3 - 1 + 1) ) + 1;

    var shotLayer = new ShotLayer();
    var startPos = this.culcShotStartPos();
    shotLayer.addShot(new Shot(startPos.x, startPos.y + shotShake));
  }

  jump() {
    console.info("jump");
    // ジャンプ中であれば無視
    if(this.isJumping) { return; }

    this.isJumping = true;
    createjs.Tween.get(this)
      .to({y: this.y - 50}, 250, createjs.Ease.quadOut)
      .to({y: this.y}, 250, createjs.Ease.quadIn)
      .call(function() { this.isJumping = false; }, this);
  }

}
