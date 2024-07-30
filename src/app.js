const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
// //connect to mongoose
const DB_CONNECT=
"mongodb+srv://anshusingh0284087:cS0hgIskzVwHr5j2@cluster0.kdnquwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 mongoose
.connect( DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser:true })
.then(()=>console.log("Database Connected "))
.catch((err)=>console.error('Database connection error:',err));



// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


// Use routes
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/payments', paymentRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


