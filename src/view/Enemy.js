export default class Enemy extends createjs.Shape {

  constructor() {
    super();
    this.graphics.beginFill("#0000FF");
    this.graphics.drawRect(0, 0, 20, 20);
    this.graphics.endFill();
    this.regX = 10;
    this.regY = 20;

    //オーディオファイルを登録
    createjs.Sound.registerSound({
      id: "hit", src: "sound/hit.mp3"
    });
  }

  hit() {
    // shot音を再生
    var hitSound = createjs.Sound.createInstance('hit');
    hitSound.volume = 0.1;
    hitSound.play();

    createjs.Tween.get(this)
      .to({alpha: 0}, 100)
      .to({alpha: 1}, 100);
  }

}
