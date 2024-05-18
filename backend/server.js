const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/routes');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use('/addUser', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
