const _array = new WeakMap();

class Stack {
    constructor() {
        _array.set(this, []);
    }

    // private methods
    #checkForEmptyStack() {
        if (_array.get(this).length === 0)
            throw new Error('Stack is empty!');

        return;
    }

    // public methods
    get count() {
        return _array.get(this).length;
    }

    get peek() {
        this.#checkForEmptyStack()
        return _array.get(this)[_array.get(this).length - 1];
    }

    push(obj) {
        _array.get(this).push(obj);
    }

    pop() {
        this.#checkForEmptyStack()
        _array.get(this).pop()
    }
}

const stack = new Stack();