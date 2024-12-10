function runExample7() {
    setTimeout(() => {
      fetchConfig((err, config) => {
        if (err) return console.error(err);
        setTimeout(() => {
          connectToService(config.serviceURL, (err, connection) => {
            if (err) return console.error(err);
            setTimeout(() => {
              requestData(connection, (err, data) => {
                if (err) return console.error(err);
                setTimeout(() => {
                  processData(data, (err, processed) => {
                    if (err) return console.error(err);
                    console.log("Processed data:", processed);
                  });
                }, 500);
              });
            }, 500);
          });
        }, 500);
      });
    }, 500);
  }