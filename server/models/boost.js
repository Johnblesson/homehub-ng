import mongoose from "mongoose";

const boostSchema = new mongoose.Schema({
    phone: String,
    location: String,
    username: String,
    applyAid: String,
    address: String,
    address2: String,
    createdBy : String,
    comments : String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

const Boost = mongoose.model('boosts', boostSchema);

export default Boost;
