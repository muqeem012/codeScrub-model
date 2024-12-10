async function runExample10() {
    try {
      const session = await getSession();
      const profile = await getUserProfile(session.userId);
      const notifications = await getNotifications(profile.id);
      const prefs = await getUserPreferences(profile.id);
      const filtered = await filterNotifications(notifications, prefs);
      const summary = await summarizeNotifications(filtered);
      await displaySummary(summary);
      console.log("All done!");
    } catch (err) {
      console.error(err);
    }
  }