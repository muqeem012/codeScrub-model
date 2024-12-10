async function runExample3() {
    try {
      const userId = await getUserId();
      const profile = await getUserProfile(userId);
  
      if (!profile.active) {
        await updateStatus(userId, 'active');
        await sendWelcomeEmail(userId);
        const stats = await fetchUserStats(userId);
        console.log("User stats:", stats);
      } else {
        console.log("User is already active.");
      }
    } catch (err) {
      handleError(err);
    }
  }