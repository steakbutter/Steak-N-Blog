let form = document.getElementById('formInput');
form.addEventListener('click', function(event){
    event.preventDefault()
    let username = document.getElementById('username');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
})


    if (username.value == "" || title.value == "" || message.value == "") {
        alert("Ensure you input a value in both fields!");
      } else {
        // perform operation with form input
        alert("This form has been successfully submitted!");
        console.log(
          `This form has a username of ${username.value} and title of ${title.value}`
        );
    
        username.value = "";
        title.value = "";

}