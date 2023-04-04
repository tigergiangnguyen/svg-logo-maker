# 10 Object-oriented Programming: SVG Logo Maker

## Table of Content

 - [Description](#description)
 - [Installation](#installation)
 - [Tests](#tests)
 - [Credits](#credits)

## Description

This challenge is to create a SVG (Scalable Vector Graphics) file that takes in user's input to the command line and generates a image. No need for HTML and CSS to make an image for the user while there are other ways to accomplish this task. The user only needs to answer 4 prompt questions and an image to render the choices choosen. This application is ran locally so doesn't run through a browser and before doing this challenge, I ask myself how do I test this application without running in a browser to see the errors. Jest.js is a package that runs tests locally, which means can be ran without a browser!

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Installation

These are the packages required to run the application.

 - Node.js
 - Inquirer
 - Jest

## Tests

Link to the full walkthrough video: https://drive.google.com/file/d/1umHpjbz5BrfodP6p_sU5GzRllhMPX7Q8/view

First I will run a jest test to see If the three shape created passes then will demonstrate the functionality of the application!

![Demo](examples/Demo.gif)

## Credits

Tiger Nguyen (Me)