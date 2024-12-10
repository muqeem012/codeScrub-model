function generateRecommendations(userData) {
    try {
        if (!userData || !Array.isArray(userData.activities)) {
            throw new Error("Invalid user data format.");
        }

        let recommendations = [];
        userData.activities.forEach(activity => {
            const recommendation = computeRecommendation(activity);
            if (recommendation) {
                recommendations.push(recommendation);
            }
        });

        return recommendations;
    } catch (error) {
        console.error("Error generating recommendations:", error);
        return [];
    }
}