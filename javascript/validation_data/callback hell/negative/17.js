function runExample7() {
    // Assuming each function returns a promise
    delay(500)
      .then(() => fetchConfig())
      .then(config => delay(500).then(() => connectToService(config.serviceURL)))
      .then(connection => delay(500).then(() => requestData(connection)))
      .then(data => delay(500).then(() => processData(data)))
      .then(processed => {
        console.log("Processed data:", processed);
      })
      .catch(err => console.error(err));
  }