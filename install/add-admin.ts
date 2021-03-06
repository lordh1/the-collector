const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userName = 'admin';
const email = 'lordh@wp.pl';
const password = '123superPa$$w0rd456';

mongoose.connect('mongodb://localhost/the-collector', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    status: Number,
  });
  const User = mongoose.model('User', userSchema);
  const admin = new User({
    name: userName,
    password: bcrypt.hashSync(password, 10),
    email: email,
    status: 1,
  });
  admin.save().then(() => db.close());
});
