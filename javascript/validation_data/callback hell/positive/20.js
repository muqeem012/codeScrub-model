function runExample10() {
    getSession((err, session) => {
      if (err) return console.error(err);
      getUserProfile(session.userId, (err, profile) => {
        if (err) return console.error(err);
        getNotifications(profile.id, (err, notifications) => {
          if (err) return console.error(err);
          getUserPreferences(profile.id, (err, prefs) => {
            if (err) return console.error(err);
            filterNotifications(notifications, prefs, (err, filtered) => {
              if (err) return console.error(err);
              summarizeNotifications(filtered, (err, summary) => {
                if (err) return console.error(err);
                displaySummary(summary, (err) => {
                  if (err) return console.error(err);
                  console.log("All done!");
                });
              });
            });
          });
        });
      });
    });
  }