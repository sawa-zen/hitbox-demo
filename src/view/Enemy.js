export default class Enemy extends createjs.Shape {

  constructor() {
    super();
    this.graphics.beginFill("#0000FF");
    this.graphics.drawRect(0, 0, 20, 20);
    this.graphics.endFill();
    this.regX = 10;
    this.regY = 20;
  }

  hit() {
    console.info('hit');
    createjs.Tween.get(this)
      .to({alpha: 0}, 100)
      .to({alpha: 1}, 100);
  }

}
