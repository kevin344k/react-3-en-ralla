import { useState } from "react";

export function TwitterFollowCard({

  userName,
  children,
  initialIsFollowing

}) {



  const [isFollowing,setIsFollowing]=useState(initialIsFollowing)

const handlerClick=()=> {
  setIsFollowing(!isFollowing)
}
console.log("[TwitterFollowCard] render with isFollow: ",userName);
  console.log(isFollowing);
  const imageSource = `https://unavatar.io/${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSource}
          alt="avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            @{userName}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handlerClick}>{text}</button>
      </aside>
    </article>
  );
}
