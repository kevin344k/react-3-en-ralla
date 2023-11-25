import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const [name,setName] = useState("midudev");
const [isFollowing,setIsFollowing]=useState(false)
console.log(isFollowing);
  return (
    <section className="App">
      <TwitterFollowCard userName={name} initialIsFollowing={isFollowing}>
        Miguel ANgel Duran
      </TwitterFollowCard>

      <button onClick={()=>{setIsFollowing(!isFollowing)}}>Cambio estado de App</button>
    </section>

  
  );
}
