function generateCibilScore(userId) {
    console.log("Generating Cibil score...");

    fetchUserCreditHistory(userId, function (error, creditHistory) {
        if (error) {
            console.error("Error fetching credit history:", error);
            return;
        }

        console.log("Credit history fetched!");

        analyzeCreditHistory(creditHistory, function (error, creditAnalysis) {
            if (error) {
                console.error("Error analyzing credit history:", error);
                return;
            }

            console.log("Credit history analyzed!");

            calculateCibilScore(creditAnalysis, function (error, cibilScore) {
                if (error) {
                    console.error("Error calculating Cibil score:", error);
                    return;
                }

                console.log("Cibil score calculated!");

                updateUserCibilScore(userId, cibilScore, function (error) {
                    if (error) {
                        console.error("Error updating Cibil score:", error);
                        return;
                    }

                    console.log("Cibil score updated!");

                    notifyUser(userId, function (error) {
                        if (error) {
                            console.error("Error notifying user:", error);
                            return;
                        }

                        console.log("User notified!");
                    });
                });
            });
        });
    });
}