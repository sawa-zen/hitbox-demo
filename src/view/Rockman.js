export default class Rockman extends createjs.Sprite {

  constructor() {
    super();

    //オーディオファイルを登録
    createjs.Sound.registerSound( {id: "shot", src: "sound/shot.mp3"} );

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
    this.play();
  }

  shot() {
    this.gotoAndPlay('shot');
    var shotSound = createjs.Sound.createInstance('shot');
    shotSound.volume = 0.2;
    shotSound.play();
  }

}
