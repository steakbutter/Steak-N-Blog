const username = document.getElementById('username');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
let form = document.getElementById('formInput');
form.addEventListener('submit', function(event){
    event.preventDefault()
    const userData = {
        username: username.value,
        title: title.value,
        message: message.value,
        

    };

    console.log(`username:`, username.value);
    console.log(`blog title:`, title.value);
    console.log(`message:`, message.value);
    localStorage.setItem('username', JSON.stringify(userData.value));

    location.reload


})


//     if (username.value == "" || title.value == "" || message.value == "") {
//         alert("Ensure you input a value in both fields!");
//       } else {
//         // perform operation with form input
//         alert("This form has been successfully submitted!");
//         console.log(
//           `This form has a username of ${username.value} and title of ${title.value}`
//         );
    
//         username.value = "";
//         title.value = "";

// }