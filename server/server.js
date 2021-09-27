require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT;

//body parsing middleware
//https://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.listen(PORT, () => console.log('listening on port', process.env.PORT))

const posts = [
    {
        id: 1,
        title: 'This is post 1',
        description: 'Eu ex nulla ad proident incididunt qui eiusmod consequat culpa deserunt mollit.'
    },
    {
        id: 2,
        title: 'This is post 2',
        description: 'Minim amet fugiat sint dolore sint excepteur tempor est sint consequat magna id nisi.',
    },
    {
        id: 3,
        title: 'This is post 3',
        description: 'Do ex ullamco anim aliquip reprehenderit deserunt occaecat.'
    }
]


app.get('/posts', (req, res) => {
    console.log(req.cookies)
    res.send(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = +(req.params.id);

    const singlePost = posts.filter( (post) => post.id === postId);
    res.send({
        requestedPostId: req.params.id,
        post: {
            ...singlePost
        }
    });
});

/**Setting cookies
 * https://expressjs.com/en/4x/api.html#res.cookie
 * 
 * Find properties of options parameter in docs
 */
app.get('/cookie', (req, res) => {

    res.cookie('cart', {items: [1,2,3]}, { maxAge: 900000})
    res.send({
        message: "cookie set"
    })
})

app.get('/cookie/add', async (req, res) => {

    const name = req.query.value;
    res.cookie('name', name);

    res.send({
        message: 'New cookie added',
        details: req.cookies
    });
})

app.get('/cookie/clear', (req, res) => {
    res.clearCookie('name');
    res.json({  //Send back a JSON response
        message: "test"
    })
})