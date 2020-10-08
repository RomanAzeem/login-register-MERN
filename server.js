const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./backend/middleware/error');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./backend/config/db');

//Load env variables
dotenv.config({ path: './backend/config/config.env' });

// Connect to database
connectDB();

///Load routes from routes directory
const users = require('./backend/routes/users');

const app = express();

//Body Parser
app.use(express.json());

//// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//add errorHandler middleware;
app.use(errorHandler);

//Mount Routes
app.use('/api/users', users);

//Not Found Error Handler
app.use((req, res, next) => {
  return next(
    res.status(404).json({
      success: false,
      message: 'Not Found',
    })
  );
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server is runnig on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
