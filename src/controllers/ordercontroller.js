const Order = require('../models/ordermodel');
const Cart = require('../models/cartmodel');

const placeOrder = async (req, res) => {
  try {
    const { userId } = req.user; // Assumes req.user contains the user data after token verification
    const cart = await Cart.findOne({ userId }).populate('products.productId');

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const orderProducts = cart.products.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity,
    }));

    const total = cart.products.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

    const order = new Order({
      userId,
      products: orderProducts,
      total,
    });

    await order.save();
    await Cart.findOneAndDelete({ userId }); // Clear the cart after placing the order

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const { userId } = req.user; // Assumes req.user contains the user data after token verification
    const orders = await Order.find({ userId }).populate('products.productId');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};
