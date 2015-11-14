Speeches = new Mongo.Collection("speeches");

Template.Index.helpers({
  speech: function () {
    return Speeches.find({}).fetch();
  }
});
