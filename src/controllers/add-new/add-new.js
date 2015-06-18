'use strict';

var router = require('../../util/router');
var main = require('../../views/main');
var AddNew = require('../../views/add-new/add-new');
var AddNewCollection = require('../../models/shares/shares-collection');

router.route('add-new', function () {
  main.show(new AddNew({
    model: new AddNewCollection()
  }));
});