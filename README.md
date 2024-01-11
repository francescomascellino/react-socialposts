# Basics

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