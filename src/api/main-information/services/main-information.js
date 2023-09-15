'use strict';

/**
 * main-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-information.main-information');
