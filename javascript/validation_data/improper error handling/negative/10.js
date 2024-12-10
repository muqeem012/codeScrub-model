function analyzeSuspiciousKeywords(content, keywords) {
    try {
        if (typeof content !== 'string' || !Array.isArray(keywords)) {
            throw new Error("Invalid input types.");
        }

        let suspiciousCount = 0;
        keywords.forEach(keyword => {
            const count = (content.match(new RegExp(keyword, 'gi')) || []).length;
            suspiciousCount += count;
        });

        return suspiciousCount;
    } catch (error) {
        console.error("Error analyzing suspicious keywords:", error);
        return 0;
    }
}