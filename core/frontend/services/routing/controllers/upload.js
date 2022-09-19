const debug = require('@tryghost/debug')('services:routing:controllers:entry');
const url = require('url');
const config = require('../../../../shared/config');
const {routerManager} = require('../');
const urlUtils = require('../../../../shared/url-utils');
const dataService = require('../../data');
const renderer = require('../../rendering');

/**
 * @description Entry controller.
 * @returns {Promise}
 */
module.exports = function entryController() {
	console.log(1111111111111111);
};
