const fs = require('fs');

const fileName = 'sample.txt';
const originalContent = 'This is the original file content.';
const updatedContent = '\nThis content was added using appendFile().';

console.log('File operation started');
console.log('Creating file...');

fs.writeFile(fileName, originalContent, (writeError) => {
  if (writeError) {
    console.log(`Error creating file: ${writeError.message}`);
    return;
  }

  console.log('File created successfully.');
  console.log('\nReading file...');

  fs.readFile(fileName, 'utf8', (readError, fileContent) => {
    if (readError) {
      console.log(`Error reading file: ${readError.message}`);
      return;
    }

    console.log(`File content: ${fileContent}`);
    console.log('\nUpdating file...');

    fs.appendFile(fileName, updatedContent, (appendError) => {
      if (appendError) {
        console.log(`Error updating file: ${appendError.message}`);
        return;
      }

      console.log('File updated successfully.');
      console.log('\nDeleting file...');

      fs.unlink(fileName, (deleteError) => {
        if (deleteError) {
          if (deleteError.code === 'ENOENT') {
            console.log('Error deleting file: The file does not exist.');
          } else {
            console.log(`Error deleting file: ${deleteError.message}`);
          }
          return;
        }

        console.log('File deleted successfully.');
        console.log('File operation completed');
      });
    });
  });
});
