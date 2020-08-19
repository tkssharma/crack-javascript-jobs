
/*
In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Wikipedia.
*/
function regularBracketsSequence2(b) {
    var stack = [];
    for (var i = 0; i < b.length; i++) {
        if (b[i] === '(' || b[i] === '[' || b[i] === '{') {
            stack.push(b[i]);
        } else if (
            (b[i].length > 0 &&
                b[i] === ')' &&
                stack[stack.length - 1] === '(') ||
            (b[i] === ']' && stack[stack.length - 1] === '[') ||
            (b[i] === '}' && stack[stack.length - 1] === '{')
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}