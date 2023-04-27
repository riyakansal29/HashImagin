import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router=express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

  // Get Routes
router.route('/').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });

  // Post Routes
router.route('/').post(async (req, res) => {
    try {
<<<<<<< HEAD
        const { name, prompt, photo, price} = req.body;
=======
        const { name, prompt, photo,price} = req.body;
>>>>>>> 3ee07ef7f4bb3943e4f28679cca25c27d8c97a04
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
        price,
        });

        res.status(201).json({ success: true, data: newPost });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
}
});

export default router;
