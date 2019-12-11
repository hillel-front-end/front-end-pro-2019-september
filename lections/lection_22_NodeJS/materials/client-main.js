console.log('Hi browser');


var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function(){
    console.log(xhr);
    if(xhr.readyState === 4) {
        // console.log(xhr)
        example(xhr);
    }
});

xhr.open('GET', '/info/user.json', true);



function example(xhr) {
    var response = xhr.responseText;
    var parsedReps = JSON.parse(response);
    console.log(parsedReps);
}



// fetch().then();

xhr.send();