import express from 'express';
import { uploadMedia, getMedia } from '../controllers/media.controller.js';
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post('/', upload.single('file'), uploadMedia);
router.get('/:id', getMedia);
export default router;