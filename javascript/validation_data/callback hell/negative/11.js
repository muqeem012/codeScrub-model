function runExample1() {
    doAsyncTask1()
      .then(result1 => doAsyncTask2(result1))
      .then(result2 => doAsyncTask3(result2))
      .then(finalResult => {
        console.log("Final result:", finalResult);
      })
      .catch(err => {
        console.error(err);
      });
  }