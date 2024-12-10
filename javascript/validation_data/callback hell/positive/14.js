function runExample4() {
    getItems((err, items) => {
      if (err) return console.error(err);
      processItem(items[0], (err, res1) => {
        if (err) return console.error(err);
        processItem(items[1], (err, res2) => {
          if (err) return console.error(err);
          processItem(items[2], (err, res3) => {
            if (err) return console.error(err);
            finalize([res1, res2, res3], (err, finalRes) => {
              if (err) return console.error(err);
              console.log("All items processed:", finalRes);
            });
          });
        });
      });
    });
  }