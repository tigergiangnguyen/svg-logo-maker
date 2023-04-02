const {circle, square, triangle} = require("./shapes");

describe('circle', () => {
    test('Successfully renders a circle!', () => {
      const shape = new circle();
      let color = ('red');
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

describe('square', () => {
    test('Successfully renders a square! ', () => {
        const shape = new square();
        let color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width="35%" height="35%" fill="${color}" />`);
    });
});

describe('triangle', () => {
    test('Successfully renders a triangle!', () => {
        const shape = new triangle();
        let color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,25 250,150 50,150" fill="${color}"/>`);
    });
});