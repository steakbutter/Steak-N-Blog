const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const messageInput = document.querySelector('#messageBox');
const inputForm = document.querySelector('#inputForm');

inputForm.addEventListener('submit', function(event){
    event.preventDefault(); 
   const userName = userNameInput.value;
   const title = titleInput.value;
   const message = messageInput.value;
   
})

