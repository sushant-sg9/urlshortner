URL Shortener API
Overview
A robust URL shortening service with tracking and rate limiting.
Features

Shorten long URLs
Redirect short URLs to original links
Track URL usage statistics
Rate limiting

Prerequisites

Node.js (v16+)
MongoDB Atlas account

Installation

Clone the repository
Install dependencies

bashCopynpm install

Create .env file with:

CopyPORT=3000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000/api
API Endpoints
Shorten URL

POST /api/shorten
Request Body: { "originalUrl": "https://example.com" }
Response:

jsonCopy{
  "shortUrl": "http://localhost:3000/api/abcd1234",
  "shortId": "abcd1234"
}
Redirect URL

GET /:shortId
Redirects to original URL

URL Statistics

GET /api/stats/:shortId
Response:

jsonCopy{
  "originalUrl": "https://example.com",
  "clicks": 42,
  "lastAccessed": "2024-11-26T12:34:56Z"
}
Running the Application

Development: npm run dev
Production: npm start

Deployment
Deployed on Railway: URL Shortener API
Rate Limiting

100 requests per 15 minutes per IP

Technologies

Express.js
MongoDB
Mongoose
Nanoid