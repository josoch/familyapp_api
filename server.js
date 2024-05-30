// server.js

// Import the json-server module
const jsonServer = require('json-server');

// Create a new json-server instance
const server = jsonServer.create();

// Set up the router to use the api.json file
const router = jsonServer.router('api.json');

// Use default middlewares (logger, static, cors, and no-cache)
const middlewares = jsonServer.defaults();

// Define the port to run the server on (default to 3000 if not specified in environment variables)
const port = process.env.PORT || 3000;

// Use the middlewares for all routes
server.use(middlewares);

// Use the router to handle requests
server.use(router);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
