const syncPlaylistDataWithCloud = async (playlistId) => {
    if (playlistId === null || playlistId === '') {
        return { success: false, message: 'Playlist ID cannot be empty' };
    }
    const playlistData = await getPlaylistDataFromDatabase(playlistId);
    if (playlistData === null) {
        return { success: false, message: 'No playlist data found' };
    }
    await uploadPlaylistDataToCloud(playlistData);
    return { success: true, message: 'Playlist data synced with cloud successfully' };
};