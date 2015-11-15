Speeches = new Mongo.Collection("speeches");

Template.Index.helpers({
  link: function () {
    return "/speech/" + this._id;
  },

  speech: function () {
    return Speeches.find({}).fetch();
  }
});
