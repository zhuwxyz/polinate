Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
  template: 'Index'
});

Router.route('/add', {where: 'server'})
  .post(function() {
    body = this.request.body;
    console.log(this.request.body);
    Speeches.insert(this.request.body);
    this.response.end('post_request');
});
Router.route('/about/',{
  template: 'about'
});
Router.route('/speech/:_id', function () {
  this.render('Speech', {
    data: function () {
      return Speeches.findOne({_id: this.params._id});
    }
  });
});
