const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const activityRoutes = require('./routes/activityRoutes')

connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tracking',activityRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`));
