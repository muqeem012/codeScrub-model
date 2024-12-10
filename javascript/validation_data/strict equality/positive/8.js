function checkUserAccess(user) {
    if (user.role == 'admin') return 'Access granted';
    
    if (user.status == 'suspended') return 'Account suspended';
    
    if (user.lastLogin == undefined) return 'User has never logged in';
    
    return 'Access denied';
  }
  