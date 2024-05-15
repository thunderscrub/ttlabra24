const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const auth = require('./router/auth');
app.use('/auth', auth);

const forms = require('./router/forms');
app.use('/forms', forms);

const responses = require('./router/responses');
app.use('/responses', responses);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
