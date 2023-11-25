import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const user = [
  {
    userName: "midudev",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    userName: "pheralp",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdz",
    name: "Pablo Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChain",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {
      user.map( ({ userName, name, isFollowing } )=> {
     
        return(

        <TwitterFollowCard 
        key={userName}
        userName={userName} 
        initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>)
      })
      }
    </section>
  );
}
