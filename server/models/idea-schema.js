const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ideaSchema = new Schema(
  {
    ideaName: {
      type: String
    },
    description: {
      type: String
    },
    proposer: {
      type: String
    },
    department: {
      type: String
    },
    status: {
      type: String
    }
  },
  {
    collection: 'ideas'
  }
);
  
module.exports = mongoose.model('Idea', ideaSchema);
