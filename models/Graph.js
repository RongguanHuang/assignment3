var mongoose = require('mongoose');

var GraphSchema = new mongoose.Schema({
  Year: String,
  Income: Number,
}, 
{
  collection: 'UCSFProfit_collection'
});

mongoose.model('Graph', GraphSchema);