var counter = (function () {
    // Private stuff
    let count = 15;
    function print(message){
        console.log(message +'----'+ count);
    }
    // Return an object
    return{
        value: count,
        set: function (valueToSet) {
            count = valueToSet;
            print('Value set: ');
        },
        increment: function() {
            count++;
            print('After increment');
        },
        reset: function() {
            print('Before reset:');
            count = 129;
            print('After reset');
        }
    }
})();
console.log(counter.value);
counter.set(30);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.reset();

