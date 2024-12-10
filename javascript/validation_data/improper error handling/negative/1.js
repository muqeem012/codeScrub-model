async function evaluateWebContentTrust(url) {
    try {
        const response = await fetch(`/api/evaluateTrust?url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error(`Failed to evaluate trust: ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in evaluating web content trust:", error);
        return { success: false, message: error.message };
    }
}