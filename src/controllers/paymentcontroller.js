const processPayment = (req, res) => {
    const { amount, currency, source, description, productId, userId } = req.body;
  
    // Simulate a payment process
    if (!amount || !currency || !source || !description || !productId || !userId) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
  
    // Mock successful payment response
    const paymentResponse = {
      success: true,
      paymentId: 'mock_payment_id',
      amount,
      currency,
      description,
      status: 'completed',
    };
  
    // Mock order creation
    const order = {
      orderId: 'mock_order_id',
      userId,
      products: [{ productId, quantity: 1 }],  // Assume quantity of 1 for simplicity
      total: amount,
      status: 'completed',
    };
  
    // Respond with mock payment and order details
    res.status(200).json({
      success: true,
      paymentResponse,
      order,
    });
  };
  
  module.exports = {
    processPayment,
  };
  