describe('Find SpaceShip', function() {
	beforeEach(function() {
		FindSpaceShip = new FindSpaceShip();
	});

	it('should return "NO SPACE" for an empty string', function() {
		let MAP = "";
		expect(FindSpaceShip.add(MAP)).toEqual("NO SPACE");
	});
});
