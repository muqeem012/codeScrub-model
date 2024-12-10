function clusterKeywords(keywords) {
    try {
        if (!Array.isArray(keywords)) throw new Error("Invalid input: keywords must be an array.");
        let clusters = {};

        keywords.forEach(keyword => {
            let cluster = computeCluster(keyword);
            clusters[cluster] = clusters[cluster] || [];
            clusters[cluster].push(keyword);
        });

        return clusters;
    } catch (error) {
        console.error("Error clustering keywords:", error);
        return null;
    }
}