'use strict';

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var template = require('../template');
var handleError = require('../../util/handle-error');
var formToObj = require('form-to-obj');


module.exports = Backbone.View.extend({
  
  template: template('add-new/add-new'),

  className: 'add-new',
  
  events: {
    'submit .new-share-form': 'addShare'
  },

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
    
    this.model.fetch().done(this.render.bind(this)).fail(function () {
      alert('Failed to load add new!');
      console.error(arguments);
    });    
  },

  render: function () {
    console.log(this.model.toJSON());
    this.$el.html(this.template({ 
      shares: this.model.toJSON()
    }));
  },
  
  addShare: function (e) {
    e.preventDefault();

    var share = formToObj(e.target);
    
    this.model.create(share, handleError());
  }
});

