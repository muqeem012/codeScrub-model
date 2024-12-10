async function trackMobileAttendance(userId, timestamp) {
    try {
        console.log("Tracking mobile attendance...");

        const location = await getUserLocation(userId);
        console.log("User location obtained!");

        await checkInUser(userId, location, timestamp);
        console.log("User checked in!");

        await logAttendance(userId, timestamp);
        console.log("Attendance logged!");

        await sendConfirmation(userId);
        console.log("Confirmation sent!");

    } catch (error) {
        console.error("Error occurred:", error);
    }
}