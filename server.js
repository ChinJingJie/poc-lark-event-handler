const express = require('express');
const lark = require('@larksuiteoapi/node-sdk');

const app = express();
app.use(express.json());

// Unified event handling for Lark events
app.post('/lark/events', (req, res, next) => {
  const body = req.body;
  if (body.type === 'url_verification') {
    // Echo back the challenge
    res.send({ challenge: body.challenge });
  } else {
    next(); // Pass to the SDK handler
  }
});

app.post('/lark/events', lark.adaptExpress(
  new lark.EventDispatcher({
    encryptKey: '', // Add your encrypt key here
    verificationToken: '', // Add your verification token here
  }).register({
    'im.message.receive_v1': async (data) => {
      console.log('Received message event:', data);
      return 'success';
    },
    'im.message.recalled_v1': async (data) => {
      console.log('Message recalled event:', data);
      return 'success';
    },
  })
));

app.listen(3000, () => console.log('Listening on port 3000'));