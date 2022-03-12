document.querySelector('button').addEventListener ('click', sendData);

function sendData(event){
    event.preventDefault();
    let form = document.getElementById ('form')
    console.log (form)
    fetch ('http://httpbin.org/post',
    {
        method: 'POST',
        body: new FormData(form),
    })
    .then (response => response.json())
    .then (user => console.log (user))
    .catch(error => console.log (error))
}

