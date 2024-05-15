const { Router } = require('express');
const router = Router();
const Applicant = require('../models/applicant');
const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/register', async (req, res) => {
  try {
    const { username, password, type } = req.body;
    //console.log('username', username, 'password', password);
    const hashedPassword = await hash(password, 10);
    await Applicant.create({ username: username, password: hashedPassword });
    res.status(201).json({ message: 'Applicant registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Applicant.findOne({
      where: {
        Username: username,
      },
    });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await compare(password, user.Password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = sign({ userId: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
