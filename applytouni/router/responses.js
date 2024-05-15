const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Browse page');
});

router.get('/:response', (req, res) => {
  const params = req.params;
  res.send(`${params.form} page`);
});

router.post('/:response', (req, res) => {
  const params = req.params;
  res.send(`${params.institution} ${params.program}`);
});

module.exports = router;
