var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var AddressSchema = new Schema({
  a_id: { type: String, unique: true, index: true},
  txs: { type: Array, default: [] },
  received: { type: Number, default: 0 },
  sent: { type: Number, default: 0 },
  balance: {type: Number, default: 0},
  transaction: {type: Number, default: 0},
  incoming: {type: Number, default: 0},
  outgoing: {type: Number, default: 0},
}, {id: false});

module.exports = (conn) => conn.model('Address', AddressSchema);

