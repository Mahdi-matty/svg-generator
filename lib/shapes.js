// fill is used to paint the svg files.
class Triangle {
    constructor(x, y, width, height, setColor){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.setColor= setColor;
    }

    // }drawTrian(){
    //     `<polygon points="${Triangle.x}, ${Triangle.y} ${Triangle.x + Triangle.width}, ${Triangle.y + Triangle.height} ${Triangle.x - Triangle.width}, ${Triangle.y + Triangle.height}" fill="${Triangle.setColor}"/>`
    // }
}
Triangle.prototype.drawTrain=function(){
    return `<polygon points="${this.x}, ${this.y} ${this.x + this.width}, ${this.y + this.height} ${this.x - this.width}, ${this.y + this.height}" fill="${this.setColor}"/>`
}
class Square extends Triangle {
    constructor(x, y, width, height, setColor,){
        super(x, y, width, height, setColor);
    // }drawSq(){
    //     `<rect x="${Square.x}" y="${Square.y}" width="${Square.width}" height="${Square.height}" fill="${setColor}" />`
    // }}
    }
}
Square.prototype.drawSq= function(){
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.setColor}" />`
}
class Circle {
    constructor(x, y, radius, setColor){
        this.x=x;
        this.y=y;
        this.setColor=setColor;
        this.radius= radius;
    }
}
Circle.prototype.drawCir=function(){
   return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.setColor}" />`
}
module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square

};