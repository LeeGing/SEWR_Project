import Ember from 'ember';

export default Ember.Route.extend({

   model: function(params) {
    return Ember.$.ajax({
      type: 'GET',
      url: 'http://localhost:3000/stores/' + params.id,
      success: function(data){
        return data;
      }, error: function(e) {
        console.log('banana errors', e.status);
      }
    });
  },


  setupController: function(controller, model) {
    controller.set('store', model)
  }

});


