// request('GET', '/info/user.json');

function success(data) {
    console.log(data);
    
    if(data && data.user && data.user.friends) {
        return data.user.friends;
    }

    return [];
}

function render(friends){
    let template = `
        <div id="container">
            <ul>
                ${friends.map(function(value){ return `<li>${value}</li>`}).join('')}
            </ul>
        </div>
    `;

    let container = document.querySelector('#container');
    container && container.remove();

    document.body.innerHTML += template;
}



function request(method, path) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4) {
            // console.log(xhr)
            success(xhr);
        }
    });
    xhr.open(method, path, true);
    xhr.send();
}

// Promise



// var userData = new Promise(function(resolve, reject){
//     var x = Math.floor(Math.random()*10) - 5;
//     setTimeout(function(){
//         console.log('TIMER 1 sec', x);
//         if(x > 0) {
//             resolve(x);
//         } 

//         reject(x);
//     }, 1000);  
// });
// // console.log(userData);


// userData
//     .then(
//         function(resp){
//             console.log('THEN RESOLVe', resp);
//         }, 
//         function(error){
//             console.log('THEN REJECT', error);
//         }
//     );


// userData.then(function(resp){
//     console.log(resp);
// });

function filterByNameKatya(friends) {
    return friends.filter(function(fr){
        return fr === 'Katya';
    });
}

// AJAX with Promise


var method = 'GET', path = '/info/user.json';

var async = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4) {
            if(xhr.status !== 200) {
                reject();

                return;
            }
            resolve(JSON.parse(xhr.responseText));
        }
    });
    xhr.open(method, path, true);
    xhr.send();
});

async
    .then(success)
    .then(filterByNameKatya)
    .then(render)
    .catch(function(error){
        console.error('ERROR: ', error)
    });

