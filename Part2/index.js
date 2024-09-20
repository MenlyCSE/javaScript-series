
class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle move');
    }
}

class Square extends Circle {
    move() {
        super.move();
    }
}

const c = new Circle();
const s = new Square();