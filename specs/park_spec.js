const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;
    let dino1
    let dino2


  beforeEach(function () {
      park = new Park( "Crater", 10);
      dino1 = new Dinosaur('t-rex', 'carnivore', 50);
      dino2 = new Dinosaur('brachi', 'herbivore', 40);
  })

  it('should have a name', function () {
      assert.strictEqual(park.name, "Crater");
  } );

  it('should have a ticket price', function () {
      assert.strictEqual(park.ticketPrice, 10);
  });

  it('should have a collection of dinosaurs', function (){
      assert.deepStrictEqual( park.countDinos(), 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
      park.addDino(dino1);
      assert.deepStrictEqual( park.countDinos(), 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
      park.addDino(dino1);
      park.addDino(dino2);
      park.removeDino(dino1);
      assert.deepStrictEqual( park.countDinos(), 1);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {
      park.addDino(dino1);
      park.addDino(dino2);
      const actualValue = park.calculateMostPopular();
      assert.deepStrictEqual(actualValue, dino1);
  });

  xit('should be able to find all dinosaurs of a particular species', function () {
      park.addDino(dino1);
      park.addDino(dino2);
      const actualValue = park.groupDinoBySpecies();

  });

  it('should be able to remove all dinosaurs of a particular species');

});
