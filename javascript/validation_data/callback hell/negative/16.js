async function runExample6() {
    try {
      const data = await readFile('input.txt', 'utf-8');
      const records = await parseCSV(data);
      const transformed = await transformData(records);
      await writeFile('output.json', JSON.stringify(transformed));
      const response = await uploadFile('output.json');
      await notifyServer(response);
      console.log("Data pipeline complete!");
    } catch (err) {
      console.error(err);
    }
  }