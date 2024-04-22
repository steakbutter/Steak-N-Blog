const form = document.getElementById('inputForm');
form.addEventListener('submit', function(event){
    event.preventDefault()
    const usernameInput = document.getElementById('username').value;
    console.log(usernameInput); 
})