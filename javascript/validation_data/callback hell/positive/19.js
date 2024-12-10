function runExample9() {
    loginUser(username, password, (err, user) => {
      if (err) return console.error("Login failed:", err);
      loadUserSettings(user.id, (err, settings) => {
        if (err) return console.error("Settings error:", err);
        loadUserPermissions(user.id, (err, permissions) => {
          if (err) return console.error("Permissions error:", err);
          fetchDashboardData(permissions, (err, dashboardData) => {
            if (err) return console.error("Dashboard error:", err);
            renderDashboard(dashboardData, (err) => {
              if (err) return console.error("Render error:", err);
              console.log("Dashboard rendered successfully!");
            });
          });
        });
      });
    });
  }