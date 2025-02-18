import Media from '../models/media.model.js';
import s3 from '../config/aws.js';
export const uploadMedia = async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No file uploaded' });
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'private',
  };
  try {
    const data = await s3.upload(params).promise();
    const newMedia = new Media({
      title: req.body.title,
      description: req.body.description,
      s3Url: data.Location,
    });
    await newMedia.save();
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
};
export const getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: media.s3Url.split('.com/')[1],
      Expires: 60 * 60,
    };
    const url = s3.getSignedUrl('getObject', params);
    res.json({ ...media.toObject(), signedUrl: url });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching media', error });
  }
};
