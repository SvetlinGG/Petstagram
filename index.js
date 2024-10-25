const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send('Hello Exam!!!')
});



app.listen(4000, () => console.log('Server is listening on http://localhost:4000'));
