export default class ShotLayer extends createjs.Container {

  constructor() {

    // シングルトン
    if(ShotLayer.instance) {
      return ShotLayer.instance;
    }

    super();
    this.initialize();

    ShotLayer.instance = this;
  }


  addShot(shot) {
    this.addChild(shot);
  }
}
