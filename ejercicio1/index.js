let string;

//Defino una función donde pasaré mis dos argumentos

function repeatString (str, times) {
    
    if (times === 1 ) {

        return str;
    }
    return (str + '\n' + repeatString(str, times - 1));
};

string = repeatString('Alejandro Palacio', 1000);

console.log(`REPEATING A WORD 1000 TIMES:\n${string}`);