function runExample5() {
    getToken((err, token) => {
      if (err) return console.error(err);
      getUserData(token, (err, userData) => {
        if (err) return console.error(err);
        getUserPosts(userData.id, (err, posts) => {
          if (err) return console.error(err);
          getPostComments(posts[0].id, (err, comments) => {
            if (err) return console.error(err);
            filterSpamComments(comments, (err, filtered) => {
              if (err) return console.error(err);
              saveCommentsToDB(filtered, (err) => {
                if (err) return console.error(err);
                console.log("Comments saved successfully!");
              });
            });
          });
        });
      });
    });
  }