enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = "#eee";

    var field = new TextField();
    field.x = 96;
    field.y = 32;
    core.rootScene.addChild(field);
  };

  core.start();
};