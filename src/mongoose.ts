import mongoose from 'mongoose';

const dbOptions = {
	useNewUrlParser: true
}

export default async (URL: string) =>
	mongoose.connect(URL, dbOptions)
		.then(client => {
			console.log("Mongoose default connection is open!");
		})
		.catch(err => {
			console.log("Mongoose default connection has errored: " + err);
		});
