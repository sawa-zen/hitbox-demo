import Shot from './view/Shot';

export default class ShotLayer extends createjs.Container {

  constructor() {

    // シングルトン
    if(ShotLayer.instance) {
      return ShotLayer.instance;
    }

    super();
    this.initialize();
    this.shotList = [];

    ShotLayer.instance = this;
  }

  addShot(shot) {
    this.shotList.push(shot);
    this.addChild(shot);
    shot.on(Shot.END_TWEEN, this.shotEndHandler, this);
  }

  removeShot(shot) {
    shot.off(Shot.END_TWEEN, this.shotEndHandler);
    this.removeChild(shot);
    this.shotList = _.without(this.shotList, shot);
  }

  shotEndHandler(e) {
    this.removeShot(e.target);
  }

}
