var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      el: this.$el,
      collection: this.collection
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
