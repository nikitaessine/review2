const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

require('./auth-commands');
require('./ui-commands');
