enchant.TextField = enchant.Class.create(enchant.Node, {
  initialize: function() {
    enchant.Node.call(this);

    // Remove 37 (left-key), 39 (right-key) and 32 (space-key)
    // from 'enchant.ENV.PREVENT_DEFAULT_KEY_CODES'
    this._setPreventDefaultKeyCodes();

    // input element
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.style.position = 'absolute';
    this.input.style.left = '0px';
    this.input.style.top = '0px';
    enchant.Core.instance._element.appendChild(this.input);
  },

  /*
  * Append to enchant.Node#x
  */
  x: {
    get: function() {
      return this._x;
    },
    set: function(x) {
      this._x = x;
      this._dirty = true;

      // Append from here
      this._setPosition(this._x, this._y);
    }
  },

  /*
  * Append to enchant.Node#y
  */
  y: {
    get: function() {
      return this._y;
    },
    set: function(y) {
      this._y = y;
      this._dirty = true;

      // Append from here
      this._setPosition(this._x, this._y);
    }
  },

  /*
  * Set input element position
  */
  _setPosition: function(x, y) {
    this.input.style.left = this.x + 'px';
    this.input.style.top = this.y + 'px';
  },

  /*
  * Remove 37 (left-key), 39 (right-key) and 32 (space-key)
  * from 'enchant.ENV.PREVENT_DEFAULT_KEY_CODES'
  */
  _setPreventDefaultKeyCodes: function() {
    var codes = enchant.ENV.PREVENT_DEFAULT_KEY_CODES;
    codes = codes.filter(function (code) {
      return (code !== 37 && code !== 39 && code !== 32);
    });
    enchant.ENV.PREVENT_DEFAULT_KEY_CODES = codes;
  }
});