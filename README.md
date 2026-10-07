# MERN Stack To-Do List

A full-stack To-Do List application developed using MongoDB, Express.js, React.js, and Node.js.

## Requirements

- Node.js
- npm
- MongoDB Atlas

## How to Run the Project

### Backend

Open a terminal and run:

    cd backend
    npm install

Create a `.env` file inside the `backend` folder:

    MONGO_URI=your_mongodb_connection_string
    PORT=5000

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

Start the backend:

    npm start

The backend will run at:

    http://localhost:5000

### Frontend

Open a new terminal and run:

    cd frontend
    npm install
    npm install axios

Start the frontend:

    npm run dev

The frontend will run at:

    http://localhost:5173

Open the frontend URL in a web browser to use the application.

## Features

- Add new tasks
- View all tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Store tasks in MongoDB
- Communicate between frontend and backend using REST APIs

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Axios
- HTML
- CSS
- JavaScript

## Note

MongoDB Compass is optional. The application connects directly to MongoDB Atlas using the connection string stored in the `.env` file.

Do not share the MongoDB password or `.env` file publicly.