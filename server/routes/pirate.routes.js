// get the 'class methods' which we'll apply accroding to each end point
const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.post('/api/new', PirateController.createPirate);
    app.get('/api/', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    app.put('/api/pirates/edit/:id', PirateController.updatePirate); //added edit to the end of url
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}