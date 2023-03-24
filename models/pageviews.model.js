const mongoose =require( 'mongoose')
const PageViewSchema = new mongoose.Schema({
  name:{ type: String, default: "pageviews" },
  psychologicalwar:[String],
  home:[String],
  info:[String],
  paris:[String],
  cooperatives:[String],
  tennomar:[String],
  democracy:[String],
  neatugua:[String],
  jamahiriya:[String],
  manufacturingconsentvideos:[String],
  democracyvideos:[String],
  libertariansocialismvideos:[String],
  cooperativesvideos:[String],
  youtube:[String],
  ujamaa:[String],
  spain:[String],
  kerala:[String]
})

module.exports=mongoose.model('pageviews', PageViewSchema)
