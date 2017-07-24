// This is where we define the view for the "About" page
var views = views || {};

(function (module) {
  function init() {
    console.log('About');

    $('#content').text('All About Page.js');
    $('#contacts').hide();
  }

  module.about = init;
})(views);
