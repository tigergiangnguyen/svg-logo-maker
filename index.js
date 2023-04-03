// Required imports
const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require("./lib/shapes");

// Takes in the user's input and creates a svg logo
function svgLogo ({text, textColor, shape, shapeColor}, renderInput) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderInput}
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
};

// An array of four objects that returns promises to log the user's input to the console
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color (OR a hexdecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape.',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color (OR a hexdecimal number):'
        },
    ])
// Depending on which shape the user chooses, the data represents the all answers provided   
    .then((data) => {
        var renderInput = '';
        if(data.shape == 'circle') {
            const shapeCircle = new circle();
            shapeCircle.setColor(data.shapeColor);
            renderInput = shapeCircle.render();
        } 
        else if (data.shape == 'triangle') {
            const shapeTriangle = new triangle();
            shapeTriangle.setColor(data.shapeColor);
            renderInput = shapeTriangle.render();
        }
        else if (data.shape == 'square') {
            const shapeSquare = new square();
            shapeSquare.setColor(data.shapeColor);
            renderInput = shapeSquare.render();
        }
// Writes the name of the file with data and uses a callback function to see If successful or failed. 
        const input = svgLogo(data, renderInput);
        fs.writeFile('logo.svg', input, (err) => err ? console.log(err) : console.log('Successfully created logo.svg!'));
    })
    .catch((error) => {
        console.log("NOT Successful", error);
    });