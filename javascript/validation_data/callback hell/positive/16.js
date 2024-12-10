function runExample6() {
    readFile('input.txt', 'utf-8', (err, data) => {
      if (err) return console.error(err);
      parseCSV(data, (err, records) => {
        if (err) return console.error(err);
        transformData(records, (err, transformed) => {
          if (err) return console.error(err);
          writeFile('output.json', JSON.stringify(transformed), (err) => {
            if (err) return console.error(err);
            uploadFile('output.json', (err, response) => {
              if (err) return console.error(err);
              notifyServer(response, (err) => {
                if (err) return console.error(err);
                console.log("Data pipeline complete!");
              });
            });
          });
        });
      });
    });
  }