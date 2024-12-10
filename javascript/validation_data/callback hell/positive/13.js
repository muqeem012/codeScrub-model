function runExample3() {
    getUserId((err, userId) => {
      if (err) return handleError(err);
      getUserProfile(userId, (err, profile) => {
        if (err) return handleError(err);
        if (!profile.active) {
          updateStatus(userId, 'active', (err) => {
            if (err) return handleError(err);
            sendWelcomeEmail(userId, (err) => {
              if (err) return handleError(err);
              fetchUserStats(userId, (err, stats) => {
                if (err) return handleError(err);
                console.log("User stats:", stats);
              });
            });
          });
        } else {
          console.log("User is already active.");
        }
      });
    });
  }