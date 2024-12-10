async function registerUser(userData) {
    const emailValid = await validateEmail(userData.email);
    const usernameValid = await validateUsername(userData.username);
    const hashedPassword = await hashPassword(userData.password);
    const result = await saveUserToDatabase({ ...userData, password: hashedPassword });
    return 'User successfully registered';
  }