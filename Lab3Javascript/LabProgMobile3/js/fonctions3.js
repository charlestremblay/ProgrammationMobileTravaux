var nombre = Math.floor(Math.random() * 21);
var nombresaisi = prompt("Saisissez un nombre entre 0 et 20 : ");
if (nombresaisi > nombre)
{
	alert("Le nombre que l'on recherche est plus petit.");
	nombresaisi = prompt("Saisissez � nouveau un nombre entre 0 et 20 : ");
}
else if (nombresaisi < nombre)
{
	alert("Le nombre que l'on recherche est plus grand.");
	nombresaisi = prompt("Saisissez � nouveau un nombre entre 0 et 20 : ");
}
else
{
	alert("F�licitations! Vous avez deviner le nombre exact.");
	
}