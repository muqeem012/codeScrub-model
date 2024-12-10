function runExample8() {
    db.connect((err) => {
      if (err) return console.error("Connection error:", err);
      db.query("SELECT * FROM users", (err, users) => {
        if (err) return console.error(err);
        db.query("SELECT * FROM orders", (err, orders) => {
          if (err) return console.error(err);
          db.query("SELECT * FROM products", (err, products) => {
            if (err) return console.error(err);
            matchOrdersToUsers(users, orders, (err, matched) => {
              if (err) return console.error(err);
              enrichWithProducts(matched, products, (err, enriched) => {
                if (err) return console.error(err);
                console.log("All data combined:", enriched);
              });
            });
          });
        });
      });
    });
  }