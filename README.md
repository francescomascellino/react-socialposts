# Basics

## Import a component
```js
import Posts from './Posts'
```

## Render a component:
```js
{
    posts.map((post) => (

        <Posts
        key={post.id}
        avatar={post.author.image}
        // OTHER PROPS
    />

    ))
}
```
```js
{
    posts.filter((post) => post.likes > 80).map((post) => (

        <Posts
            key={post.id}
            avatar={post.author.image}
            author={post.author.name}
            // OTHER PROPS
        />

    ))
}
```

## Component *(Posts.jsx)*
```js
import './Posts.scss'

import { useState } from 'react'

function Posts({ prop1, prop2, ecc }) {

    // LOGIC

    return (
        <>

            /* MARRKUP */

        </>
    )
}

export default Posts
```

## Import *useState* Hook
```js
import { useState } from 'react'
```

## Declare State values:
```js
const [like, setLike] = useState(false);

const [likeValue, manageLikeValue] = useState(likes);
```

## Manage the State values
```js
const manageLike = (e) => {
    e.preventDefault();
    if (!like) {
        setLike((like) => !like);
        manageLikeValue((likeValue) => likeValue + 1);
    } else {
        setLike((like) => !like);
        manageLikeValue((likeValue) => likeValue - 1);
    }

}
```

## Recall the function to render the new values:
```js
<a className={`like-button  js-like-button border ${!like ? "" : "like-button--liked"}`} href="#" data-postid={id} onClick={manageLike}>
```

## Pass a function that alter the *State* as a prop
```js
const [posts, managePosts] = useState([
    {
        "id": 1,

        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",

        "media": "https://unsplash.it/600/300?image=171",

        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },

        "likes": 80,
        'likeClass': '',
        "created": "2021-06-25"
    },

    // ECC

]);
```
```js
const addPost = (post) => {
    managePosts([...posts, post]);
};
```
```js
<PostForm
    addPost={addPost}
    posts={posts}
/>
```

## Use the function passed as a prop to pass values to the component's parent
```js
const handleClick = () => {

    const post = {

        id: posts.length + 1,

        // ECC

    };

    addPost(post);

}
```
```js
<button onClick={handleClick}>Add Post</button>
```

## Use the form to add new cards
```js
{/* FORM */}
// HANDLE THE SUBMIT EVENT WITH THE "handleSubmit" FUNCTION
<form action="" onSubmit={handleSubmit} className="bg-light rounded">

    {/* AUTHOR NAME FORM */}
    <div className="mb-3 p-3">
            <label htmlFor="" className="form-label">Author</label>
            <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                placeholder="Rick Sanchez"
                aria-describedby="helpId"
                value={formPayload.author} // ADD A DEFAULT VALUE FOR THE FORM FIELDS
                onChange={handleInputChange} // DEFINE THE FORM VALUES ON CHANGE WITH A FUNCTION
            />
        <small id="helpId" className="text-muted">Enter your name</small>
    </div >

    // OTHER CODE

    {/* SUBMIT BUTTON */}
    <div className="text-center py-2">
        <button type="submit" className="btn btn-dark">Add Post</button>
    </div>

</form>
```

## Define default form values with a state that manages the form payload
```js
const [formPayload, setFormPayload] = useState({
        author: "",
        avatarUrl: "",
        content: "",
        mediaUrl: "",
    });
```
## Assign new values at the input change
```js
const handleInputChange = (e) => {
        const { name, value } = e.target; // TAKES THE INPUT "name" AND "value" FROM THE EVENT TARGET (THE FORM FIELD)
        setFormPayload({
            ...formPayload,
            // EXAMPLE: author: " VALUE OF THE INPUT FIELD"
            [name]: value,

        })
    };
```

## Handle the submit event
```js
const handleSubmit = (e) => {

        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();

        const post = {

            id: posts.length + 1,

            // ASSIGN THE FORM PAYLOAD VALUES TO THE NEW POST VALUES
            content: formPayload.content,

            media: formPayload.mediaUrl,

            author: {
                "name": formPayload.author,
                "image": formPayload.avatarUrl
            },

            likes: Math.floor(Math.random() * 100),

            created: new Date(),

        };

        addPost(post);

        console.log(post);

    }
```