import mongoose from "mongoose";
import { UserDocument } from './types/User.type';

const userSchema = new mongoose.Schema<UserDocument>(
	{
		email: { type: String, unique: true },
		password: String,
	},
	{ timestamps: true },
);

export const User = mongoose.model<UserDocument>("User", userSchema);