import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('classroom.course.run')
  },
  setupController (controller, model) {
    controller.set('run', model)
  }
});
