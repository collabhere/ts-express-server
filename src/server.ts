import * as dotenv from 'dotenv';

import db from './mongoose';
import webserver from './express';

(async function main() {
	dotenv.config({ path: __dirname + '/../.env' });
	await db(process.env.DB_URI);
	await webserver(process.env.PORT);
})();
