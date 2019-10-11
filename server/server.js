let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');

const userRoute = require('../server/routes/user.routes');
const ideaRoute = require('../server/routes/idea.routes');

mongoose.Promise = global.Promise;
mongoose.connect(database.db, { useNewUrlParser: true }).
  then(() => {
    console.log('Database connected sucessfully!');
  }, error => {
    console.log('Database could not be connected:' + error);
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', userRoute);
app.use('/ideas', ideaRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port' + port);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
