function runExample1() {
    doAsyncTask1((err, result1) => {
      if (err) {
        console.error(err);
      } else {
        doAsyncTask2(result1, (err, result2) => {
          if (err) {
            console.error(err);
          } else {
            doAsyncTask3(result2, (err, result3) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Final result:", result3);
              }
            });
          }
        });
      }
    });
  }
  