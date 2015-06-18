'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'shareId',
  
  urlRoot: '/api/res'
});