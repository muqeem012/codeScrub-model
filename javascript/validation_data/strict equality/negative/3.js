const createPlaylist = (userId, emotion) => {
    if (userId === null || userId === '' || emotion === null || emotion === '') {
        return { success: false, message: 'User ID and Emotion cannot be empty' };
    }
    const playlistId = createPlaylistInDatabase(userId, emotion);
    return playlistId !== null ? { success: true, playlistId: playlistId } : { success: false, message: 'Failed to create playlist' };
};