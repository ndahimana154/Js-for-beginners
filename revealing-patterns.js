var counter = (function() {
    let count = 4;
    function msgPrint(message) {
        console.log(message +' ' +count);
    }
    function setValue(valueToSet) {
        count = valueToSet;
        msgPrint('Wee set:' );
    }
    function setIncrement() {
        msgPrint('Before incrementing -------');
        vI= 40;  
        count += vI;
        msgPrint('After incrementing by '+ vI +'  --------');
    }
    return{
        set: setValue,
        Increment: setIncrement
    }
})();

counter.set(10);
counter.Increment();