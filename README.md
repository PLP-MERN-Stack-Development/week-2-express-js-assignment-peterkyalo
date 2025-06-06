# 🚂 Express.js RESTful API Documentation

## 🚀 Project Overview
This project is a RESTful API built using Express.js, designed to manage a collection of products. It implements standard CRUD operations, proper routing, middleware for logging, authentication, error handling, and advanced features like filtering, pagination, search, and statistics.

## 📂 Project Structure
```
express-restful-api
├── src
│   ├── server.js               # Entry point of the application
│   ├── routes
│   │   └── products.js         # Routes for product-related operations
│   ├── middleware
│   │   ├── auth.js             # Authentication middleware
│   │   ├── errorHandler.js     # Global error handling middleware
│   │   ├── logger.js           # Custom logger middleware
│   │   └── validateProduct.js  # Middleware for validating product data
│   ├── controllers
│   │   └── productsController.js # Controller for handling product requests
│   ├── models
│   │   └── product.js           # Product model definition
│   └── utils
│       └── customErrors.js      # Custom error classes
├── .env.example                 # Example environment variables
├── package.json                 # NPM configuration file
├── README.md                    # Project documentation
└── Week2-Assignment.md          # Assignment criteria and tasks
```

## 🛠️ Setup Instructions
1. Ensure you have Node.js installed (v18 or higher recommended).
2. Clone the repository to your local machine.
3. Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on the `.env.example` file to set up your environment variables.
5. Start the server:
   ```bash
   node src/server.js
   ```

## 📡 API Endpoints
### Products
- **GET /api/products**: Retrieve a list of all products. Supports filtering, search, and pagination via query parameters:
  - `category` (filter by category)
  - `search` (search by name)
  - `page` (page number)
  - `limit` (items per page)
- **GET /api/products/:id**: Retrieve a specific product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product.
- **DELETE /api/products/:id**: Delete a product.
- **GET /api/products/stats**: Get product statistics (count by category).

All `/api/products` endpoints require an API key in the request header:
- Header: `x-api-key: <your_api_key_here>`

## 📜 Example Requests and Responses

### Get All Products (with filters, search, pagination)
**Request:**
```
GET /api/products?category=electronics&search=laptop&page=1&limit=2
Headers:
  x-api-key: secret_api_key_here
```
**Response:**
```json
{
  "total": 1,
  "page": 1,
  "limit": 2,
  "data": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

### Get Product by ID
**Request:**
```
GET /api/products/1
Headers:
  x-api-key: secret_api_key_here
```
**Response:**
```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

### Create a New Product
**Request:**
```
POST /api/products
Headers:
  Content-Type: application/json
  x-api-key: secret_api_key_here
Body:
{
  "name": "Tablet",
  "description": "A new tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```
**Response:**
```json
{
  "id": "generated-uuid",
  "name": "Tablet",
  "description": "A new tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```

### Update a Product
**Request:**
```
PUT /api/products/1
Headers:
  Content-Type: application/json
  x-api-key: secret_api_key_here
Body:
{
  "price": 350
}
```
**Response:**
```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 350,
  "category": "electronics",
  "inStock": true
}
```

### Delete a Product
**Request:**
```
DELETE /api/products/1
Headers:
  x-api-key: secret_api_key_here
```
**Response:**
- Status: 204 No Content

### Get Product Statistics
**Request:**
```
GET /api/products/stats
Headers:
  x-api-key: secret_api_key_here
```
**Response:**
```json
{
  "electronics": 2,
  "kitchen": 1
}
```

## ✅ Error Handling
The API includes global error handling middleware that captures errors and sends appropriate responses with status codes. Custom error classes are defined for specific error types.

## 📄 .env.example
```
API_KEY=your_api_key_here
PORT=3000
```

## 📄 License
This project is licensed under the MIT License.