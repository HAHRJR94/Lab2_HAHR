const calcSurface = (figure) => {
    const surfaces = require ('./surfaces.js');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    switch (figure) {
        case 'cuadrado':
            process.stdout.write('Ingresa el lado de un cuadrado: ');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.cuadrado(side);
                process.stdout.write('La superficie del cuadrado es ' + surface + ' metros cuadrados \n');
                process.stdin.destroy();
            });
            break;
        case 'triangulo':
            process.stdout.write('Ingresa la base y la altura de un triangulo, separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangulo(base, height);
                process.stdout.write('La superficie del triangulo es ' + surface + ' metros cuadrados \n');
                process.stdin.destroy();
            });
            break;
        case 'rectangulo':
            process.stdout.write('Ingresa la base y la altura de un rectangulo, separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangulo(base, height);
                process.stdout.write('La superficie del rectangulo es ' + surface + ' metros cuadrados \n');
                process.stdin.destroy();
            });
            break;
        case 'circulo':
            process.stdout.write('Ingresa el radio de un circulo: ');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circulo(parseFloat(chunk));
                process.stdout.write('La superficie del circulo es ' + surface + ' metros cuadrados \n');
                process.stdin.destroy();
            });
            break;
        default:
            process.stdout.write('Te equivocaste de opcion. Por favor intenta otra vez.\n');
            process.exit();
            break;
    }
}
calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Hasta la próxima mi amigo!\n');
});