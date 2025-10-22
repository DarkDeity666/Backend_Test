let express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello this is a new backend!');
});

const PORT = process.env.PORT || 8800;
app.listen(PORT,()=>{
    console.log("The app is running on port "+ PORT);
})