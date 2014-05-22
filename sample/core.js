enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = '#eee';

    var field = new TextField();
    field.x = 96;
    field.y = 32;
    field.width = 160;
    field.height = 32;
    console.log(field);
    core.rootScene.addChild(field);
  };

  core.start();
};