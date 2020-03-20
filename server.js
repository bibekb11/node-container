const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/file"));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/execute', (req, res) => {
    if(!req.body.code) {
        res.send('No Code Specified!');
        throw new Error('No Code Specified!');
    } else {
        console.log(req.body.code);
        let html = `
            <html>
                <head><head>
                <body>
                    <script>${req.body.code}</script>
                </body>
            </html>
        `;
        fs.writeFileSync(__dirname + '/file/index.html', html, (err) => {
            if(err) {
                res.send('Could not write code into the filesystem');
                throw err;
            }
            console.log('Code written to file(index.html)');
        });
        res.sendFile(__dirname + '/file/index.html');
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}...`);
});