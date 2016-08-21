'use strict';

/**
 * Twitcher related functionality
 */
var twitcher = {
  // Users to be shown in userlist
  users: ['freecodecamp', 'pokemon', 'playhearthstone', 'scglive', 'vainglory',
          'beyondthesummit', 'geekygoonsquad', 'tru3ta1ent', 'orzanel',
          'widgitybear', 'rendhammertv', 'ninja', 'lirik', 'cohhcarnage',
          'firedragon764', 'atk', 'teamsp00ky', 'eddieruckus',
          'themexicanrunner', 'utorak007', 'aydren', 'relicentertainment',
          'kakeninja', 'tangentgaming', 'ign', 'elajjaz', 'ESL_SC2',
          'OgamingSC2', 'cretetion', 'comster404', 'storbeck', 'habathcx',
          'RobotCaleb', 'noobs2ninjas', 'brunofin'],

  contactFormUrl: 'http://example.com/',

  /**
   * Set loading indicator
   */
  setLoading: function(el) {
    el.innerHTML = '<div class="loading">Loading...</div>';
  },

  /**
   * Get the specified users information and populates 'el'
   */
  populateUserList: function (el, users) {

    this.setLoading(el);

    var userRequests = [];

    users.forEach(function(user) {
      userRequests.push(twitchTV.user(user));
    });

    Promise.all(userRequests).then(function(users) {
      var htmlString = users.map(function(user) {
        return '<div id="user-' + user.name + '"><h3>' +
               user.display_name + '</h3><p>' + user.bio +
               '</p>' + '<div class="streaming"></div></div>';
      }).join('');

      el.innerHTML = htmlString;
    });
  },


  /**
   * Get the featured streams and populate 'el'
   */
  populateFeaturedStreamsList: function(el) {
    this.setLoading(el);

    twitchTV.featuredStreams().then(function(data) {

      var htmlString = '';
      data.featured.forEach(function(featured) {

        htmlString += '<div id="stream-' + featured.stream._id + '">' +
                      '<h3>' + featured.title + '</h3>' +
                      '<p>' + featured.text + '</p>' +
                      '</div>';
      });

      el.innerHTML = htmlString;

    }).catch(function(err) {
        el.innerHTML = '<p>There was an error retrieving streams.</p>';
        console.error(users[i] + ' - ' + data.status + ' ' + data.error +
                      ':' + data.message);

    });
  },


  /**
   * Populate 'el' with contact form
   */
  populateContactForm: function(el, posted) {
    posted = posted || false;

    if (posted) {
      el.innerHTML = '<div id="contact-form"><p>Your message has been sent</p></div>';
    }

    var htmlString = '<div id="contact-form">' +
                     '<form method="post" action="' + this.contactFormUrl +
                     '" class="form"><div class="form-group">' +
                     '<label for="contact-form-name">Name</label>' +
                     '<input type="text" name="contact-form-name">' +
                     '</div><div class="form-group">' +
                     '<label for="contact-form-message">Message</label>' +
                     '<textarea name="contact-form-message"></textarea>' +
                     '</div></form>';

    el.innerHTML = htmlString;
  }



}
