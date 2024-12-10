async function registerUser(userData) {
    try {
      const emailValid = await validateEmail(userData.email);
      if (!emailValid) throw new Error('Invalid email');
  
      const usernameValid = await validateUsername(userData.username);
      if (!usernameValid) throw new Error('Username taken');
  
      const passwordValid = await checkPasswordStrength(userData.password);
      if (!passwordValid) throw new Error('Weak password');
  
      const hashedPassword = await hashPassword(userData.password);
      const result = await saveUserToDatabase({ ...userData, password: hashedPassword });
  
      return 'User successfully registered';
    } catch (error) {
      throw new Error(error.message);
    }
  }