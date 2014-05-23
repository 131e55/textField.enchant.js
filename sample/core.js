enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = '#eee';

    var field = new TextField(160, 24);
    field.x = (core.width - field.width) / 2;
    field.y = 64;
    field.placeholder = 'what is your name ?';

    field.style.border = '2px solid #f6c';
    field.style.borderRadius = '4px';

    field.onfocus = function () {
      label.text = 'onfocus called!!';
    };
    field.onblur = function () {
      label.text = 'onblur called!!';
    };
    field.onreturn = function () {
      label.text = 'onreturn called!!<br>' + this.value + '!!';
    };

    core.rootScene.addChild(field);

    var label = new Label();
    label.font = '32px Arial';
    label.width = 320;
    label.height = 32;
    label.x = 0;
    label.y = core.height - label.height * 2;
    label.textAlign = 'center';
    core.rootScene.addChild(label);
  };

  core.start();
};