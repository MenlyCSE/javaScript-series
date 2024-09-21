// DSA: stack

class Stack {
    constructor() {
        let array = [];

        this.count = array.length;

        this.push = function(obj) {
            array.push(obj);
            this.count = array.length;
        }

        this.pop = function() {

        }
        
        this.peek = function() {
            return array[this.count];
        }
    }
}

const stack = new Stack();