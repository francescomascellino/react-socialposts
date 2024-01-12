function PostForm({ addPost, posts }) {

    const handleClick = () => {

        const post = {

            id: posts.length + 1,

            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, vitae assumenda! Maxime nemo voluptatum aperiam odit illum. Porro ut et quis omnis ea ipsam consequatur, officia voluptatibus necessitatibus quibusdam voluptas!",

            media: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            author: {
                "name": "New Author",
                "image": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },

            likes: Math.floor(Math.random() * 100),

            'likeClass': '',

            created: new Date(),

        };

        addPost(post);

        console.log(post);

    }

    return (
        <>
            < div className="mb-3 bg-dark-subtle rounded p-3" >
                <label htmlFor="" className="form-label">Add a new post</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    className="form-control"
                    placeholder="Enter your text here..."
                    aria-describedby="helpId"
                />
                <small id="helpId" className="text-muted">Placeholder form</small>
                <div className="text-center py-2">
                    <button onClick={handleClick}>Add Post</button>
                </div>

            </div >
        </>
    )

}

export default PostForm;