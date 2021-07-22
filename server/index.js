const crtl = require('./controller/controller');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const path = require('path')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public'));
})
app.use(cors());
app.use(express.json());

app.get('/api/background', crtl.getPicture);



app.listen(port, () => console.log(`Server is up and running on ${port}...`));