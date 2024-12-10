async function runExample9() {
    try {
      const user = await loginUser(username, password);
      const settings = await loadUserSettings(user.id);
      const permissions = await loadUserPermissions(user.id);
      const dashboardData = await fetchDashboardData(permissions);
      await renderDashboard(dashboardData);
      console.log("Dashboard rendered successfully!");
    } catch (err) {
      console.error(err);
    }
  }