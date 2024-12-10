async function updateContentTrustLevel(url, trustLevel) {
    try {
        const response = await fetch(`/api/updateContentTrust`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, trustLevel })
        });
        if (!response.ok) throw new Error(`Failed to update content trust: ${response.statusText}`);
        const result = await response.json();
        return { success: result.success };
    } catch (error) {
        console.error("Error updating content trust level:", error);
        return { success: false, message: error.message };
    }
}