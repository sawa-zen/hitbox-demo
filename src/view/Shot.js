export default class Shot extends createjs.Shape {

  static get END_TWEEN() {
    return 'end_tween';
  }

  constructor(startX, startY) {
    super();
    this.graphics.beginFill('#FFFF00');
    this.graphics.drawCircle(0, 0, 3);
    this.graphics.endFill();
    this.x = startX;
    this.y = startY;
    this.move();
  }

  dispose() {

  }

  move() {
    createjs.Tween.get(this)
      .to({x: 300}, 500)
      .call(() => {
        this.dispatchEvent(Shot.END_TWEEN);
      }, [], this);
  }
}
