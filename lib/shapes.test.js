const {circle, square, triangle} = require("./shapes");

// Runs a jest test for each classes, run 3 tests be rendered successfully with the specified color
describe('circle', () => {
    test('Successfully renders a circle!', () => {
      const shape = new circle();
      let color = 'pink';
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

describe('square', () => {
    test('Successfully renders a square!', () => {
        const shape = new square();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width="200" height="200" fill="${color}" />`);
    });
});

describe('triangle', () => {
    test('Successfully renders a triangle!', () => {
        const shape = new triangle();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,25 250,150 50,150" fill="${color}"/>`);
    });
});