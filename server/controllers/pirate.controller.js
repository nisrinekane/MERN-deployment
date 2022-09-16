const { Pirate } = require('../models/pirate.model');
const pirateRoutes = require('../routes/pirate.routes');

// create a project
module.exports.createPirate = (request, response) => {
    const { name, image, chests, pegLeg, eyePatch, hookHand, catchPhrase , crewPosition } = request.body;
    Pirate.create({
        name, 
        image, 
        chests, 
        pegLeg, 
        eyePatch, 
        hookHand, 
        catchPhrase , 
        crewPosition
    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

// list all pirates
module.exports.getAllPirates = (request, response) => {
    // Project.find({}, null, {sort: "name"})
    // new sorting that works also on capital letters
    Pirate.find()
        .then(pirates => response.json(pirates.sort((a, b) => a.name.localeCompare(b.name))))
        // .then(projects => response.json(projects))
        .catch(err => response.status(400).json(err));
}


// find/show one pirate
module.exports.getOnePirate = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

// update one pirate
module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err));
}

// delete one pirate
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err));
}
