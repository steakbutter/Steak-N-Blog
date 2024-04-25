// Create a variable to act as the container for blog posts
const postsContainer = document.querySelector('.blog-posts');

// We need to query for our DATA (database, file(.json), localStorage)
const blogData = localStorage.getItem('blogPost');
// validate that we have data
if(!blogData) {
    // if NOT data --> INITALIZE a starting value 
    blogData = [];
}
console.log("Data: ", blogData);  //   [ { "title": "", "description": "", }]
console.log("Type of Data: ", typeof blogData);  // string

// Once we GRAB our stored data --> we need to convert it to an easier datatype
const blogArray = JSON.parse(blogData)  

