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