// setTimeout(function () {
//     console.log('It took me 5 seconds');
// }, 2000)

/*The followings are errors
===================================

function secNum (secs) {
    console.log('It took me '+ secs);
} 

secsTot = 3;
setTimeout (function secNum (secsTot),1000);

*/


// let counter = 0;
// function timeout() {
//     setTimeout(function() {
//         console.log('Hi' + counter++);
//         timeout();
//     }, 2000);
// }
// timeout();
// // Ctrl + c

(function() {
    console.log('Immediately Invoked functions expressions(IIFE)');
})();