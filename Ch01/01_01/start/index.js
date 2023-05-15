function hideString(str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

var hidden = hideString("Hello Worldjjjjjjjjjjj");

console.log( hidden );
