async function fetchArticles(topic) {
    try {
        const response = await fetch(`/api/articles?topic=${encodeURIComponent(topic)}`);
        if (!response.ok) throw new Error(`Failed to fetch articles: ${response.statusText}`);
        const articles = await response.json();
        return articles;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return { success: false, message: error.message };
    }
}