// StringCalculator.js
function FindSpaceShip() {}
FindSpaceShip.prototype.add = function(galaxyMap) {

	if(galaxyMap == "") {return "NO SPACE!"}
	if(!galaxyMap.includes('X')) {return "Spaceship lost forever"}
	
	const mapArray = galaxyMap.split("\n");
	mapArray.reverse();

	for(let y = 0; y < mapArray.length; y++){
		for(let x = 0; x < mapArray[y].length; x++){
			if(mapArray[y][x] == "X"){
				console.log(mapArray)
				return [x, y];
			}
		}
	}
	
	
};
