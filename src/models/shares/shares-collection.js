'use strict';

var Backbone = require('backbone');
var Share = require('./share');

module.exports = Backbone.Collection.extend({
  model: Share,

  url: '/api/res'
});