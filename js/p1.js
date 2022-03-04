class Square {
    constructor (side) {
        this.side = side;
    }

    perimeter () {
        return 4 * this.side;
    }

    area () {
        return this.side * this.side;
    }

    diagonal () {
        return Math.sqrt(2*this.side*this.side);
    }

    describe() {
      return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}.`  
    }
}

square1= new Square(2)
console.log(square1.describe());
square2= new Square(5)
console.log(square2.describe());
square3= new Square(8)
console.log(square3.describe());