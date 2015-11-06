import Shot from './Shot';
import ShotLayer from '../ShotLayer';

export default class Rockman extends createjs.Sprite {

  constructor() {
    super();

    //オーディオファイルを登録
    createjs.Sound.registerSound({
      id: "shot", src: "sound/shot.mp3"
    });


    var frameW = 60;
    var frames = [];
    for(let y = 0; y < 2; y++) {
      for(let x = 0; x < 7; x++) {
        frames.push([
          frameW * x,       // x
          frameW * y + 1,   // y
          frameW,           // width
          frameW - 1,       // height
          0,                // imageIndex
          frameW / 2,       // regX
          frameW - 1        // regY
        ]);
      }
    }

    // スプライトシート作成
    var spriteSheet = new createjs.SpriteSheet({
      "framerate": 24,
      "images": ['/img/rockman.png'],
      "frames": frames,
      "animations": {
        "shot": {
          "frames": [2, 1, 1],
          "next": "normal",
          "speed": 0.24
        },
        "normal": {
          "frames": [0]
        },
        "jumpUp": {
          "frames": [7, 8, 9],
          "next": false,
          "speed": 0.4
        },
        "jumpDown": {
          "frames": [10, 11],
          "next": false,
          "speed": 0.4//0.24
        },
        "touchdown": {
          "frames": [12, 13],
          "next": "normal",
          "speed": 0.5 //1
        }
      }
    });

    this.initialize(spriteSheet, 'normal');
    this.isJumping = false;
    this.play();
  }

  culcShotStartPos() {
    return {x: this.x + 18, y: this.y - 20};
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
