export function TwitterFollowCard ({children, userName = "piwi", isFollowing}){

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    className="tw-follow-card-img"
                    src={'https://unavatar.io/${userName}'} 
                    alt="El avatar" 
                />
                <div>
                    <strong>{children}</strong>
                    <span className="tw-follow-card">@{userName}</span>
                </div>
            </header>


            <aside>
                <button className="tw-follow-card">
                    Seguir
                </button>
            </aside>
        </article>
        
    )

}