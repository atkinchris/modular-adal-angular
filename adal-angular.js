// Expose the AuthenticationContext import on the window object.
// This makes it available for iframes calling window.parent.AuthenticationContext.
window.AuthenticationContext = require('adal-angular');

require('adal-angular/lib/adal-angular');

// Export the Angular module name, as hardcoded in the adal-angular package.
module.exports = 'AdalAngular';
