let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}


// str is the string to parse
function checkBrackets(str){
    // depth of the parenthesis
    // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
    var depth = 0;
    // for each char in the string : 2 cases
    for(var i in str){   
        if(str[i] == '('){
            // if the char is an opening parenthesis then we increase the depth
            depth ++;
        } else if(str[i] == ')') {
            // if the char is an closing parenthesis then we decrease the depth
            depth --;
        }  
        //  if the depth is negative we have a closing parenthesis 
        //  before any matching opening parenthesis
        if (depth < 0) return false;
    }
    // If the depth is not null then a closing parenthesis is missing
    if(depth > 0) return false;
    // OK !
    return true;
}
console.log(checkBrackets('( ( a + b ) / 5 – d )')); // true

