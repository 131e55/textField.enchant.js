/*
 * textField.enchant.js v0.1.0
 * https://github.com/131e55/textField.enchant.js
 *
 * Copyright (c) 2014 Keisuke Kawamura
 * https://twitter.com/131e55
 *
 * Released under the MIT license.
 *
 * Require enchant.js v0.6.0+
 */

(function() {
  enchant.TextField = enchant.Class.create(enchant.DomLayer, {
    initialize: function(width, height) {
      enchant.DomLayer.call(this);
      var that = this;

      // initialize size
      this.width = width || 120;
      this.height = height || 20;

      // for accessor
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
    * value accessor
    */
    value: {
      get: function() {
        return this._input.value;
      },
      set: function(v) {
        this._input.value = v;
      }
    },

    /*
    * placeholder accessor
    */
    placeholder: {
      get: function() {
        return this._input.getAttribute('placeholder');
      },
      set: function(v) {
        this._input.setAttribute('placeholder', v);
      }
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
    * onfocus accessor
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
    * onblur accessor
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
    * onreturn accessor
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
    * style getter
    */
    style: {
      get: function() {
        return this._input.style;
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