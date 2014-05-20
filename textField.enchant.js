enchant.TextField = enchant.Class.create(enchant.Group, {
  initialize: function(width, height) {
    enchant.Group.call(this);

    this.width = width;
    this.height = height;

    this.sprite = new enchant.Sprite(width, height);
    this.surface = new enchant.Surface(width, height);
    this.surface.context.fillStyle = "#fff";
    this.surface.context.fillRect(this.x, this.y, width, height);
    this.sprite.image = this.surface;
    this.addChild(this.sprite);

    // var label = enchant.Label();
    // label.text = 'hello!';
    // label.font = '80px Arial';

    // this.addChild(label);
  }
});