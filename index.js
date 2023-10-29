const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
const Square = shapes.Square;

const generateSvg = ({ color, text, shape, backgroundcolor }) => {
    let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

    shape.forEach(selectedShape => {
        let shapeSvg;
        switch (selectedShape) {
            case 'triangle':
                const triangle = new Triangle(0, 0, 300, 200);
                shapeSvg = `<polygon points="${triangle.x},${triangle.y} ${triangle.x + triangle.width},${triangle.y + triangle.height} ${triangle.x - triangle.width},${triangle.y + triangle.height}" fill="${backgroundcolor}" />`;
                break;
            case 'circle':
                const circle = new Circle(150, 100, 80);
                shapeSvg = `<circle cx="${circle.x}" cy="${circle.y}" r="${circle.radius}" stroke="black" stroke-width="5" fill="${backgroundcolor}" />`;
                break;
            case 'square':
                const square = new Square(0, 0, 20, 20);
                shapeSvg = `<rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${backgroundcolor}" />`;
                break;
            default:
                shapeSvg = '';
        }
        svgContent += shapeSvg;
    });

    svgContent += `<text x="50%" y="50%" fill="${color}" text-anchor="middle" alignment-baseline="middle">${text}</text>`;

    svgContent += `</svg>`;
    return svgContent;
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'please enter your logo (3 characters)?',
        },
        {
            type: 'input',
            name: 'color',
            message: 'What do you want to be your text color?',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'What is the shape of your logo should look like?',
            choices: ['triangle', 'circle', 'square'],
        },
        {
            type: 'input',
            name: 'backgroundcolor',
            message: 'What is your preferred color for shape?',
        },
    ])
    .then((answers) => {
        const svgContent = generateSvg(answers);

        writeFile('logo.svg', svgContent)
            .then(() => console.log('Successfully created logo.svg!'))
            .catch((err) => console.error(err));
    });