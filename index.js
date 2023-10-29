const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
const Square = shapes.Square;

const generateSvg = ({ color, text, shape, backgroundcolor }) => {
    let svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`

    shape.forEach(selectedShape => {
        let shapeSvg;
        switch (selectedShape) {
            case 'triangle':
                const triangle = new Triangle(0, 0, 300, 200);
                shapeSvg = `<polygon points="${triangle.x},${triangle.y} ${triangle.x + triangle.width},${triangle.y + triangle.height} ${triangle.x - triangle.width},${triangle.y + triangle.height}" fill="${backgroundcolor}" />`;
                break;
            case 'circle':
                const circle = new Circle(500, 500, 300);
                shapeSvg = `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.radius}" fill="${backgroundcolor}" />`;
                break;
            case 'square':
                const square = new Square(0, 0, 250, 250);
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