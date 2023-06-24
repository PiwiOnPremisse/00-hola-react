export function TwitterFollowCard ({children, userName = "piwi", isFollowing}){

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    className='tw-follow-card-img'
                    alt="El avatar" 
                    src={'https://unavatar.io/${userName}'}/>
                <div className="tw-follow-card-texto">
                    <strong className="tw-follow-card-strong">{children}</strong>
                    <span className="tw-follow-card-span">@{userName}</span>
                </div>
            </header>


            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
        
    )

}