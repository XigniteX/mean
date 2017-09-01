const express = require('express');
const PropertiesReader = require('properties-reader');
const request = require('request');

const router = express.Router();
var properties = PropertiesReader('config.properties');

const baseURL = properties.get('main.wcs.baseURL');
const apiKey = properties.get('main.wcs.APIKey');

router.get('/search/:searchTerm', function(req, res) {

  request.get({
    uri: baseURL + 'search/resources/productview/bySearchTerm/*',
    headers: {
      'apiKey': apiKey
    },
    qs: {
      profileName: 'Blokker_SearchBasicProduct',
      searchTerm: req.params.searchTerm
    }

  }).pipe(res);
})



module.exports = router;
