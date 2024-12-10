function calculateCartTotal(cartItems, callback) {
    getProductDetails(cartItems[0].productId, (err, product1) => {
      if (err) return callback(err);
      
      calculateDiscount(product1.price, cartItems[0].quantity, (err, discount1) => {
        if (err) return callback(err);
        
        calculateTax(product1.price, (err, tax1) => {
          if (err) return callback(err);
          
          getProductDetails(cartItems[1].productId, (err, product2) => {
            if (err) return callback(err);
            
            calculateDiscount(product2.price, cartItems[1].quantity, (err, discount2) => {
              if (err) return callback(err);
              
              calculateTax(product2.price, (err, tax2) => {
                if (err) return callback(err);
                const totalPrice = (product1.price + tax1 - discount1) + (product2.price + tax2 - discount2);
                callback(null, totalPrice);
              });
            });
          });
        });
      });
    });
  }