const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/execute', (req, res) => {
    if(!req.body.code) {
        throw new Error('No Code Specified!');
    } else {
        console.log(req.body.code);
        res.send('Hello World!');
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}...`);
});