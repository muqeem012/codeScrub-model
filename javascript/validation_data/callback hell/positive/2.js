function trackMobileAttendance(userId, timestamp) {
    console.log("Tracking mobile attendance...");

    getUserLocation(userId, function (error, location) {
        if (error) {
            console.error("Error getting user location:", error);
            return;
        }

        console.log("User location obtained!");

        checkInUser(userId, location, timestamp, function (error) {
            if (error) {
                console.error("Error checking in user:", error);
                return;
            }

            console.log("User checked in!");

            logAttendance(userId, timestamp, function (error) {
                if (error) {
                    console.error("Error logging attendance:", error);
                    return;
                }

                console.log("Attendance logged!");

                sendConfirmation(userId, function (error) {
                    if (error) {
                        console.error("Error sending confirmation:", error);
                        return;
                    }

                    console.log("Confirmation sent!");
                });
            });
        });
    });
}