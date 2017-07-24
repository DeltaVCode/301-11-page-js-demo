// This is where we define the view for the "Contact" page
var views = views || {};

(function (module) {
  function init() {
    console.log('Contact');

    $('#content').text('Contact List');
    $('#contacts').show();
  }

  module.contact = init;
})(views);
