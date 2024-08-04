// models/user.ts
import mongoose, { Document, Model, Schema } from 'mongoose';
import { unique } from 'next/dist/build/utils';

export interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  email:{type:String,required:true, unique:true},
  password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
