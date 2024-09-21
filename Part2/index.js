// DSA: stack

class Stack {
    constructor() {
        let array = [];

        function checkForEmptyStack() {
            if (array.length === 0) 
                throw new Error('Stack is empty!');

            return;
        }

        this.count = 0;
        
        this.push = function(obj) {
            array.push(obj);
            this.count = array.length;
        }

        this.pop = function() {
            checkForEmptyStack();
            console.log(array[array.length-1]);
            array.pop();
            this.count = array.length;
        }
        
        this.peek = function() {
            checkForEmptyStack();
            return array[array.length-1];
        }
    }
}

const stack = new Stack();