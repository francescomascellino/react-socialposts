import './Posts.scss'

import { useState } from 'react'

function Posts({ avatar, author, date, media, content, id, likes }) {

    //CONVERTE LA DATA AMERICANA IN EU
    let dateCreated = new Date(date)
    let euroDate = dateCreated.getDate() + '/' + (dateCreated.getMonth() + 1) + '/' + dateCreated.getFullYear();

    //FUNZIONE PER SAPERE DA QUANTI MESI IL POST E' STATO CREATO
    let today = new Date(); //PRENDE LA DATA DI OGGI

    function monthsAgo(actualDate, dateCreated) {
        let months;
        months = (actualDate.getFullYear() - dateCreated.getFullYear()) * 12;
        months -= (actualDate.getMonth());
        months += (dateCreated.getMonth());
        return months <= 0 ? 0 : months;
    };

    const monthsCreated = ` (${monthsAgo(today, dateCreated)} mesi fa)`;

    //DIVIDO IL NOME DELL'AUTORE PRENDENDO LO SPAZIO COME DIVISORE IN UN ARRAY CONTENENTE NOME E COGNOME
    const authorSplit = author.split(" ");

    //LE PRIME LETTERE SONO IL CARATTERE 0 DELL'INDICE 0 e 1 DI authorSplit
    const profPicLetters = authorSplit[0].charAt(0) + authorSplit[1].charAt(0);

    const [like, setLike] = useState(false);

    const [likeValue, manageLikeValue] = useState(likes);

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

    return (
        <>

            <div className="post rounded">
                <div className="post__header">
                    <div className="post-meta">
                        <div className="post-meta__icon">

                            {avatar == null

                                ? <div className="profile-pic-default"><span>{profPicLetters}</span></div>

                                : <img className="profile-pic" src={avatar} alt={author} />
                            }

                        </div>
                        <div className="post-meta__data">
                            <div className="post-meta__author">{author}</div>
                            <div className="post-meta__time">{euroDate}{monthsCreated}</div>
                        </div>
                    </div>
                </div>
                <div className="post__text">{content}</div>
                <div className="post__image">
                    <img className='rounded' src={media} alt="" />
                </div>
                <div className="post__footer">
                    <div className="likes js-likes">
                        <div className="likes__cta">
                            <a className={`like-button  js-like-button border ${!like ? "" : "like-button--liked"}`} href="#" data-postid={id} onClick={manageLike}>
                                <i className="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span className="like-button__label"> Mi Piace</span>
                            </a>
                        </div>
                        <div className="likes__counter">
                            Piace a <b id="like-counter-1" className="js-likes-counter">{likeValue}</b> persone
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Posts
