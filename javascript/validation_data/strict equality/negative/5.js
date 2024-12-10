function updateUserProfile(userId, profileData) {
    const userProfiles = {
        '1': { name: 'John Doe', age: 30, email: 'john@example.com' },
        '2': { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
    };

    if (userProfiles[userId].email === profileData.email) {
        userProfiles[userId] = { ...userProfiles[userId], ...profileData };
        console.log('Profile updated successfully!');
    } else {
        console.log('Email does not match the current profile.');
    }
}