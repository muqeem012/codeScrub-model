async function fetchUserActivityData(userId) {
    try {
        const response = await fetch(`/api/userActivity?userId=${encodeURIComponent(userId)}`);
        if (!response.ok) throw new Error(`Failed to fetch user activity data: ${response.statusText}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user activity data:", error);
        return { success: false, message: error.message };
    }
}