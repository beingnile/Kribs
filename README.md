# Kribs

## Overview

Kribs is a house hunting application that allows users to search for properties, and property owners to list, update, and delete properties. This application is built using Node.js, Express, MongoDB, and Vue.js. It includes features such as role-based access control, input validation, error handling, image uploads, and token-based authentication with refresh tokens.

## Features

- User authentication (registration and login)
- Role-based access control (property owners and property searchers)
- Property management (create, read, update, delete properties)
- Image upload and handling
- Input validation
- Error handling
- Token-based authentication with refresh tokens
- Search and filter properties

## Prerequisites

- Node.js and npm
- MongoDB

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/beingnile/kribs.git
    cd kribs/kribs-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the backend directory and add the following variables:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/kribs
    JWT_SECRET=your_jwt_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    TOKEN_EXPIRY=1h
    REFRESH_TOKEN_EXPIRY=7d
    PORT=5000
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../kribs-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the frontend directory and add the following variables:
    ```plaintext
    VUE_APP_API_URL=http://localhost:5000/api
    ```

4. Start the frontend server:
    ```bash
    npm run serve
    ```

## Usage

- Open your browser and navigate to `http://localhost:8080`
- Register as a user
- Login to your account
- Property owners can create, update, and delete properties
- Property searchers can search and filter properties

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/token` - Refresh access token

### Properties

- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get a property by ID
- `POST /api/properties` - Create a new property (Property owners only)
- `PUT /api/properties/:id` - Update a property (Property owners only)
- `DELETE /api/properties/:id` - Delete a property (Property owners only)

### Users

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get a user by ID (Admin only)

## Folder Structure

```
kribs-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── propertyController.js
│   └── userController.js
├── middleware/
│   ├── auth.js
│   ├── error.js
│   └── upload.js
├── models/
│   ├── Property.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── properties.js
│   └── users.js
├── uploads/
├── .env
├── server.js
```

## Error Handling

The application includes error handling middleware that captures server errors and returns a standardized JSON response.

## Role-Based Access Control

- Property owners can create, update, and delete properties.
- Property searchers can only view properties.
- Admins can view all users.

## Image Handling

Images are uploaded to the `uploads` directory and served statically. The `multer` middleware is used for handling file uploads.

## Security

- Passwords are hashed using `bcryptjs`.
- JWT tokens are used for authentication.
- Refresh tokens are implemented to maintain user sessions without requiring frequent logins.
