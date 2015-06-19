'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var template = require('../template');

module.exports = Backbone.View.extend({
  template: template('shares/shares'),

  className: 'share cards',

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    
    this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load share!');
      console.error(arguments);
    });
  },

  render: function () {
    this.$el.html(this.template({ 
      shares: _.chain(this.model.toJSON()).sortBy('shareId')
    }));
    console.log(this.model);
}

});