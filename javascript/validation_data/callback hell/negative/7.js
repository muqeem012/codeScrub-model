async function calculateCartTotal(cartItems) {
    try {
      const product1 = await getProductDetails(cartItems[0].productId);
      const discount1 = await calculateDiscount(product1.price, cartItems[0].quantity);
      const tax1 = await calculateTax(product1.price);
  
      const product2 = await getProductDetails(cartItems[1].productId);
      const discount2 = await calculateDiscount(product2.price, cartItems[1].quantity);
      const tax2 = await calculateTax(product2.price);
  
      const totalPrice = (product1.price + tax1 - discount1) + (product2.price + tax2 - discount2);
      return totalPrice;
    } catch (error) {
      throw new Error(error.message);
    }
  }