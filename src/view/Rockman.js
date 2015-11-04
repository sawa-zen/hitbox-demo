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
        [1, -1, 30, 36, 0, 0, 0],
        [32, 1, 30, 36, 0, 0, 0],
        [1, 38, 30, 36, 0, 0, 0],
        [32, 38, 31, 36, 0, 0, 0],
        [1, 75, 24, 39, 0, 0, 0],
        [26, 75, 24, 40, 0, 0, 0],
        [1, 116, 23, 43, 0, 0, 0],
        [25, 116, 18, 43, 0, 0, 0],
        [1, 160, 27, 44, 0, 0, 0],
        [29, 160, 19, 46, 0, 0, 0]
      ],
      "animations": {
        "shot": {
          "frames": [3, 1, 1],
          "next": "normal",
          "speed": 0.24
        },
        "normal": {
          "frames": [2]
        },
        "jumpUp": {
          "frames": [4, 7, 9],
          "next": false,
          "speed": 0.4
        },
        "jumpDown": {
          "frames": [6, 8],
          "next": false,
          "speed": 0.4//0.24
        },
        "touchdown": {
          "frames": [5, 0],
          "next": "normal",
          "speed": 0.5 //1
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

    // ジャンプ中は打たせない
    if(this.isJumping) { return; }

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
    // ジャンプ中であれば無視
    if(this.isJumping) { return; }

    var jumpHeight = 70;
    var speed = 300;

    this.gotoAndPlay('jumpUp');
    this.isJumping = true;
    createjs.Tween.get(this)
      .to({y: this.y - jumpHeight}, speed, createjs.Ease.quadOut)
      .call(this.gotoAndPlay, ['jumpDown'])
      .to({y: this.y}, speed, createjs.Ease.quadIn)
      .call(function() {
        this.isJumping = false;
        this.gotoAndPlay('touchdown');
      }, this);
  }

}
