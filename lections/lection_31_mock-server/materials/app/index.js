console.log('Hello example');

fetch('http://localhost:5000/list', {
    method: 'GET'
})
.then(resp => resp.json())
.then(response => {
    console.log(response);
    
    render(response);
});


function render(list) {
    document.body.innerHTML += `<ul>${list.map(item => `<li>${item}</li>`).join('')}</ul>`;
}