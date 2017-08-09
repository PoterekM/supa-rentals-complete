import Ember from 'ember';

export default Ember.RSVP.hash({
  model() {
     rentals: this.store.findAll('rental'),
     reviews: this.store.findAll('review')
   },
   actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
