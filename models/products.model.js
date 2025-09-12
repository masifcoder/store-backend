const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: 500, // Adjust length if needed
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
