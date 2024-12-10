async function fetchTrendingKeywords() {
    try {
        const response = await fetch(`/api/trendingKeywords`);
        if (!response.ok) {
            console.warn("Failed to retrieve trending keywords.");
        }
        return response.json();
    } catch (error) {
        console.log("Something went wrong.");
    }
}