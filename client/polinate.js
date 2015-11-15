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
    return "/" + this.Party;
  },
  description: function(){
    return this.description;
  },
});
Template.prescan.events({
  'click .card': function(){
     window.location = "/candidate/"+this.name;
  }
});
Template.Add.events({
  'submit form': function(){
     event.preventDefault();
     var Name = event.target.author.value;
     var title = event.target.title.value;
     var text = event.target.text.value
     Speeches.insert({
       "author": Name,
       "title": title,
       "text": text
     });
  }
});
