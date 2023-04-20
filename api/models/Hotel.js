import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  //name of hotel
  name: { type: String, required: true },
  //type of hotel e.g. cabin, apartment etc.
  type: { type: String, required: true },
  //city of the hotel
  city: { type: String, required: true },
  //address of the hotel
  address: { type: String, required: true },
  //distance from city centre
  distance: { type: String, required: true },
  //an array of photos of the hotel
  photos: { type: [String] },
  //title of the hotel
  title: { type: String, required: true },
  //description of hotel
  description: { type: String, required: true },
  //ratings of the hotel
  rating: { type: Number, min: 0, max: 5 },
  //rooms
  rooms: { type: [String] },
  //cheapest price
  cheapestPrice: { type: Number, required: true },
  //featured
  featured: { type: Boolean, default: false },
});

export default mongoose.model("Hotel", HotelSchema);
