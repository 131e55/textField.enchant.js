(function() {
  enchant.TextField = enchant.Class.create(enchant.DomLayer, {
    initialize: function() {
      enchant.DomLayer.call(this);
      var that = this;

      // Remove 37 (left-key), 39 (right-key) and 32 (space-key)
      // from 'enchant.ENV.PREVENT_DEFAULT_KEY_CODES'
      this._setPreventDefaultKeyCodes();

      // input element
      this.input = document.createElement('input');
      this.input.type = 'text';
      this.input.style.boxSizing = 'border-box';
      this.input.style.width = '100%';
      this.input.style.height = '100%';
      this._element.appendChild(this.input);

      // Blur input element, when scene touched (not input element)
      this.on('addedtoscene', function () {
        this.scene.on('touchstart', function () {
          that.blur();
        });
      });
    },

    /*
    * Focus input element
    */
    focus: function() {
      this.input.focus();
    },

    /*
    * Blur input element
    */
    blur: function() {
      this.input.blur();
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
})();