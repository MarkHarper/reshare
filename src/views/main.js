'use strict';

var MainContent = require('./shared/main-content');
var currentUser = require('../models/users/current-user');
var pageNav = require('../util/page-nav');

module.exports = new MainContent({ 
  model: {
    nav: pageNav,
    currentUser: currentUser
  } 
});
