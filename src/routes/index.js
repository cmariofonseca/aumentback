import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Respondiendo desde routes')
})

module.exports = router;
