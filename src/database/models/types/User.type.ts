import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
	email: string;
	password: string;
}
