function runExample2() {
    fetchData((err, data) => {
      if (err) return console.error(err);
      processData(data, (err, processed) => {
        if (err) return console.error(err);
        validateData(processed, (err, validated) => {
          if (err) return console.error(err);
          saveData(validated, (err, saved) => {
            if (err) return console.error(err);
            notifyUser(saved, (err) => {
              if (err) console.error(err);
              else console.log("All done!");
            });
          });
        });
      });
    });
  }