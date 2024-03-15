const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mainRouter = require('./routes/main');
const cors = require('cors');

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: '*', 
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use('/', mainRouter);

// Set the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
