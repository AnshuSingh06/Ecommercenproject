// const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cors = require('cors');


// const User = require("./routes/UserRoute");

// const app = express();
// const port = 7000;

// //middleware for crosssite origin
// app.use(cors());

// //configuring dotenv
// dotenv.config();

// // //using fileupload to upload file giving size so it can take large file
// // // app.use(
// // //   fileUpload({
// // //       limits: {
// // //           fileSize: 2000000,
// // //       },
// // //       abortOnLimit: true,
// // //   })
// // // );

// // //connect to mongoose
// const DB_CONNECT=
// "mongodb+srv://AnshuSinghGwl:KIavo0c9t3e9sE5G@cluster0.ahfqcm1.mongodb.net/MajorProject?retryWrites=true&w=majority";
//  mongoose
// .connect( DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser:true })
// .then(()=>console.log("Database Connected "))
// .catch((err)=>console.error('Database connection error:',err));

// //middleware so it can read json files
// app.use(express.json());s


// //Routes
// app.use('/api/user',User);

// // //litening for requests
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
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

// Use routes
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sessions', sessionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


