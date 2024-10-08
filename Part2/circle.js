// hidden detail
const _radius = new WeakMap();

// public interface
export class Circle {
    constructor (radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(`The radius is ${_radius.get(this)}!`);
    }
}