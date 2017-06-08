/**
 * Created by Ylwoi on 2017-06-08.
 */

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});