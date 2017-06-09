/**
 * Created by Ylwoi on 2017-06-08.
 */

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/build'));
// app.use('/static/', express.static('static'));

// app.set('public', __dirname + '/public');
// app.set('src', __dirname + '/src');
app.set('build', __dirname + '/build');
app.set('build/static', __dirname + '/build/static');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
