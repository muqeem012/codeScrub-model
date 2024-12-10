function markAttendance(studentId, date) {
    console.log("Marking attendance...");

    fetchStudentDetails(studentId, function (error, studentDetails) {
        if (error) {
            console.error("Error fetching student details:", error);
            return;
        }

        console.log("Student details fetched!");

        checkIfPresent(studentId, date, function (error, isPresent) {
            if (error) {
                console.error("Error checking attendance:", error);
                return;
            }

            console.log("Attendance status checked!");

            recordAttendance(studentId, date, isPresent, function (error) {
                if (error) {
                    console.error("Error recording attendance:", error);
                    return;
                }

                console.log("Attendance recorded successfully!");

                notifyParent(studentId, function (error) {
                    if (error) {
                        console.error("Error notifying parent:", error);
                        return;
                    }

                    console.log("Parent notified successfully!");
                });
            });
        });
    });
}