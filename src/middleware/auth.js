// src/middleware/auth.js

const API_KEY = process.env.API_KEY; // Ensure you have an API_KEY in your .env file

const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API key' });
  }

  next();
};

module.exports = authMiddleware;