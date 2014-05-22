enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = '#eee';

    var field = new TextField();
    field.width = 160;
    field.height = 24;
    field.x = (core.width - field.width) / 2;
    field.y = 64;

    field.onfocus = function () {
      label.text = 'onfocus called!!';
    };
    field.onblur = function () {
      label.text = 'onblur called!!';
    };
    field.onreturn = function () {
      label.text = 'onreturn called!!';
    };

    core.rootScene.addChild(field);

    var label = new Label();
    label.font = '32px Arial';
    label.width = 320;
    label.height = 32;
    label.moveTo(0, core.height - label.height);
    label.textAlign = 'center';
    core.rootScene.addChild(label);
  };

  core.start();
};