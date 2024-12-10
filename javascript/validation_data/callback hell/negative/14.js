async function runExample4() {
    try {
      const items = await getItems();
      const res1 = await processItem(items[0]);
      const res2 = await processItem(items[1]);
      const res3 = await processItem(items[2]);
      const finalRes = await finalize([res1, res2, res3]);
      console.log("All items processed:", finalRes);
    } catch (err) {
      console.error(err);
    }
  }