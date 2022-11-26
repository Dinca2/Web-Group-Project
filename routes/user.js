const router = require('express').Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(users))
    .catch(err => res.status(400).json('Err: ' + err));
});

router.post('/signup', (req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  
  newUser.save()
  .then(() => res.json('User added!'))
  .cath(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
