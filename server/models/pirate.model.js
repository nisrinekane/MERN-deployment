const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// our schema
const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'name is taken'],
    required: [true, 'please enter a song name'],
    minlength: [3, 'pirate name must be at least 3 characters']
  },
  image: {
    type: String,
    required: [true, 'enter pirate image'],
    minlength: [3, 'sorry, pirate image needs to be at least 3 characters']
  },
  chests: {
    type: Number,
    required: [true, 'please enter a number of treasures'],
    min: [0, 'pirate description cannot be negative']
  },
  pegLeg: {
    type: Boolean,
  },
  eyePatch: {
    type: Boolean,
  },
  hookHand: {
    type: Boolean,
  },
  catchPhrase : {
    type: String,
    required: [true, 'please pick a catchphrase'],
    minlength: [3, 'catch phrase need to be greater than 3 characters']
  },
  crewPosition: String,
}, { timestamps: true });

// export and set product  to a model which take the name of the schema and schema itself as args
PirateSchema.plugin(uniqueValidator);
module.exports.Pirate = mongoose.model("Pirate", PirateSchema)

// store date:
// let newDate = new Date();
// store img:
// img: String > src={pirate.image}