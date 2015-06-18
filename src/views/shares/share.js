'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var template = require('../template');

module.exports = Backbone.View.extend({
  template: template('shares/share'),

  className: 'share-page',

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    
    this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load this share!');
      console.error(arguments);
    });
  },

  render: function () {
    this.$el.html(this.template({ 
      share: this.model.toJSON()
    }));
    console.log(this.model);
  }
});