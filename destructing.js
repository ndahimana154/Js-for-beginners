let a, b, c, d, e;
let names = [ 'ndahimana', 'akimana', 'uwera', 'sabyera', 'samvura' ];

[a, b, c, d, e] = names;
console.log([a, b, c, d, e]);


let others;
[a, b, ...others] = names;

console.log(others);