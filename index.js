/**
 * Created by Ylwoi on 2017-06-08.
 */

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.set('public', __dirname + '/public');
app.set('src', __dirname + '/src');

app.use('/public', express.static('public'));
app.use('/src', express.static('/src'));

app.get('/', function (req, res) {
    res.render('public/index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});