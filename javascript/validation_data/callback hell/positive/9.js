const processAndUploadImages = (imagePaths, callback) => {
    readImage(imagePaths[0], (err, image1) => {
      if (err) return callback(err);
      applyFilter(image1, 'grayscale', (err, filteredImage1) => {
        if (err) return callback(err);
        
        resizeImage(filteredImage1, 800, 600, (err, resizedImage1) => {
          if (err) return callback(err);
          
          uploadImageToServer(resizedImage1, (err, uploadResponse1) => {
            if (err) return callback(err);
            
            readImage(imagePaths[1], (err, image2) => {
              if (err) return callback(err);
              applyFilter(image2, 'sepia', (err, filteredImage2) => {
                if (err) return callback(err);
                
                resizeImage(filteredImage2, 800, 600, (err, resizedImage2) => {
                  if (err) return callback(err);
                  
                  uploadImageToServer(resizedImage2, (err, uploadResponse2) => {
                    if (err) return callback(err);
                    callback(null, 'All images uploaded successfully');
                  });
                });
              });
            });
          });
        });
      });
    });
  };