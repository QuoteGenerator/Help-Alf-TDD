// StringCalculator.js
function FindSpaceShip() {}
FindSpaceShip.prototype.add = function(galaxyMap) {

	const mapArray = galaxyMap.split("");
	console.log(mapArray);

	for(let i = 0; i < mapArray.length; i++){
		if(mapArray[i] == 'X'){
			return [i, 0];
		}
	}

	return galaxyMap == "" ? "NO SPACE!" : "Spaceship lost forever";
};
