import { Router } from 'express';
import Post from '../models/Post';

const router = Router();

// Solicitud de todos los post
router.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.send({ posts });
})

// Solicitud de un solo post
router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.send(post);
})

// Se crea un nuevo post
router.post('/post/add', async (req, res) => {
  const post = Post(req.body);
  const postSaved = await post.save();
  res.send(postSaved)
})

// Se actualiza un post
router.put('/post/edit/:id', async (req, res) => {
  const postUpdated = await Post.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.send(postUpdated)
})

// Se elimina un post
router.delete('/post/delete/:id', async (req, res) => {
  const postUpdated = await Post.findByIdAndDelete(req.params.id);
  res.send('Post eliminado :(')
})

export default router;
