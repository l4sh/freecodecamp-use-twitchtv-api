'use strict';

/**
 * Run on page load
 */
document.onreadystatechange = function(e) {

  var mainContentEl = document.getElementById('main-content');

  // Nav bar events
  var navUsersEl = document.getElementById('nav-users');
  var navFeaturedStreamsEl = document.getElementById('nav-featured-streams');
  var navContactEl = document.getElementById('nav-contact');

  navUsersEl.addEventListener('click', function(e) {
    twitcher.interrupt = true;
    e.preventDefault();
    twitcher.populateUserList(mainContentEl, twitcher.users);
  });

  navFeaturedStreamsEl.addEventListener('click', function(e) {
    twitcher.interrupt = true;
    e.preventDefault();
    twitcher.populateFeaturedStreamsList(mainContentEl, twitcher.users);
  });

  navContactEl.addEventListener('click', function(e) {
    twitcher.interrupt = true;
    e.preventDefault();
    twitcher.populateContactForm(mainContentEl);
  });

  // Populate user list on load
  twitcher.populateUserList(mainContentEl, twitcher.users);

}
