const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');

const generateSvg= ({color, shape, backgroundcolor })=>
`const svgNew=[];
const svgFile= document.createElementNS(svgNew, 'svg);
svgFile.setAttribute("color", ${color});
svgFile.setAttribute("shape", ${shape});
svgFile.setAttribute("backgroundcolor", ${backgroundcolor});
`
inquirer
.prompt([
    {
        type: 'input',
        name: 'color',
        message: 'What do you want to be your text color?',
  
    },
    {
        type: 'cehckbox',
        name: 'shape',
        message: 'What is the shape of your logo should look a like?',
        choices:['triangle', 'circle', 'square'],
  
    },
    {type: 'input',
    name: 'backgroundcolor',
    message: 'What is your prefered color for shape?',},

]).then((answers)=>{

})