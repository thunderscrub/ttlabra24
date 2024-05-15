const { Router } = require('express');
const router = Router();
const Form = require('../models/form');
//const Response = require('../models/response');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res) => {
  await Form.findAll().then((rows) => {
    res.send(rows);
  });
});

router.post('/', async (req, res) => {
  const { form } = req.body;
  await Form.create({ form: form });
  res.send('OK');
});

router.post('/:form', (req, res) => {
  const params = req.params;
  res.send(`${params.institution} ${params.program}`);
});

module.exports = router;
