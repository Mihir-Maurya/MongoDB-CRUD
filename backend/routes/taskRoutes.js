const express = require("express");
const { createTask, getTasks, getTask, updateTask, deleteTask } = require("../controllers/taskController");


const router = express.Router();
router.route('/').post(createTask).get(getTasks)
router.route('/:id').delete(deleteTask).get(getTask).put(updateTask);



module.exports = router