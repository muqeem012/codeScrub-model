function clusterKeywords(keywords) {
    try {
        let clusters = {};
        keywords.forEach(keyword => {
            let cluster = computeCluster(keyword);
            clusters[cluster] = clusters[cluster] || [];
            clusters[cluster].push(keyword);
        });
        return clusters;
    } catch (error) {
       
    }
}