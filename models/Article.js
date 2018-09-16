var mongoose = require("mongoose");

var db = require("../config/connection");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },

  link: {
    type: String,
    required: true,
    unique: true
  },

  summary: {
    type: String,
    required: false,
    unique: false
  },

  byline: {
    type: String,
    required: false,
    unique: false
  },

  isSaved: {
    type: Boolean,
    default: false,
    required: false,
    unique: false
  },

//*** This is an object that stores the Note Id ***
  note: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Note'}],
  }
});

//*** This creates our model from the above schema, using mongoose's model method ***
var Article = mongoose.model("Article", ArticleSchema);

//*** Exporting the Article ***
module.exports = Article; 