async function generateCibilScore(userId) {
    try {
        console.log("Generating Cibil score...");

        const creditHistory = await fetchUserCreditHistory(userId);
        console.log("Credit history fetched!");

        const creditAnalysis = await analyzeCreditHistory(creditHistory);
        console.log("Credit history analyzed!");

        const cibilScore = await calculateCibilScore(creditAnalysis);
        console.log("Cibil score calculated!");

        await updateUserCibilScore(userId, cibilScore);
        console.log("Cibil score updated!");

        await notifyUser(userId);
        console.log("User notified!");

    } catch (error) {
        console.error("Error occurred:", error);
    }
}