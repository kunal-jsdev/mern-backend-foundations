import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    age: {
      type: Number,
      min: [18, "Age must be at least 18"],
    },
    city: {
      type: String,
      default: "Unknown",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
userSchema.pre("save", async function () {
  console.log(`Pre save Hook : about to save user: ${this.name} `);
  this.name = this.name.trim();
});

userSchema.post("save", function (doc) {
  console.log(`Post save hook — user saved successfully: ${doc.email}`);
});

userSchema.pre("findOneAndDelete", async function () {
  console.log(`Pre delete hook — deleting user with filter:`, this.getFilter());
});

export const User = mongoose.model("User", userSchema);
