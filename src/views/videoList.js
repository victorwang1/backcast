var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderList, this);
    return this;
  },
  renderList: function(entry){
    var videoListEntry = new VideoListEntryView({model: entry});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
