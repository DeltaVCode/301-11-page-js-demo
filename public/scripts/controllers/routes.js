'use strict';
// This is where we define the client-side routes
page('*', //views.middleware.activeHeaderLink);
  function (ctx, next) {
    var activeLink = $(`a[href='${ctx.path}']`);

    $('a.active').removeClass('active');
    activeLink.toggleClass('active');

    next();
  });

page('/', views.home);
page('/about', views.about);
page('/about-us', '/about');
page('/contact', views.contact);

page();
