function validateOrderStatus(order) {
    if (order.status == 'pending') return 'Order is still pending';
    
    if (order.paymentStatus == 'failed') return 'Payment failed';
    
    if (order.deliveryDate == null) return 'Delivery date not available';
    
    return 'Order is being processed';
  }
  