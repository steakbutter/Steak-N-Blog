const sunEmoji = document.querySelector('#sunemoji');
const container = document.querySelector('.container');

let mode = 'light';

sunEmoji.addEventListener ('click', function() {
    if (mode === 'light') {
        mode = "dark";
        container.setAttribute('class', 'dark');  
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});
