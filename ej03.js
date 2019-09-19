const calcSurface = (figure) => {
    const surfaces = require ('./surfaces.js');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    switch (figure) {
        case 'square':
            process.stdout.write('Please enter the side of a square: ');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write('The surface of the square is ' + surface + ' square meters\n');
                process.stdin.destroy();
            });
            break;
        case 'triangle':
            process.stdout.write('Please enter the base and the height of a triangle, separated by a space: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write('The surface of the triangle is ' + surface + ' square meters\n');
                process.stdin.destroy();
            });
            break;
        case 'rectangle':
            process.stdout.write('Please enter the base and the height of a rectangle, separated by a space: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                process.stdout.write('The surface of the rectangle is ' + surface + ' square meters\n');
                process.stdin.destroy();
            });
            break;
        case 'circle':
            process.stdout.write('Please enter the radius of a circle: ');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write('The surface of the circle is ' + surface + ' square meters\n');
                process.stdin.destroy();
            });
            break;
        default:
            process.stdout.write('You missed the option. Please try again.\n');
            process.exit();
            break;
    }
}
calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Until next time my friend!\n');
});