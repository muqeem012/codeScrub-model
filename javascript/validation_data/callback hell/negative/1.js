async function markAttendance(studentId, date) {
    try {
        console.log("Marking attendance...");

        const studentDetails = await fetchStudentDetails(studentId);
        console.log("Student details fetched!");

        const isPresent = await checkIfPresent(studentId, date);
        console.log("Attendance status checked!");

        await recordAttendance(studentId, date, isPresent);
        console.log("Attendance recorded successfully!");

        await notifyParent(studentId);
        console.log("Parent notified successfully!");

    } catch (error) {
        console.error("Error occurred:", error);
    }
}