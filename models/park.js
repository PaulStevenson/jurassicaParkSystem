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

Park.prototype.calculateMostPopular = function () {
    let mostPopularDino = this.dinoCollection[0];

    for(const dino of this.dinoCollection){
        if (dino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay){
            mostPopularDino = dino;
        }
    }
    return mostPopularDino;
};

module.exports = Park;
