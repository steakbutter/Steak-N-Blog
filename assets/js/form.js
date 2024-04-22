const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const messageInput = document.querySelector('#messageBox');
const inputForm = document.querySelector('#inputForm');


function renderLastRegistered() {
  const userName = localStorage.getItem('username');
  const title = localStorage.getItem('title');

  if (!userName || !title) {
    return;
  }

}
inputForm.addEventListener('submit', function(event){
    event.preventDefault(); 
   const userName = userNameInput.value;
   const title = titleInput.value;
   const message = messageInput.value;

   if (userName === '') {
    window.alert('error', 'please enter username');
   } else if (title === '') {
    window.alert ('error', 'please enter title');
   } else (message === '') {
    window.alert ('error', 'please enter message');
   }
   localStorage.setItem ('username', userName);
   localStorage.setItem ('title', title);
   localStorage.setItem ('message', message);
   

   
})

