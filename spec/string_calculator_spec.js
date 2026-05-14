describe('Find SpaceShip', function() {
	beforeEach(function() {
		FindSpaceShip = new FindSpaceShip();
	});

	it('should return 0 for an empty string', function() {
		expect(FindSpaceShip.add('')).toEqual(0);
	});
});
