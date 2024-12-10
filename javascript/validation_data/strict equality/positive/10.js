function checkProductAvailability(product) {
    if (product.stock == 0) return 'Out of stock';
    
    if (product.category == 'electronics') {
      if (product.discount == '10%') {
        return 'Eligible for 10% discount';
      }
    }
    return 'Product available';
  }
  