class Shape {
    name: string
    color: string
    constructor(name: string, color: string) {
        this.name = name
        this.color = color
    }
}
class Triangle extends Shape {
    side1: number
    side2: number
    side3: number
    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color)
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }
    getside1(): number {
        return this.side1
    }
    getside2(): number {
        return this.side2
    }
    getside3(): number {
        return this.side3
    }
    getArea(): number {
        return (Math.sqrt(this.getPerimeter()*(this.getPerimeter()-this.side1)*(this.getPerimeter()-this.side2)*(this.getPerimeter()-this.side3)))
    }
    getPerimeter(): number {
        return (this.side1 + this.side2 + this.side3)
    }
}