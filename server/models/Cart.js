const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      // type: mongoose.Schema.Types.ObjectId: Specifies that the userId will store an ObjectId, which is used in MongoDB to uniquely identify documents.

      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requried: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          requried: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports=mongoose.model('Cart',CartSchema)