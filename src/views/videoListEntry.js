var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.$el.on('click', '.video-list-entry-title', function() {
      this.model.select();
    }.bind(this));
  },

  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    var object = this.model.attributes;
    var $template = $(this.template(object));
    
    $template.find('.media-object').attr('src', object.snippet.thumbnails.default.url);
    $template.find('.video-list-entry-title').text(object.snippet.title);
    $template.find('.video-list-entry-detail').text(object.snippet.description);
    return $template;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
