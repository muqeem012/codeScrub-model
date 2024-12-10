const sendUserNotification = (userId, message, callback) => {
    getUserEmail(userId, (err, email) => {
      if (err) return callback(err);
      
      sendEmail(email, message, (err, emailResponse) => {
        if (err) return callback(err);
        
        getUserPhoneNumber(userId, (err, phoneNumber) => {
          if (err) return callback(err);
          
          sendSMS(phoneNumber, message, (err, smsResponse) => {
            if (err) return callback(err);
            
            logNotification(userId, message, (err, logResponse) => {
              if (err) return callback(err);
              callback(null, 'Notification sent successfully');
            });
          });
        });
      });
    });
  };