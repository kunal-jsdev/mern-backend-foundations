import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Footwear",
        "Accessories",
        "Home",
        "Stationery",
        "Clothing",
      ],
      required: [true, "Category is required"],
    },
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true },
);

productSchema.pre("save", async function () {
  console.log(
    `Pre save hook — saving product: ${this.name}, price: ₹${this.price}`,
  );
});

productSchema.post("save", function (doc) {
  console.log(`Post save hook — product saved: ${doc.name}`);
});

export const Product = mongoose.model("Product", productSchema);
