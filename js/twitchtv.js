'use strict';

/**
 * Twitch.tv API interaction
 */
var twitchTV = {
  apiUrl: 'https://api.twitch.tv/kraken/',

  /**
   * Get list of Streams
   */
  streams: function(username) {
    username = username || null;
    var url = this.apiUrl + 'streams' + (username ? '/' + username : '');
    return req.getJSON(url);
  },

  /**
   * Get featured streams
   */
  featuredStreams: function() {
    var url = this.apiUrl + 'streams/featured';
    return req.getJSON(url);
  },

  /**
   * Get top games depending on popularity
   */
  topGames: function() {
    var url = this.apiUrl + 'games/top'
    return req.getJSON(url);
  },

  /**
   * Get user information
   */
  user: function(username) {
    var url = this.apiUrl + 'users/' + username;
    return req.getJSON(url);
  }
}
