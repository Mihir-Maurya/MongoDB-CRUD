const mongoose = require("mongoose");


const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"should not be empty"]
    },
    completed:{
       type:Boolean,
       required:true,
       default:false
    }
},{
    timestamps:true
});

const task = mongoose.model("Task",taskSchema);

module.exports = task;