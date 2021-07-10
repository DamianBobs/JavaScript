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

// Create function createPost() using setTimeout() (2000ms) that pushes a post onto the posts array
// Using a callback function as a parameter so that we can call getPosts() within the setTimeout 2000ms
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// Calling create Posts sending post 3 object and getPosts() as callback parameter
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);