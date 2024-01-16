import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './assets/scss/App.scss'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
    const [count, setCount] = useState(0)

    // DEFINE EFFECT
    useEffect(() => {
        localStorage.setItem("count", count.toString()); // LOCAL STORAGE TEST
        document.title = `Count is ${count}`;
    },
        // [] MEANS THE EFFECT WILL RUN ONCE AND NEVER AGAIN.
        // [count] MEANS THE EFFECT WILL RUN EVERY TIME count CHANGES.
        // WRITE NOTHING (EVENT THE BRACLETS) IF YOU WANT THAT THE EFFECT WILL RUN EVERY TIME THERE IS A CHANGE
        [count]);

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
        {
            "id": 2,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=112",
            "author": {
                "name": "Sofia Perlari",
                "image": "https://unsplash.it/300/300?image=10"
            },
            "likes": 120,
            'likeClass': '',
            "created": "2021-09-03"
        },
        {
            "id": 3,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=234",
            "author": {
                "name": "Chiara Passaro",
                "image": "https://unsplash.it/300/300?image=20"
            },
            "likes": 78,
            'likeClass': '',
            "created": "2021-05-15"
        },
        {
            "id": 4,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=24",
            "author": {
                "name": "Luca Formicola",
                "image": null
            },
            "likes": 56,
            'likeClass': '',
            "created": "2021-04-03"
        },
        {
            "id": 5,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=534",
            "author": {
                "name": "Alessandro Sainato",
                "image": "https://unsplash.it/300/300?image=29"
            },
            "likes": 95,
            'likeClass': '',
            "created": "2022-03-05"
        }
    ]);

    const addPost = (post) => {
        managePosts([...posts, post]);
    };

    // REMEMBER THE SPREAD OPERATOR
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        const newNumber = count;
        setNumbers([...numbers, newNumber]);
        console.log(numbers);
    };

    // DEFINE THE DATA STATE
    const [data, setData] = useState(null);

    // API CALL ON STATE CHANGE USING useEffect
    useEffect(() => {

        // HTTP REQUEST WITH FETCH API
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {

                // GIVES TO THE data State THE data RESPONSE VALUE
                setData(data);
                console.log(data);
            });
    },

        // RUNS THE EFFECT ONLY ONCE WHEN THE COMPONENT IS RENDERED
        []
    );

    return (
        <>
            <h1 className="main-title">Social Posts</h1>

            <div className="container my-3">
                <div className="row flex-column align-items-center">
                    <div className="col-2 text-center my-2">

                        <button className='btn btn-dark w-100' onClick={() => setCount((count) => count + 1)}>Count is {count}</button>

                    </div>

                    <div className="col-2 text-center my-2">

                        <button className='btn btn-dark w-100' onClick={addNumber}>Numbers are {numbers}</button>

                    </div>

                </div>
            </div>

            <div className='posts-list'>
                <div className="row justify-content-center">
                    <div className="col">
                        <PostForm
                            addPost={addPost}
                            posts={posts}
                        />
                    </div>

                </div>
            </div>


            <div id="container" className="posts-list">

                {
                    posts.map((post) => (
                        <Posts
                            key={post.id}
                            avatar={post.author.image}
                            author={post.author.name}
                            date={post.created}
                            media={post.media}
                            content={post.content}
                            id={post.id}
                            likes={Number(post.likes)}
                        />

                    ))
                }

            </div>

            <h1 className="main-title">(Filter Likes &gt; 80)</h1>

            <div id="container" className="posts-list">

                {
                    posts.filter((post) => post.likes > 80).map((post) => (
                        <Posts
                            key={post.id}
                            avatar={post.author.image}
                            author={post.author.name}
                            date={post.created}
                            media={post.media}
                            content={post.content}
                            id={post.id}
                            likes={Number(post.likes)}
                        />

                    ))
                }

            </div>

        </>
    )
}

export default App
