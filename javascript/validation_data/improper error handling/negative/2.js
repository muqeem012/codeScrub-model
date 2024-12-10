async function logTrustEvaluationResult(url, trustScore) {
    try {
        const response = await fetch(`/api/logTrustResult`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, trustScore })
        });
        if (!response.ok) throw new Error("Logging failed.");
        const result = await response.json();
        return { success: result.success, logId: result.logId };
    } catch (error) {
        console.error("Error logging trust evaluation result:", error);
        return { success: false, message: error.message };
    }
}