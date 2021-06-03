//Importando el JSON para poder interpretarlo y transformarlo a datos
const fs = require('fs');
var data;

fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  data = JSON.parse(data);
  readData(data);
});

//Construyo una función para transformar el JSON en datos que pueda manipular
function readData (data) {
  const people = data.data;

  //Año específico donde hubo más vivos
  let specificYear = 0;

  //Cantidad de personas vivas
  let alive = 0;

  //Menor año de los nacimientos existentes
  const minBirthYear = people.sort((a, b) => {
    return a.birthYear - b.birthYear;
  })[0].birthYear;

  //Mayor año de las muertes existentes
  const maxDeathYear = people.sort((a, b) => {
    return b.deathYear - a.deathYear;
  })[0].deathYear;

  for (let i = minBirthYear; i <= maxDeathYear; i++) {
    //Contador de personas vivas en la iteración
    let counter = 0;

    for (let j = 0; j < people.length; j++) {

      if (people[j].birthYear <= i && i <= people[j].deathYear) {
        counter++;
      };
    };
    
    if (counter > alive) {
      //Mi variable "specificYear" toma el valor de i al comprobar la condición
      specificYear = i;
      //El valor de mi contador ahora lo tiene mi variable "alive" que me va a mostrar cuántos vivos hay en ese año
      alive = counter;
    };
  };
  console.log(`En el año ${specificYear} hubo ${alive} personas vivas.`);
};