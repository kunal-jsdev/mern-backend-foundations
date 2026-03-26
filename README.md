# 🚀 Node.js + MongoDB REST API — Learning Journey (Week 5–8)

A hands-on backend learning project built while following a structured 3-month Node.js + MongoDB roadmap. This repo covers MongoDB fundamentals, Mongoose ODM, RESTful API design, authentication with JWT, and advanced API concepts like validation, pagination, and role-based authorization.

---

## 📚 What's Covered

### Week 5 — MongoDB Basics
- NoSQL vs SQL concepts
- MongoDB setup (Local + Atlas)
- Databases, Collections & Documents
- CRUD operations via MongoDB shell

### Week 6 — Mongoose ODM
- Connecting Express with MongoDB via Mongoose
- Schemas, Models & Data Types
- CRUD with Mongoose methods
- Query operators, validation & middleware (pre/post hooks)

### Week 7 — REST API with Express + MongoDB
- MVC folder structure (routes / controllers / models)
- Full CRUD API for Users
- Error handling middleware
- HTTP status codes & JSON responses
- API testing with Thunder Client / Postman

### Week 8 — Advanced API Concepts
- JWT Authentication & bcrypt password hashing
- Role-based Authorization (Admin / User)
- Request validation using Joi / express-validator
- Pagination & filtering on MongoDB queries
- Mini Project: Product API with Login System

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcrypt | Password hashing |
| Joi | Request validation |
| Postman / Thunder Client | API testing |

---

## 📁 Folder Structure

```
node-mongo-rest-api/
├── week-5-mongodb-basics/
├── week-6-mongoose/
├── week-7-rest-api/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── app.js
├── week-8-advanced-api/
│   ├── middleware/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── app.js
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Installation

```bash
# Clone the repo
git clone https://github.com/kunal-jsdev/mern-backend-foundations.git
cd node-mongo-rest-api

# Navigate to a week folder
cd week-7-rest-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT_SECRET

# Start the server
npm run dev
```

---

## 🔐 Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 📬 API Endpoints (Week 7–8 Reference)

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Users
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all users (Admin) |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products (with pagination) |
| POST | `/api/products` | Create product (Auth required) |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product (Admin only) |

---

## 🧠 Learning Roadmap Progress

- [x] Week 5 — MongoDB Basics
- [x] Week 6 — Mongoose ODM
- [x] Week 7 — REST API Design
- [x] Week 8 — Auth + Advanced Concepts


---

## 🙋‍♂️ Author

**Kunal Fauzdar**  
[GitHub](https://github.com/kunal-jsdev/) 

---

> Built as part of a personal 3-month Node.js + MongoDB backend development roadmap.
