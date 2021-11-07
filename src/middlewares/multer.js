const path = require('path');
const multer = require('multer');

// ******************** Multer *********************
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images'));
    },

    filename: (req, file, callback) => {
        callback(
          null,
          file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
      }
});

const fileUpload = multer({ storage: storage });

module.exports = fileUpload;