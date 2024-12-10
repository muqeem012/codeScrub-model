function readFileContent(filePath) {
    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      return fileData;
    } catch (error) {
    }
  }