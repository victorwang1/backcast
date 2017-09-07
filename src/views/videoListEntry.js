var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.$el.on('click', '.video-list-entry-title', function() {
      this.model.select();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
