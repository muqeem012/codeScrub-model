function guideShopping(userId, itemId) {
    console.log("Guiding shopping...");

    getItemDetails(itemId, function (error, itemDetails) {
        if (error) {
            console.error("Error getting item details:", error);
            return;
        }

        console.log("Item details retrieved!");

        findBestDeals(userId, itemDetails, function (error, deals) {
            if (error) {
                console.error("Error finding best deals:", error);
                return;
            }

            console.log("Best deals found!");

            getUserPreferences(userId, function (error, preferences) {
                if (error) {
                    console.error("Error getting user preferences:", error);
                    return;
                }

                console.log("User preferences obtained!");

                recommendProducts(deals, preferences, function (error, recommendations) {
                    if (error) {
                        console.error("Error recommending products:", error);
                        return;
                    }

                    console.log("Products recommended!");

                    sendRecommendations(userId, recommendations, function (error) {
                        if (error) {
                            console.error("Error sending recommendations:", error);
                            return;
                        }

                        console.log("Recommendations sent!");
                    });
                });
            });
        });
    });
}