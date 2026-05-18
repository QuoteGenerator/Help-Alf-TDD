describe('Find SpaceShip', function() {
	beforeEach(function() {
		spaceShipFinder = new FindSpaceShip();
	});

	it('should return "NO SPACE" for an empty string', function() {
		let MAP = "";
		expect(spaceShipFinder.add(MAP)).toEqual("NO SPACE!");
	});

	it('should return "Spaceship lost forever" for a string with no X', function() {
		let MAP = ".....";
		expect(spaceShipFinder.add(MAP)).toEqual("Spaceship lost forever");
	});


});
