const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === userId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});