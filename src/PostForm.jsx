import { useState } from "react";

function PostForm({ addPost, posts }) {

    // FORM PAYLOAD STATE
    const [formPayload, setFormPayload] = useState({
        author: "",
        avatarUrl: "",
        content: "",
        mediaUrl: "",
    });

    const handleInputChange = (e) => {

        // TAKES THE INPUT "name" AND "value" FROM THE EVENT TARGET (THE FORM FIELD)
        const { name, value } = e.target;
        setFormPayload({
            ...formPayload,

            // EXAMPLE: author: "VALUE OF THE INPUT FIELD"
            [name]: value,

        })
    };

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

            'likeClass': '',

            created: new Date(),

        };

        addPost(post);

        console.log(post);

    }

    return (
        <>

            {/* FORM */}
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
                        value={formPayload.author}
                        onChange={handleInputChange}
                    />
                    <small id="helpId" className="text-muted">Enter your name</small>
                </div >

                {/* AUTHOR AVATAR URL FORM */}
                <div className="mb-3 p-3">
                    <label htmlFor="" className="form-label">Add your profile picture</label>
                    <input
                        type="text"
                        name="avatarUrl"
                        id="avatarUrl"
                        className="form-control"
                        placeholder="Enter your avatar URL here..."
                        aria-describedby="helpId"
                        value={formPayload.avatarUrl}
                        onChange={handleInputChange}
                    />
                    <small id="helpId" className="text-muted">Enter an URL for your profile picture</small>
                </div >

                {/* POST CONTENT FORM */}
                <div className="mb-3 p-3">
                    <label htmlFor="" className="form-label">Add a new post</label>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="Enter your text here..."
                        aria-describedby="helpId"
                        value={formPayload.content}
                        onChange={handleInputChange}
                    >

                    </textarea>
                    <small id="helpId" className="text-muted">Share your thoughts</small>
                </div >

                {/* MEDIA URL FORM */}
                <div className="mb-3 p-3">
                    <label htmlFor="" className="form-label">Add an image to your post</label>
                    <input
                        type="text"
                        name="mediaUrl"
                        id="mediaUrl"
                        className="form-control"
                        placeholder="Enter your image URL here..."
                        aria-describedby="helpId"
                        value={formPayload.mediaUrl}
                        onChange={handleInputChange}
                    />
                    <small id="helpId" className="text-muted">Enter the image URL</small>
                </div >

                {/* SUBMIT BUTTON */}
                <div className="text-center py-2">
                    <button type="submit" className="btn btn-dark">Add Post</button>
                </div>

            </form>

        </>
    )

}

export default PostForm;