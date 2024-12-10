async function fetchUserFeedback(url) {
    try {
        const response = await fetch(`/api/getUserFeedback?url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error(`Failed to fetch user feedback: ${response.statusText}`);
        const feedback = await response.json();
        return feedback;
    } catch (error) {
        console.error("Error fetching user feedback:", error);
        return null;
    }
}