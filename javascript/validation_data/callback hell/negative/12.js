async function runExample2() {
    try {
      const data = await fetchData();
      const processed = await processData(data);
      const validated = await validateData(processed);
      const saved = await saveData(validated);
      await notifyUser(saved);
      console.log("All done!");
    } catch (err) {
      console.error(err);
    }
  }