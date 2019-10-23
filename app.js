const express = require('express');
const app = express();

//set up root path
app.get('/', (req ,res) =>{
  res.send('Hello World');
});

app.listen(3000, ()=> console.log('Listening on port 3000!!!'));




//other communications with the server
app.post();
app.put();
app.delete();
