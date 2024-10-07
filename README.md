STK Push Web Application

This is a full-stack web application that implements an STK Push mechanism. The application is divided into two main parts: the client-side and the server-side.
Table of Contents

    Getting Started
        Prerequisites
        Installation
    Running the Application
        Client Side
        Server Side
    Technologies Used

Getting Started

To get a copy of the project up and running locally, follow these steps.
Prerequisites

Ensure you have the following installed:

    Node.js (v18.x.x or later)
    NPM or Yarn
    Vite for front-end development
    Nodemon for back-end development

Installation

    1. Clone the repository:

        git clone git@github.com:odhiambow2354/STK_PUSH.git

        cd STK-PUSH

    2. Install dependencies for both client and server:

Client:

    cd client
    npm install

Server:

    cd ../server
    npm install

Running the Application

Client Side

The client side is a React application using Vite. To start the client side for development:

    Navigate to the client directory:

    bash

cd client

Run the following command:

bash

    npm run dev

    This will start the client on a local development server, usually at http://localhost:5173. Open this URL in your browser to view the application.

Server Side

The server side is an Express.js application that handles the backend logic for the STK Push. To start the server:

    Navigate to the server directory:

    bash

cd ../server

Run the following command:

bash

    npm start

    The server will run using Nodemon, which automatically restarts the server when file changes are detected. The server will typically be accessible on http://localhost:4000.

Technologies Used

    Client:
        React.js
        Vite
        Axios (for making HTTP requests)
        React Toastify (for notifications)

    Server:
        Node.js
        Express.js (for handling server-side routes)
        Axios (for making HTTP requests)
        CORS (to handle cross-origin requests)
        Nodemon (for automatic server restarts)

License

This project is licensed under the ISC License.
