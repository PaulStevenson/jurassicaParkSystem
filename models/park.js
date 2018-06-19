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

module.exports = Park;
