const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Users = require('./routes/Users');
const Coins = require('./routes/Coins');

require('./config/passport');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());

app.get('/api', (req, res) => {
    res.send('홈 입니다.');
})
app.use('/api/user', Users);
app.use('/api/coin', Coins);

app.listen(port, () => {
    console.log(port+'서버가 열렸습니다.');
})