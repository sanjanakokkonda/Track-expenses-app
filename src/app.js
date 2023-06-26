const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");

const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler , notFound} = require("./middlewares/errorMiddleware");
const app = express();
//env
dotenv.config();

//dbConnect
dbConnect();

//middleware
app.use(express.json());

//routes
app.use("/api/users", userRoute);

app.use(notFound);
 app.use(errorHandler) ;



module.exports = app;



//mongodb+srv://sanjana:<password>@expenses-tracker.zvbilks.mongodb.net/?retryWrites=true&w=majority