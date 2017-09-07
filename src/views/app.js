var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      el: this.$el.find('.player'),
      collection: this.collection
    }).render();
    new VideoListView({
      el: this.$el.find('.list'),
      collection: this.collection
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
