async function storeClusterResults(clusters) {
    try {
        await fetch(`/api/clusterResults/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clusters)
        });
    } catch (error) {
       
    }
}