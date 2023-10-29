// fill is used to paint the svg files.
class Triangle {
    constructor(x, y, width, height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
}
class Square extends Triangle {
    constructor(x, y, width, height){
        super(x, y, width, height);
    }
}
class Circle {
    constructor(x, y, radius){
        this.x=x;
        this.y=y;
        this.radius= radius;
    }
}
const newTriangle = new Triangle(
    '0',
    '0',
    '300',
    '200'
)
const newSquare = new Square(
    '0',
    '0',
    '200',
    '200'
)
module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square

};