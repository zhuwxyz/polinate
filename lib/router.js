Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
  template: 'Index'
});

// TODO add data validation
Router.route('/add-annotation', {where: 'server'})
  .post(function() {
    body = this.request.body;
    console.log(this.request.body);
    Speeches.insert(this.request.body);
    this.response.end();
});

Router.route('/add-speech', {where: 'server'})
  .post(function() {
    body = this.request.body;
    console.log(this.request.body);
    Speeches.insert(this.request.body);
    this.response.end();
});
Router.route('/about/',{
  template: 'about'
});
Router.route('/16prescan/',{
  template: 'prescan'
});

Router.route('/speech/:_id', function () {
  this.render('Speech', {
    data: function () {
      return Speeches.findOne({_id: this.params._id});
    }
  });
});
Router.route('/candidate/:_id', function(){
  this.render('Candidate', {
    data:function(){
      return Speeches.find({author: this.params._id});
    }
  });
});

