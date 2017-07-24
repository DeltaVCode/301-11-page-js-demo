// This is where we define the view for the "Contact" page
var views = views || {};

(function (module) {
  function init() {
    console.log('Contact');

    $('#content').text('Contact List');
    $('#contacts').show();
  }

  function contactByName(ctx) {
    $.getJSON('/scripts/models/contact.json',
      data => {
        var matches = data.filter(d => d.name &&
          d.name.toLowerCase() === ctx.params.name.toLowerCase());
        if (matches.length) {
          var contact = matches[0];
          $('#content').text(`Hello, ${contact.name}. Your id is ${contact.id}.`);
        } else {
          $('#content').text("Contact Not Found");
        }
      });
  }

  module.contact = init;
  module.contactByName = contactByName;
})(views);
