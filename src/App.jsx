import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Posts from './Posts'

function App() {
    const [count, setCount] = useState(0)

    const posts = [
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
    ];

    // REMEMBER THE SPREAD OPERATOR

    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        const newNumber = count;
        setNumbers([...numbers, newNumber]);
        console.log(numbers);
    }

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

            <h1 className="main-title">(Filter Likes > 80)</h1>

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
