const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "files"),
    filename: (req, file, cb) => {
      // browser API handle files
      const ext = path.extname(file.originalname);
      // we keep filename and extension as original
      const name = path.basename(file.originalname, ext);
      // string interpolation to replace spaces and return without spaces, and add data and extension
      cb(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`);
    },
  }),
};
