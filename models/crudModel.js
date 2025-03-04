const mongoose = require("mongoose");

const crudModuleNameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    changeFrequency: { type: String, required: true },
    hint: { type: String, required: true },
    password: { type: Boolean, required: true },
});

const crudModuleName = mongoose.model("crudModuleName", crudModuleNameSchema);

module.exports = crudModuleName;
