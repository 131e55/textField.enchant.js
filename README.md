textField.enchant.js (v0.2.0)
=============================
**textField.enchant.js** is a [enchant.js](http://enchantjs.com) plugin.

Use this plugin, and you can use `<input type='text'>` in [enchant.js](http://enchantjs.com) games.

Require
-------
[enchant.js](http://enchantjs.com) v0.6.0+

Usage example
-------------
### Create TextField instance
```js
var textField = new TextField(160, 24);    // Parameters are width and height
```

### Add to scene
```js
core.rootScene.addChild(textField);
```

### Set size
```js
textField.width = 120;
textField.height = 20;
```

### Set position
```js
textField.x = 64;
textField.y = 64;
```

### Set Attribute
```js
textField.setAttribute('placeholder', 'what is your name ?');
```

### Get Attribute
```js
var attr = textField.getAttribute('placeholder');
```

### Set styles
```js
textField.style.border = '2px solid #f6c';
textField.style.borderRadius = '4px';
```

### Define event processes
```js
// Call when textField gets focus.
textField.onfocus = function () {
  console.log('You focuses.');
};

// Call when a user leaves textField
textField.onblur = function () {
  console.log('You leaves.');
};

// Call when a user presses the return-key
textField.onreturn = function () {
  console.log('You presses the return-key.');
};
```

Copyright and License
---------------------
Copyright (c) 2014 Keisuke Kawamura  
[https://twitter.com/131e55](https://twitter.com/131e55)

Released under the MIT license.
