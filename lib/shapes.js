// Created an empty array and fills the text when a object (shape) is created
class shape {
    constructor() {
        this.text = '';
    }
    setColor(shapeColor) {
        this.text = (shapeColor);
        }
    }

    class circle extends shape {
        setColor(shapeColor) {
            this.text = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        }
        render() {
            return this.text;
        }
    };

    class square extends shape {
        setColor(shapeColor) {
            this.text = `<rect width="15%" height="25%" fill="${shapeColor}" />`;
        }
        render() {
            return this.text;
        }
    };

    class triangle extends shape {
        setColor(shapeColor) {
            this.text = `<polygon points="150,25 250,150 50,150" fill="${shapeColor}"/>`;
        }
        render() {
            return this.text;
        }
    };
    
    module.exports = {circle, square, triangle};