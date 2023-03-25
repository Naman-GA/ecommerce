This Node.js API provides CRUD (Create, Read, Update, Delete) functionality for managing products, as well as filtering functionality to search for specific products.

Prerequisites
Before starting the build process, make sure that you have the following installed on your machine:
•	Node.js (version 14 or higher)
•	npm (version 6 or higher)
•	MongoDB (version 4 or higher)
Dependencies
The following dependencies are required for this API:
•	express
•	mongoose
•	body-parser
•	cors
•	multer
•	path
Configuration
To configure the API, follow these steps:
•	Clone the repository from GitHub: [insert repository link]
•	Install the dependencies by running the following command:
npm install
•	Run the following command to start the API:
npm start
Build Steps
Here are the steps involved in building the API:
•	Create a new file called productModel.js in the models directory. Define the Product schema and export it as a Mongoose model.
•	Create a new file called productRoute.js in the routes directory. Define the CRUD.
•	Create a new file called filterRoute.js in the routes directory. Define the filtering routes for the Product model.
•	Create a new file called index.js in the root directory. Configure the Express app, connect to the MongoDB database, and register the products and filter routes.
•	Test the API using a tool like Postman or curl.

Troubleshooting
If you encounter any issues during the build process, try the following troubleshooting steps:
•	Make sure that all dependencies are installed correctly.
•	Make sure that the MongoDB connection string is correct and that the database is running.
•	Check the server logs for any error messages.
