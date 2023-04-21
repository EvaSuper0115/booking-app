import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    //title of hotel
    title: { type: String, required: true },
    //price of hotel
    price: { type: Number, required: true },
    //description of hotel
    description: { type: String, required: true },
    //max no. of guests
    maxGuest: { type: Number, required: true },
    //no. of rooms
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
