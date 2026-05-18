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

	it('should return Coordinates "[2,0]" for a one line Map-string with 1 X in the Map', function() {
		let MAP = "..X..";
		expect(spaceShipFinder.add(MAP)).toEqual([2,0]);
	});

});
