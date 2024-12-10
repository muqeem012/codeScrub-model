const addSongToPlaylist = function(playlistId, song) {
    if (playlistId === null || playlistId === '' || song === null || song.title === null || song.artist === null) {
        return { success: false, message: 'Playlist ID or Song details are incomplete' };
    }
    const result = addSongToPlaylistInDatabase(playlistId, song);
    return result === 'success' ? { success: true, message: 'Song added to playlist successfully' } : { success: false, message: 'Failed to add song to playlist' };
};