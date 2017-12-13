var request = require('request');

cloverMerchants = [
  {
    id: '8T8VYFD236V4W',
    token: '37231e0b-b510-6a35-076d-7376cc13e791'
  }
];

module.exports.searchClover = function(query) {
  var searchResults = [];
  for (merchant in cloverMerchants) {
    var result = {};
    request.get(
      'https://apisandbox.dev.clover.com/v3/merchants/' + merchant.id + '?=access_token=' + merchant.token,
      (err, res, body) => {
        result.merchant = JSON.parse(body);
      }
    );
    request.get(
      'https://apisandbox.dev.clover.com/v3/merchants/' + merchant.id + '/items?=access_token=' + merchant.token,
      (err, res, body) => {
        result.items = JSON.parse(body);
      }
    );
    request.get(
      'https://apisandbox.dev.clover.com/v3/merchants/' + merchant.id + '/orders?=access_token=' + merchant.token,
      (err, res, body) => {
        result.orders = JSON.parse(body);
      }
    );
    searchResults.push(result);
  }
  return (searchResult);
}
