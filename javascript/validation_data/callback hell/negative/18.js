async function runExample8() {
    try {
      await db.connect();
      const users = await db.query("SELECT * FROM users");
      const orders = await db.query("SELECT * FROM orders");
      const products = await db.query("SELECT * FROM products");
      const matched = await matchOrdersToUsers(users, orders);
      const enriched = await enrichWithProducts(matched, products);
      console.log("All data combined:", enriched);
    } catch (err) {
      console.error(err);
    }
  }