function showCoords(event)
{
	var x = event.clientX;
	var y = event.clientY;
	var coordsX = "Position de la souris en X : " + x;
	var coordsY = "Position de la souris en Y : " + y;
	
	document.getElementById("para1").innerHTML = coordsX;
	document.getElementById("para2").innerHTML = coordsY;
}