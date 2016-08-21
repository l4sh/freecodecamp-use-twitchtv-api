'use strict';

/**
 * Promisify & simplify XHR
 */
var req = {
  /**
   * Create a new request
   */
  new: function(method, url, data) {
    data = data || null;

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open(method, url, true);

      xhr.onload = function() {
        if (this.status >= 200 && this.status < 400 ) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = function() {
        console.error(xhr.status + ' - ' + xhr.statusText);
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.send(data);
    });
  },

  /**
   * Get & parse JSON data from API and run callback
   */
  getJSON: function (url, callback) {
    return this.new('GET', url).then(function(data) {
      return JSON.parse(data);
    });
  },

  /**
   *
   */
}
