import { Router } from 'express';
import Post from '../models/Post'

const router = Router();

// Solicitud de todos los post
router.get('/', (req, res) => {
  res.send('Respondiendo desde routes');
})

// Se crea un nuevo post
router.post('posts/add', (req, res) => {
  const post = Post(req.body);
  console.log(post);
})

export default router;
