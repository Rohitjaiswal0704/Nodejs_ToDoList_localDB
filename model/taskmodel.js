const mongoose = require("mongoose");

const usertask = new mongoose.Schema({
    title:String,
    desc:String,
    Date:{
        type:Date,
        default:Date.now()
    }
})

const Task = mongoose.model("task",usertask)

module.exports = Task