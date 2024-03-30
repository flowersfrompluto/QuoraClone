const multer = require("multer");

const file_storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const file_name = Date.now() + " - " + file.originalname;
    cb(null, file_name);
  },
});

const filterFileType = (req, file, cb) => {
  if (file.mimetype == "audio/mpeg" || file.mimetype == "audio/webm" || file.mimetype == "audio/mp3") {
    cb(null, true);
  } else {
    cb(null, false);
    console.log("File Type Not Supported");
  }
};

const uploads = multer({
  storage: file_storage,
  fileFilter: filterFileType,
});

module.exports = uploads;
