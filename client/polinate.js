Speeches = new Mongo.Collection("speeches");
Prescan  = new Mongo.Collection("prescan");
Template.Index.helpers({
  link: function () {
    return "/speech/" + this._id;
  },

  speech: function () {
    return Speeches.find({}).fetch();
  }
});
Template.prescan.helpers({
  prescan: function() {
    return Prescan.find({}).fetch();
  },
  pic: function() {
    return "/" + this.picname;
  },
  Name: function() {
    return this.name;
  },
  Party: function() {
    return this.Party
  },
  Partypic: function(){
    return "/" + this._Party;
  }
});
