function greet(name) {
    return function() {
        console.log('Howdy '+ name);
    }
}

let rezi = greet('ndahimana');
rezi();

