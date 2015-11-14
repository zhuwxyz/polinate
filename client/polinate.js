Speeches = new Mongo.Collection("speeches");

Template.Index.helpers({
  link: function () {
    console.log(this);
    return "/speech/" + this._id;
  },

  speech: function () {
    return Speeches.find({}).fetch();
  }
});
