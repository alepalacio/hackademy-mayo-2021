const equipo = ["PSG", "Chicago Bulls", "Tomateros", "Isotopos", "Rangers", "Isotopos"];
const campeonatos = ["3", "5", "6", "4", "2", "9"];

console.log('METODO MAP() Y SORT()\n');

let duplicados = 0;
let sumDuplicados = 0;
let campeon;

const campeonesDesordenados = equipo.map((el,i) =>  [el, campeonatos[i]]);

const campeonesOrdenados = campeonesDesordenados.sort((a, b) => {
    return b[1] - a[1]
});
//console.log(campeonesOrdenados);

//Hacemos un for para poder unir los campeonatos del equipo repetido
for (let i in campeonesOrdenados) {
    if (campeonesOrdenados[i][0] === 'Isotopos') {
        duplicados = Number(campeonesOrdenados[i][1]);
        sumDuplicados += duplicados;
        campeon = campeonesOrdenados[i][0]
        //console.log(sumDuplicados);
    };
};
console.log(`El equipo más ganador es ${campeon} con ${sumDuplicados} campeonatos`);

//Y hacemos otro for para recorrerlos y mostrarlos en consola
for (let j in campeonesOrdenados) {
    if (campeonesOrdenados[j][0] !== campeon) {
      console.log(`luego sigue ${campeonesOrdenados[j][0]} con ${campeonesOrdenados[j][1]} campeonatos`)
    }
};

console.log('\nMETODO FOREACH() Y REVERSE()\n');

let campeones_desordenados = []
let campeones_ordenados = []
let hay_duplicados = 0;
let sum_duplicados = 0;
let el_campeon;

campeonatos.forEach((el, i) => {
    campeones_desordenados[el] = equipo[i]
});

campeones_ordenados = Object.entries(campeones_desordenados).reverse();

for (let i in campeones_ordenados) {
  if (campeones_ordenados[i][1] === 'Isotopos') {
    hay_duplicados = Number(campeones_ordenados[i][0]);
    sum_duplicados += hay_duplicados;
    el_campeon = campeones_ordenados[i][1];
  };
};
console.log(`El equipo más ganador es ${el_campeon} con ${sum_duplicados} campeonatos`);

for (let j in campeones_ordenados) {
    if (campeones_ordenados[j][1] !== el_campeon) {
      console.log(`luego sigue ${campeones_ordenados[j][1]} con ${campeones_ordenados[j][0]} campeonatos`);
    };
};