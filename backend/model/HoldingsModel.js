const {model} =require ("mongoose");

// Corrected line 
const { HoldingsSchema } = require('../schemas/HoldingsSchema');
//if we write here holding then "holdings" will become a collection
const HoldingsModel = new model("holding",HoldingsSchema);

module.exports={HoldingsModel};