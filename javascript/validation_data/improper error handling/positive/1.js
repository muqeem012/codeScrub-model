async function storeTrustRating(url, trustScore) {
    try {
        await fetch(`/api/storeTrustRating`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, trustScore })
        });
    } catch (error) {
    }
}