const app = require('./lib/app');
const pool = require('./lib/utils/pool');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
});

process.on('exit', () => {
    // eslint-disable-next-line no-console
    console.log('Closing db connection pool');
    pool.end();
});
