const es6Renderer = require('express-es6-template-engine')
const express = require('express');
const app = express();

app.engine('html', es6Renderer)
app.set('views', __dirname + '/Views')
app.set('view engine', 'html')
app.use(express.static(__dirname + '/Public'))

app.listen('5500', () => {
    console.log('./Hello World!');
});

app.get('/', (req, res) => {
    res.render('index.html')
})