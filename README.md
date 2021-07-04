# Mjolnir

A data structures and algorithms library


## Package Contents

### Data Structures
1. Queue
2. Stack
3. Heap
4. SLL (singly linked list)

### Algorithms
1. search
    1. binarySearch() 
2. sort
    1. quickSort()
    2. bubbleSort()
    3. insertionSort()
    4. mergeSort()
    5. HeapSort()

## Usage

To install
```bash
npm i @skapoor8/mjolnir
```

Example:
```javascript
// testStack.js

const {Stack} = require('@skapoor8/mjolnir');

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.pop();
console.log(s.toString());
```

Run with ```bash node testStack.js ```

Output:
```
[1,2]
```

## API

### Data Structures

#### Stack
1. new Stack()
2. Stack.push(item)
3. Stack.pop()
4. Stack.isEmpty()
5. Stack.toString()

#### Queue
1. new Queue()
2. Queue.enqueue(item)
3. Queue.dequeue()
4. Queue.isEmpty()

#### Heap
1. new Heap(compare, order)

#### Singly Linked List (SLL)
1. new SLL()
2. SLL.push(item)
3. SLL.pop()
4. SLL.shift(item)
5. SLL.unshift()
6. SLL.reverse()
7. SLL.at(index)
8. SLL.put(index, item)
9. SLL.map(f)
10. SLL.toString()
11. SLL.fromArray()ß

### Algorithms

#### Search
1. binarySearch(Array/SLL, searchFunc)

#### Sort
1. quickSort()
2. bubbleSort()
3. insertionSort()
4. mergeSort()
5. heapSort()

## Philosophy
1. Well defined interfaces that enforce invariants
2. Idiomatic and interchangable interfaces - SLL should be interchangable with JS arrays throughout this lib

## Questions
1. Idiomatic error handling?
2. Printing to console?
3. Idiomatic interfaces?
4. Handling large data sets?

## Pending Improvements
1. Add iterators where appropriate
2. Typescript bindings
3. Add jsDocs
4. Add other data structures: set, trees, graphs, dll and cll
5. Add unit tests for data structures