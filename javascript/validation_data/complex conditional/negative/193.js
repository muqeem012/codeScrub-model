function onUserTyping(socket, callback) {
  if (!socket || typeof callback !== 'function') {
    console.error('Socket instance and callback function are required');
    return;
  }
  
  socket.on('userTyping', (user) => {
    if (!user || !user.username) {
      console.error('User data is incomplete');
      return;
    }
    
    callback(user);
  });
}