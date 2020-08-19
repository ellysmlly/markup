$(function() {
  // Open the mobile toggle, All pages
  $('body').on('click', '#im-image-toggle', function(e) {
    e.preventDefault();
    $(".im-image-container").toggleClass("im-image-container--switch");
  });
});
