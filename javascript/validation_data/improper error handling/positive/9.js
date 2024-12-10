async function authenticateUser(username, password) {
    const user = await findUserByUsername(username);
    const isValidPassword = await verifyPassword(user.password, password);
    const sessionToken = await generateSessionToken(user.id);
    return sessionToken;
  }