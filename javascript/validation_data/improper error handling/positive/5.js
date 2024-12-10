async function analyzeTopicRelevance(topic) {
    try {
        const response = await fetch(`/api/topicRelevance?topic=${encodeURIComponent(topic)}`);
        if (response.ok) {
            return await response.json();
        } else {
            console.warn("Failed to fetch topic relevance.");
        }
    } catch (error) {
        console.log("An error occurred.");
    }
}