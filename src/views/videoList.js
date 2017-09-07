var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    var slots = $('.video-list').children();
    this.collection.forEach(function(entry, index) {
      $(slots[index]).html('').append(this.renderList(entry));
      this.renderList(entry);
    }, this);
    return this;
  },

  renderList: function(entry) {
    var videoListEntry = new VideoListEntryView({model: entry});
    return videoListEntry.render();
  },

  template: templateURL('src/templates/videoList.html')

});
