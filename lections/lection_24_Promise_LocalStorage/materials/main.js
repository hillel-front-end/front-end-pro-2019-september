console.log('Lection 24');

function getAsyncFunc(timer = 1000) {
    let async = new Promise(function(resolve, reject){
        console.log(`Timer start: ${timer}`)
        setTimeout(function(){
            console.log(`Timer end: ${timer}`)
            resolve(timer);
            // reject(200);
        }, timer);
    });

    return async;
}




// getAsyncFunc()
//     .then(function(value){
//         console.log('Resolve:', 2, ' Value:', value);

//         return value/10;
//     }, function(value) {
//         console.log('Reject:', 2, ' Value:', value);

//         // return value*10;
//         // return Promise.reject(value*10);

//         // return new Promise(function(resolve, reject){
//         //     setTimeout(function(){
//         //         reject(value*10)
//         //     }, 2000)
//         // });

//         return getAsyncFunc(2000);
//     })
//     .then(function(value){
//         console.log('Resolve:', 3, ' Value:', value);
//     }, function(value) {
//         console.log('Reject:', 3, ' Value:', value);
//     })
//     .finally(function(){
//         console.log('Final result');
//     })
    


// -----------------------


// getFile('/data_1.json')
//     .then(function(resp){

//         getFile('/data_2.json')
//             .then(function(resp2){
//                 console.log(resp.concat(resp2));
//             });
//     })
    // .then(function(resp2){
    //     console.log(resp.concat(resp2));
    // });

// Promise
//     .all([
//         getAsyncFunc(1000),
//         getAsyncFunc(3000),
//         getAsyncFunc(100),
//         getAsyncFunc(5000),
//     ])
//     .then(function(list){
//         console.log(list);
//     })
//     .catch(function(error){
//         console.error(error);
//     })


// -------------------------



