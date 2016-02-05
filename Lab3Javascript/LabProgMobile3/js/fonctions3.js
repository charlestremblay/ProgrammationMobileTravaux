var nombre = Math.floor(Math.random() * 21);
var nombresaisi = prompt("Saisissez un nombre entre 0 et 20 : ");
if (nombresaisi > nombre)
{
	alert("Le nombre que l'on recherche est plus petit.");
	nombresaisi = prompt("Saisissez à nouveau un nombre entre 0 et 20 : ");
}
else if (nombresaisi < nombre)
{
	alert("Le nombre que l'on recherche est plus grand.");
	nombresaisi = prompt("Saisissez à nouveau un nombre entre 0 et 20 : ");
}
else
{
	alert("Félicitations! Vous avez deviner le nombre exact.");
	
}