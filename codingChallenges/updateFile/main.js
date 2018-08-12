const fs = require('fs');
const path = require('path');

const updateFile = (filePath) => {
  const regexp = /console\.log.+[\n|$]/g;
  
  fs.readFile(filePath, 'utf8', (error, content) => {
    if (error) throw error;
    if (content.match(regexp)) {
      let nContent = content.replace(regexp, '');

      fs.writeFile(filePath, nContent, (err) => {
        if (err) throw err;
        console.log('The content of the file has been updated!');
      })
    }
  });
};

const walkFolder = (folder) => {
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      let nPath = folder + '/' + file;

      fs.stat(nPath, function(err, stats) {
        if (err) { throw err;}

        if (stats.isDirectory()) {
          walkFolder(nPath);
        } else if (stats.isFile()) {
          if (path.extname(nPath) === '.js') {
            updateFile(nPath);
          }
        }
      });
    });
  });
}

walkFolder('./nfolder');
