import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url1 = 'http://congress.api.sunlightfoundation.com/legislators/locate';
        url1 += '?' + Ember.$.param ({
          'apikey': key,
          'zip': params.zip
        });
    return Ember.$.getJSON(url1).then(function(responseJSON) {
        return responseJSON.results;
    });
  }
});
