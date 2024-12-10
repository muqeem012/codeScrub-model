function validatePayment(payment) {
    if (payment.amount == 0) return 'Payment amount cannot be zero';
    
    if (payment.method == 'credit_card') {
      if (payment.cardNumber.length == 16) {
        return 'Valid card';
      }
    }
    return 'Invalid payment method';
  }
  