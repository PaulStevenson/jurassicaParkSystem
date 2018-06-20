const Dinosaur = require('../models/dinosaur.js');

const Park = function( name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};

Park.prototype.countDinos = function () {
    return this.dinoCollection.length;
};

Park.prototype.addDino = function (dino) {
    this.dinoCollection.push(dino);
};

Park.prototype.removeDino = function (dino) {
    const index = this.dinoCollection.indexOf(dino)
    this.dinoCollection.splice(index, 1);
};

// Park.prototype.calculateMostPopular = function () {
//     dino1 = Dinosaur.guestsAttractedPerDay;
//     dino2 = Dinosaur.guestsAttractedPerDay;
//
//     if (dino1 > dino2 ){
//         return dino1;
//      }
//         else {
//          return dino2;
//      }
// };

module.exports = Park;
