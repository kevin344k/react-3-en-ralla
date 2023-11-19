export function TwitterFollowCard({formatUserName,userName,name,isFollowing}) {

    console.log(isFollowing);
    const imageSource=`https://unavatar.io/${userName}`
  
    return (
        <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSource} alt="avatar de midudev" />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
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
