const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Create function getPosts() using setTimeout() to simulate call to server (1000ms), 
// then create output variable that appends each posts' title as an <li></li>
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// USING CALLBACK FUNCTION
// Create function createPost() using setTimeout() (2000ms) that pushes a post onto the posts array
// Using a callback function as a parameter so that we can call getPosts() within the setTimeout 2000ms
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// USING PROMISE
// Create function createPost() using setTimeout() (2000ms) that pushes a post onto the posts array
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}

// // Calling createPost and chaining on .then() so that if the promise is resolved, getPosts() will get called
// // If the promise is rejected, .catch() is used to console log each error
// createPost({ title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));

// // Async / Await
// // using async / await so that we can make sure createPost() returns before getPosts() is called
// async function init(){
//     await createPost({ title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }

// init();

// Async / Await with Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();


// // Creating promises various ways
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// // fetch() returns a promise and we use .then() to get json value of the response
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json() );


// // Promise.all can be used to take action only if each promise is resolved
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));