import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  manufactor: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  backCam: {
    type: String,
    required: true,
  },
  frontCam: {
    type: String,
    required: true,
  },
  display: {
    type: String,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  gpu: {
    type: String,
    required: true,
  },
  charger: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  simNumber: {
    type: Number,
    required: true,
  },
  roms: [],
  rams: [],
  warranty: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Warranty'
  },
  price: Number,
  images: [],
  createAt: {
    type: Date,
    required: true
  }
});

const Spec = mongoose.model("Spec", productSchema);

export default Spec;
