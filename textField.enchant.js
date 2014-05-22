(function() {
  enchant.TextField = enchant.Class.create(enchant.DomLayer, {
    initialize: function() {
      enchant.DomLayer.call(this);
      var that = this;

      // For .onreturn accessor
      this._onreturn = null;

      // Remove 37 (left-key), 39 (right-key) and 32 (space-key)
      // from 'enchant.ENV.PREVENT_DEFAULT_KEY_CODES'
      this._setPreventDefaultKeyCodes();

      // input element
      this._input = document.createElement('input');
      this._input.type = 'text';
      this._input.style.boxSizing = 'border-box';
      this._input.style.width = '100%';
      this._input.style.height = '100%';
      this._element.appendChild(this._input);

      // Blur input element, when scene touched (not input element)
      this.on('addedtoscene', function () {
        this.scene.on('touchstart', function () {
          that.blur();
        });
      });

      // Blur input element, when the retuen-key pressed
      // And, call .onreturn() 
      this._input.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
          this.blur();

          if (typeof that._onreturn === 'function') {
            that._onreturn();
          }
        };
      });
    },

    /*
    * Focus input element
    */
    focus: function() {
      this._input.focus();
    },

    /*
    * Blur input element
    */
    blur: function() {
      this._input.blur();
    },

    /*
    * Accessor of onfocus
    */
    onfocus: {
      get: function() {
        return this._input.onfocus;
      },
      set: function(f) {
        this._input.onfocus = f;
      }
    },

    /*
    * Accessor of onblur
    */
    onblur: {
      get: function() {
        return this._input.onblur;
      },
      set: function(f) {
        this._input.onblur = f;
      }
    },

    /*
    * Accessor of onreturn
    * Call when the return-key pressed.
    */
    onreturn: {
      get: function() {
        return this._onreturn;
      },
      set: function(f) {
        this._onreturn = f;
      }
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