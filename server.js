const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//...........................................OwnerManagment................................................. 
const employeeRoutes = require('./routes/employees');
//...........................................OwnerManagmentEnd...............................................


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);



//...........................................OwnerManagment................................................. 
app.use(employeeRoutes);
//...........................................OwnerManagmentEnd...............................................


const PORT = 8000;
const DB_URL = 'mongodb+srv://Thisara:Tk9adrRD56Rztt0A@cluster0.lvbwpqz.mongodb.net/factory_DB?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connected Error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);

});