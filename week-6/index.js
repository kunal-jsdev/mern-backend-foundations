import { connectDb } from "./db.js";
import { User } from "./models/User.js";
import { Product } from "./models/Product.js";

const run = async () => {
  connectDb();
  const user = new User({
    name: "  Kunal Shah  ",
    email: "kunal@gmail.com",
    age: 21,
    city: "Ahmedabad",
    role: "user",
  });
  user.save();

  console.log("Find all users ");
  console.log(await User.find());

  console.log("Find Ahmedabad users");
  const ahmedabadUsers = await User.find({ city: "Ahmedabad" }).select(
    "name email city",
  );
  console.log(ahmedabadUsers);

  const updated = await User.findOneAndUpdate(
    { email: "kunal@gmail.com" },
    { $set: { age: 22, city: "Surat" } },
    { returnDocument: "after", runValidators: true }, // new: returns updated doc, runValidators: applies schema rules
  );

  console.log("Updated:", updated);

  const product = new Product({
    name: "Wireless Earbuds",
    price: 1299,
    category: "Electronics",
    stock: 50,
    rating: 4.5,
  });
  await product.save();

  const sortedProducts = await Product.find({ price: { $gte: 500 } })
    .sort({ price: 1 })
    .select("name price category");

  console.log(
    `products with price greater than 500 sorted : ${sortedProducts}`,
  );

  const deleted = await User.findOneAndDelete({ email: "kunal@gmail.com" });
  console.log("Deleted:", deleted?.name);
};
run().catch((err) => {
  console.error("Unexpected error:", err.message);
  process.exit(1);
});
