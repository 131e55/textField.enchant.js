enchant.TextField = enchant.Class.create(enchant.Group, {
  initialize: function() {
    enchant.Group.call(this);

    var label = enchant.Label();
    label.text = 'hello!';
    label.font = '80px Arial';

    this.addChild(label);
  }
});