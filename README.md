# Naksh Jewels – Mini E-commerce Module

This project is a mini e-commerce application built as part of the **Naksh Jewels ReactJS & Node.js Internship Assessment**.  
It demonstrates frontend development with React, backend APIs with Node.js & Express, state management, and basic Docker usage.

---

## Tech Stack

### Frontend
- React (Vite)
- Context API for state management
- React Router
- Plain CSS (no UI libraries)

### Backend
- Node.js
- Express.js
- In-memory data storage

### DevOps
- Docker
- Docker Compose

---

## Features

- Landing page with brand introduction
- Product listing with categories (Gold, Silver, Diamond)
- Editorial-style product grid
- Add to cart functionality
- Cart page with:
  - Quantity increment/decrement
  - Product images
  - Subtotals and total price
- Checkout flow:
  - Cart is cleared on checkout
  - Success page shown
  - Automatic redirect to home page
- Responsive design
- Fully Dockerized frontend and backend

---

## API Endpoints

### Get Products
GET /products
Returns a list of products stored in memory.

### Add to Cart
POST /cart
Validates request payload and returns success response

---

## Project Structure

naksh/
├── backend/
│ ├── src/
│ ├── Dockerfile
│ └── package.json
├── frontend/
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── package.json
├── docker-compose.yml
└── README.md

--- 

## Running the Project with Docker

### Prerequisites
- Docker
- Docker Compose
  
### Steps

From the project root, run:

```bash
docker-compose up --build
```

Access the Application
- Frontend:
  http://localhost:5173
- Backend API:
  http://localhost:5000/products

### Notes

- Product data is stored in memory (no database).
- Product and cart images are served as static assets from the frontend.
- Checkout flow is simulated (no payment gateway integration).
- Docker configuration is included as required by the assignment.
