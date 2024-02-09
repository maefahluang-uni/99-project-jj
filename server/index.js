const express = require('express')
const app = express()


// Endpoint to get all books
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/model/index.html');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})