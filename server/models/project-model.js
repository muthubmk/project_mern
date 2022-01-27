const mongoose = require('mongoose')
const Schema = mongoose.Schema

const project = new Schema(
    {
        projectname: { type: String, required: true },
        projectdescription: { type: String, required: true },
        starttime: { type: [String], required: true },
        endtime: { type: Number, required: true },
    },
    { timestamps: true },