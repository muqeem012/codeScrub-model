async function processAndUploadImages(imagePaths) {
    try {
      const image1 = await readImage(imagePaths[0]);
      const filteredImage1 = await applyFilter(image1, 'grayscale');
      const resizedImage1 = await resizeImage(filteredImage1, 800, 600);
      const uploadResponse1 = await uploadImageToServer(resizedImage1);
  
      const image2 = await readImage(imagePaths[1]);
      const filteredImage2 = await applyFilter(image2, 'sepia');
      const resizedImage2 = await resizeImage(filteredImage2, 800, 600);
      const uploadResponse2 = await uploadImageToServer(resizedImage2);
  
      return 'All images uploaded successfully';
    } catch (error) {
      throw new Error(error.message);
    }
  }