const shapes = require('./shapes');

const Triangle = shapes.Triangle;
const Circle= shapes.Circle;
const Square = shapes.Square;

describe('Triangle', ()=>{
    describe('drawTrain', ()=>{
        it('should take x and y position of top left, also width and height of rectangle and draw rectangle', ()=>{
            const triangle = new Triangle(150, 18, 94, 164, "blue");
            expect(triangle.drawTrain()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')
    })
    })
    
})

describe('Circle', ()=>{
    describe('drawCir', ()=>{
        it('should take two points as start and radius and give back circle detail', ()=>{
            const circle = new Circle(150, 100, 80, "blue");
            expect(circle.drawCir()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)

        })
    })
})

describe('Square', ()=>{
    describe('drawSq', ()=>{
        it('should take x and y position of top left, also width and height of rectangle and draw rectangle', ()=>{
            const square = new Square(0, 0, 200, 200, "blue");
            expect(square.drawSq()).toEqual(`<rect x="0" y="0" width="200" height="200" fill="blue" />`)
    })
    })
    
})