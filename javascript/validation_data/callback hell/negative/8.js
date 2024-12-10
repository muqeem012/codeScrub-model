async function sendUserNotification(userId, message) {
    try {
      const email = await getUserEmail(userId);
      await sendEmail(email, message);
  
      const phoneNumber = await getUserPhoneNumber(userId);
      await sendSMS(phoneNumber, message);
  
      await logNotification(userId, message);
      return 'Notification sent successfully';
    } catch (error) {
      throw new Error(error.message);
    }
  }