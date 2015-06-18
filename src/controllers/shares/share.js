'use strict';

var router = require('../../util/router');
var main = require('../../views/main');
var SharesView = require('../../views/shares/share');
var Share = require('../../models/shares/share');

router.route('share/:id', function (id) {
  main.show(new SharesView({
    model: new Share({ resId: id })
  }));
});