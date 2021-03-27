import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const webserver = async (PORT: number) => {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(expressSession({
		secret: 'secret',
		resave: false,
		saveUninitialized: false
	}));
	app.use(cookieParser());
	app.use(helmet());

	app.get('/', (req, res) => {
		res.send('Hello world!');
	});

	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`);
	});
}

export default webserver;