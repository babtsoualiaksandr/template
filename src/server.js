const express = require('express');
import foo from './fun';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
    foo();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
