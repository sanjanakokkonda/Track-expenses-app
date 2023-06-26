const mongoose = require('mongoose');


const dbConnect = async ()  =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,
{
         
          useUnifiedTopology: false,
          useNewUrlParser: true,
        });
        console.log(`DB connected successfully.`);
    }catch (error) {
        console.log(`error while connecting to db `);
    }
};

module.exports = dbConnect;