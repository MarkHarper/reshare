'use strict';

var $ = require('jquery');
var router = require('../../util/router');
var main = require('../../views/main');
var SharesView = require('../../views/shares/shares');
var SharesCollection = require('../../models/shares/shares-collection');

router.route('', 'shares', function () {
  main.show(new SharesView({
    model: new SharesCollection()
  }));
});