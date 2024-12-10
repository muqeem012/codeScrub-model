async function guideShopping(userId, itemId) {
    try {
        console.log("Guiding shopping...");

        const itemDetails = await getItemDetails(itemId);
        console.log("Item details retrieved!");

        const deals = await findBestDeals(userId, itemDetails);
        console.log("Best deals found!");

        const preferences = await getUserPreferences(userId);
        console.log("User preferences obtained!");

        const recommendations = await recommendProducts(deals, preferences);
        console.log("Products recommended!");

        await sendRecommendations(userId, recommendations);
        console.log("Recommendations sent!");

    } catch (error) {
        console.error("Error occurred:", error);
    }
}