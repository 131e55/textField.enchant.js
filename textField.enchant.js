enchant.TextField = enchant.Class.create(enchant.Node, {
  initialize: function(width, height) {
    enchant.Node.call(this);

    // Remove 37 (left-key), 39 (right-key) and 32 (space-key)
    // from 'enchant.ENV.PREVENT_DEFAULT_KEY_CODES'
    this._setPreventDefaultKeyCodes();

    this._width = width;
    this._height = height;

    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.style.position = 'absolute';
    enchant.Core.instance._element.appendChild(this.input);
  },

  _setPreventDefaultKeyCodes: function() {
    var codes = enchant.ENV.PREVENT_DEFAULT_KEY_CODES;
    codes = codes.filter(function (code) {
      return (code !== 37 & code !== 39 && code !== 32);
    });
    enchant.ENV.PREVENT_DEFAULT_KEY_CODES = codes;
  }
});