import multer, { StorageEngine } from 'multer';
import path from 'path';

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb): void => {
    cb(null, 'dist/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage }).single('avatar');
