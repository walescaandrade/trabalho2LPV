$('.mostrarPerson').on('click', function() {
	
	var person = document.querySelector("#people")
 	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/people/' + person.value + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
		alert(erro.responseText);
	},
	success: function(data) {
	var divPerson = document.querySelector("#contPerson");
	divPerson.innerHTML = "";
	divPerson.innerHTML += "Nome: " + data.name + "<br/> Altura: 	" + data.height + "<br/>Ano Nasc.: " + data.birth_year + 	"<br/>Genero: " + data.gender + "<br/>";
	}});
});

$('.mostrarPlanet').on('click', function() {
	
	var planet = document.querySelector("#planet")
 	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/' + planet.value + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
		alert(erro.responseText);
	},
	success: function(data) {
	var divPerson = document.querySelector("#contPlanet");
	divPerson.innerHTML = "";
	divPerson.innerHTML += "Nome: " + data.name + "<br/> Rotação: 	" + data.rotation_period + "<br/>Orbita.: " + data.orbital_period + 	"<br/>População: " + data.population + "<br/>";
	}});
});

$('.mostrarStarship').on('click', function() {
	
	var starShip = document.querySelector("#nave")
 	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/starships/' + starShip.value + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
		alert(erro.responseText);
	},
	success: function(data) {
	var divPerson = document.querySelector("#contNave");
	divPerson.innerHTML = "";
	divPerson.innerHTML += "Nome: " + data.name + "<br/> Modelo: 	" + data.model + "<br/>Fabricante: " + data.manufacturer + 	"<br/>Comprimento: " + data.length + "<br/>Passageiros: " + data.passengers + "<br>";
	}});
});