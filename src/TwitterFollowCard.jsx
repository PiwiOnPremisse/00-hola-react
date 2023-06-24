import { useState } from "react";

export function TwitterFollowCard ({formatUserName, children, userName = unknown, name}){

    const [IsFollowing,setIsFollowing] = useState(false);



    const imgSrc = `https://unavatar.io/${userName}`;


    const text = IsFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = IsFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!IsFollowing)
    }

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-follow-card-img'
                    alt='El avatar' 
                    src={imgSrc}/>
                <div className='tw-follow-card-texto'>
                    <strong className='tw-follow-card-strong'>{name}</strong>
                    <span className='tw-follow-card-span'>{formatUserName(userName)}</span>
                </div>
            </header>


            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
        
    )

}