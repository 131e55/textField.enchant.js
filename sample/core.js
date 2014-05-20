enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = "#eee";

    var field = new TextField(128, 32);
    core.rootScene.addChild(field);
  };

  core.start();
};