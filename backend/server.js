const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./Models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("./controllers/taskController");
const router = require("./routes/taskRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/task',router);

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
  res.send("Hello Home");
});






const startServer = async()=>{
    try {
        await connectDB();
        app.listen(PORT,(req,res)=>{
            console.log('server started at port: ',PORT);
        })
        
    } catch (error) {
         console.log(error);        
    }
}

startServer();