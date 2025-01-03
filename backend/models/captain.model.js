const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First Name must be 3 Long"],
      maxlength: [20, "First Name must be 20 Long"],
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First Name must be 3 Long"],
      maxlength: [20, "First Name must be 20 Long"],
    },

  },
  email : {
    type: String,
    required: true,
    unique: true,
  },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be 6 Long"],
    },
    socketId: {
        type: String,
    },
    status : {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle : {
        color : {
            type: String,
            required: true,
            minlength: [3, "Color must be 3 Long"],
        },
        plate : {
            type: String,
            required: true,
            minlength: [3, "Plate must be 3 Long"],
        },
        capacity : {
            type: Number,
            required: true,
            min: [1, "Capacity must be 1 Long"],
        },
        vehicleType:{
            type: String,
            enum: ["car", "motorcycle"],
            default: "car",
        }
    },
    location : {
        lat:{
            type: Number,
        },
        lng:{
            type:Number
        }
    },
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

captainSchema.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);

}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain;