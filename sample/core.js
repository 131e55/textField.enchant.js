/*
 * textField.enchant.js v0.2.0 Sample
 * https://github.com/131e55/textField.enchant.js
 *
 * Copyright (c) 2014 Keisuke Kawamura
 * https://twitter.com/131e55
 *
 * Released under the MIT license.
 */

enchant();

window.onload = function () {
  var core = new Core(320, 320);

  core.onload = function () {
    core.rootScene.backgroundColor = '#eee';

    // Create instance of TextField
    // Parameters are width and height
    var textField = new TextField(160, 24);

    // Set position
    textField.x = (core.width - textField.width) / 2;
    textField.y = 64;

    // Set placeholder
    textField.setAttribute('placeholder', 'what is your name ?');

    // Set styles
    textField.style.border = '2px solid #f6c';
    textField.style.borderRadius = '4px';

    // Define event processes
    textField.onfocus = function () {
      label.text = 'onfocus called!!';
    };
    textField.onblur = function () {
      label.text = 'onblur called!!';
    };
    textField.onreturn = function () {
      label.text = 'onreturn called!!<br>' + this.value + '!!';
    };

    // Add to the scene
    core.rootScene.addChild(textField);

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