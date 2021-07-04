class SLL {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    isEmpty() {
        return this.root == null;
    }

    get(n) {
        if (n >= 0 && n < this.length) {
            var selected;
            this._map(function(i, node) {
                if (i == n) {
                    selected = node.data;
                }
            }, n);
            return selected;
        } else {
            return undefined;
        }
    }

    put(n, val) {
        if (n >= 0 && n < this.length) {
            this._map((i, node) => {
                if (i == n) {
                    node.data = val;
                    return true;
                }
            }, n);
        } else {
            return undefined;
        }
    }

    push(data) {
        var itr = this.root,
            last;
        while (itr != null) {
            if (itr.next == null) {
                last = itr;
            }
            itr = itr.next;
        }
        if (last) {
            last.next = new SLLNode(data);
        } else {
            this.root = new SLLNode(data);
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        } else if (this.length == 1) {  
            var only = this.root;
            this.root = null;
            this.length--;
            return only.data;
        } else {
            var secondToLast,
                last;

            this._map((i, node) => {
                if (node.next && node.next.next == null) {
                    secondToLast = node;
                    last = node.next;
                }
            });
            
            secondToLast.next = null;
            this.length--;
            return last.data;
        }
        
    }

    shift(data) {
        var node = new SLLNode(data, this.root);
        this.root = node;
        this.length++;
    }

    unshift() {
        if (!this.isEmpty()) {
            var first = this.root,
                rest = first.next;
            first.next = null;
            this.root = rest;
            this.length--;
            return first.data;
        } else {
            return undefined;
        }
    }

    reverse() {
        var reversed = new SLL();
        this._map((i, node) => {
            reversed.unshift(node.data);
        });
        console.log('reversed = ', reversed.toArray(), reversed.root);
        this.root = reversed.root;
    }

    _map(callback, maxIndex) {
        var itr = this.root,
            i = 0;
        
        if (!maxIndex) {
            maxIndex = this.length;
        }

        while (itr != null && i <= maxIndex) {
            callback(i, itr);
            itr = itr.next; i++;
        }
    }

    toString() {
        return this.toArray().toString();
    }

    toArray() {
        var array = [];
        this._map((i, node) => {
            array.push(node.data);
        });
        return array;
    }

    static fromArray(array) {
        var sll = new SLL();
        array.forEach(data => {
            sll.shift(data);
        });
        return sll;
    }
    // from object
    // make iterable
    // array interface
    // obj interface
}


class SLLNode {
    constructor(data, next=null) {
        this.d = data;
        this.n = next;
    }

    get data() {return this.d;}
    get next() {return this.n;}
    set data(newData) {this.d = newData;}
    set next(newNext) {this.n = newNext;}

    hasNext() {
        return !!this.next;
    }
}

module.exports = SLL;