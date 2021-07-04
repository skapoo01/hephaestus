class Stack {
    constructor() {
        this.s = [];
    }

    get length() {return this.s.length;}

    isEmpty() {
        return this.s.length == 0;
    }

    push(data) {
        this.s.push(data);
    }

    pop() {
        return this.s.pop();
    }

    toString() {
        return this.s.toString();
    }
}

module.exports = Stack;