const pool = require('./lib/utils/pool');
const setup = require('./data/setup.js');

setup(pool)
    .catch((err) => console.error('Error in setup.js: ', err))
    .finally(() => process.exit());
