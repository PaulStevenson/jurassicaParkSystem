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
    this.dinoCollection.pop(dino);
};

// Park.prototype.calculateMostPopular = function () {
//      dino1 = Dinosaur.guestsAttractedPerDay;
//      dino2 = Dinosaur.guestsAttractedPerDay;
//
//     if (dino1 > dino2 ){
//         return dino1;
//     }
//         else {
//         return ; }
//     }
// }

module.exports = Park;
