var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    if (this.collection) this.collection.on('select', this.render, this);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    //this.$el.html(this.template());
    var object = this.collection.models[0].attributes;
    var $template = $(this.template(object));
    //$template.find('.embed-responsive-item').attr('src', object.snippet.thumbnails.high.url);
    $template.find('.video-player-details h3').text(object.snippet.title);
    $template.find('.video-player-details div').text(object.snippet.description);
    this.$el.empty();
    this.$el.append($template);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
