import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    //name of user
    username: { type: String, required: true, unique: true },
    //email of user
    email: { type: String, required: true, unique: true },
    //password of user
    password: { type: String, required: true, unique: true },
    //Admin?
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
