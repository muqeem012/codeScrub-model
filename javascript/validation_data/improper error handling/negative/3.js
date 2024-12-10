function retrieveCachedTrustScore(url) {
    try {
        const trustScore = localStorage.getItem(`trustScore_${url}`);
        if (!trustScore) throw new Error("No cached trust score found.");
        return parseFloat(trustScore);
    } catch (error) {
        console.error("Error retrieving cached trust score:", error);
        return null;
    }
}