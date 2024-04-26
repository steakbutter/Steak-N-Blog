
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const userData = {
        username: username.value,
        title: title.value,
        message: message.value
        
    };

    
    let allPosts = JSON.parse(localStorage.getItem('blogPost'));
    if (!allPosts) {
        allPosts = []
    }
    allPosts.push(userData)

    console.log(`username:`, username.value);
    console.log(`blog title:`, title.value);
    console.log(`message:`, message.value);
    localStorage.setItem('blogPost', JSON.stringify(allPosts));

    location.href="blog.html"


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