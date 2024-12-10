async function analyzeContent(url) {
    try {
        const response = await fetch(`/api/analyzeContent?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            return await response.json();
        } else {
            console.error("Failed to fetch content analysis.");
        }
    } catch (error) {
        console.log("Some issue occurred.");
    }
}