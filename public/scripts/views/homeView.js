// This is where we define the view for the "Home" page, in other words, the default view
var views = views || {};

(function (module) {
  function init() {
    console.log('Home');

    $('#content').text('Welcome Home!');
    $('#contacts').hide();
  }

  module.home = init;
})(views);
