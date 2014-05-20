enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    var field = new TextField();
    core.rootScene.addChild(field);
  };

  core.start();
};