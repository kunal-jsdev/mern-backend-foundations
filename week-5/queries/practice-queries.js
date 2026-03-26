//--> use backendFoundation
// switched to db backendFoundation

//--> db.createCollection("users")
// { ok: 1 }

//--> db.createCollection("products")
// { ok: 1 }

//--> db.users.insertOne({ name:'Kunal', email:'kunal@gmail.com', age:20, city:'Ahmedabad', createdAt:'' })
/*
{
  acknowledged: true,
  insertedId: ObjectId('69c4d52f420fe87251b5f899')
}
*/

//--> db.products.insertOne({ name:'Santoor Soap', price:150, category:'grocery', stock:'Santoor', createdAt: new Date() })
/*
{
  acknowledged: true,
  insertedId: ObjectId('69c4d5da420fe87251b5f89a')
}
*/

//--> db.users.insertMany([...7 users])
/*
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69c4d6df420fe87251b5f89b'),
    '1': ObjectId('69c4d6df420fe87251b5f89c'),
    '2': ObjectId('69c4d6df420fe87251b5f89d'),
    '3': ObjectId('69c4d6df420fe87251b5f89e'),
    '4': ObjectId('69c4d6df420fe87251b5f89f'),
    '5': ObjectId('69c4d6df420fe87251b5f8a0'),
    '6': ObjectId('69c4d6df420fe87251b5f8a1')
  }
}
*/

//--> db.products.insertMany([...10 products])
/*
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69c4d70a420fe87251b5f8a2'),
    '1': ObjectId('69c4d70a420fe87251b5f8a3'),
    '2': ObjectId('69c4d70a420fe87251b5f8a4'),
    '3': ObjectId('69c4d70a420fe87251b5f8a5'),
    '4': ObjectId('69c4d70a420fe87251b5f8a6'),
    '5': ObjectId('69c4d70a420fe87251b5f8a7'),
    '6': ObjectId('69c4d70a420fe87251b5f8a8'),
    '7': ObjectId('69c4d70a420fe87251b5f8a9'),
    '8': ObjectId('69c4d70a420fe87251b5f8aa'),
    '9': ObjectId('69c4d70a420fe87251b5f8ab')
  }
}
*/

//--> db.products.find({ price: { $gte: 500 } })
/*
[
  { name: 'Wireless Earbuds',    price: 1299, category: 'Electronics', stock: 50,  rating: 4.5 },
  { name: 'Mechanical Keyboard', price: 2999, category: 'Electronics', stock: 20,  rating: 4.7 },
  { name: 'Running Shoes',       price: 1999, category: 'Footwear',    stock: 0,   rating: 4.2 },
  { name: 'Backpack',            price: 799,  category: 'Accessories', stock: 35,  rating: 4.0 },
  { name: 'Desk Lamp',           price: 649,  category: 'Home',        stock: 15,  rating: 4.1 },
  { name: 'USB Hub',             price: 899,  category: 'Electronics', stock: 40,  rating: 4.3 },
  { name: 'Hoodie',              price: 1499, category: 'Clothing',    stock: 25,  rating: 4.6 }
]
*/

//--> db.users.find({ city: 'Ahmedabad' })
/*
[
  { name: 'Raj Mehta',   city: 'Ahmedabad', age: 21, role: 'user'  },
  { name: 'Arjun Patel', city: 'Ahmedabad', age: 19, role: 'admin' },
  { name: 'Karan Joshi', city: 'Ahmedabad', age: 26, role: 'user'  }
]
*/

//--> db.products.updateMany({ stock: 0 }, { $set: { stock: 10 } })   ← correct
/*
{
  acknowledged: true,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
*/

//--> db.products.deleteMany({ stock: { $lte: 10 } })
// { acknowledged: true, deletedCount: 3 }

//--> db.users.find({ city: { $in: ['Ahmedabad', 'Mumbai'] } })
/*
[
  { name: 'Raj Mehta',   city: 'Ahmedabad' },
  { name: 'Arjun Patel', city: 'Ahmedabad' },
  { name: 'Karan Joshi', city: 'Ahmedabad' },
  { name: 'Meera Nair',  city: 'Mumbai'    }
]
*/

//--> db.users.find({ email: { $exists: true } })   ← correct
/*
  Returns all 7 users since all have email field
  [ Raj Mehta, Priya Shah, Arjun Patel, Sneha Verma, Karan Joshi, Meera Nair, Dev Trivedi ]
*/
