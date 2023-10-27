const mongoose= require('mongoose');
const dotenv= require('dotenv')
dotenv.config();
mongoose.connect(process.env.DB_URL).then(success=>{
    console.log("DB connected Successfully");
}).catch(err=>{
    console.log("There is Problem With DB ",err);
    return;
})
