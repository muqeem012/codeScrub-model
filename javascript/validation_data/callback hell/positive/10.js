function registerUser(userData, callback) {
    validateEmail(userData.email, (err, emailValid) => {
      if (err) return callback(err);
      if (!emailValid) return callback('Invalid email');
      
      validateUsername(userData.username, (err, usernameValid) => {
        if (err) return callback(err);
        if (!usernameValid) return callback('Username taken');
        
        checkPasswordStrength(userData.password, (err, passwordValid) => {
          if (err) return callback(err);
          if (!passwordValid) return callback('Weak password');
          
          hashPassword(userData.password, (err, hashedPassword) => {
            if (err) return callback(err);
            
            saveUserToDatabase({ ...userData, password: hashedPassword }, (err, result) => {
              if (err) return callback(err);
              callback(null, 'User successfully registered');
            });
          });
        });
      });
    });
  }