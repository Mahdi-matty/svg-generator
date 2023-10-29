const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const Circle = shapes.Circle;
const Triangle=shapes.Triangle;
const Square=shapes.Square;

const generateSvg = ({ color, shape, backgroundcolor }) => {
    let svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" style="background-color:${backgroundcolor}">`;

    shape.forEach(selectedShape => {
        let shapeSvg;
        switch (selectedShape) {
            case 'triangle':
                shapeSvg = `<polygon points="50,0 100,100 0,100" fill="${color}" />`;
                break;
            case 'circle':
                shapeSvg = `<circle cx="50" cy="50" r="50" fill="${color}" />`;
                break;
            case 'square':
                shapeSvg = `<rect x="0" y="0" width="100" height="100" fill="${color}" />`;
                break;
            default:
                shapeSvg = '';
            }
            svgContent += shapeSvg;
        });
    
        svgContent += `</svg>`;
        return svgContent;
    };
inquirer
.prompt([
    {
        type: 'input',
        name: 'color',
        message: 'What do you want to be your text color?',
  
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'What is the shape of your logo should look a like?',
        choices:['triangle', 'circle', 'square'],
  
    },
    {type: 'input',
    name: 'backgroundcolor',
    message: 'What is your prefered color for shape?',},

]).then((answers)=>{
    const svgContent = generateSvg(answers);
})