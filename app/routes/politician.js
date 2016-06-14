import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url1 = 'http://congress.api.sunlightfoundation.com/legislators';
        url1 += '?' + Ember.$.param ({
          'apikey': key,
          'bioguide_id': params.id
        });
    var url2 = 'http://congress.api.sunlightfoundation.com/committees';
        url2 += '?' + Ember.$.param ({
          'apikey': key,
          'member_ids': params.id
        });
    return Ember.RSVP.hash({
      legislator: Ember.$.getJSON(url1).then(function(responseJSON) {
        return responseJSON.results;
      }),
      committees: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
